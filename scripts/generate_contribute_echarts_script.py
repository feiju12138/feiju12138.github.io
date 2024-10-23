import os
import json
import datetime

# 计数器
exec_count = 0

# 数据表名
table_name = "contribute_echarts"
# 切换到项目根目录路径
os.chdir("../../")
base_dir = os.getcwd()
# 中文文章文件名列表
post_filename_list = os.listdir(f"{base_dir}/source/_posts/")

data_map = dict()

# 寻找所有待处理的数据
for post_filename in post_filename_list:
    if post_filename == "未完待更":
        continue
    if post_filename == ".DS_Store":
        continue
    # 获取文件绝对路径
    file_src = f"{base_dir}/source/_posts/{post_filename}"
    # 读取文件
    with open(file_src) as f:
        content = f.read()
        # 获取文章创建日期
        if content.find("date: ") > -1:
            t = content[content.find("date: "):content.find("date: ") + 16]
            t = t[6:]
            # 判断这个日期是否已存在
            if data_map.get(t) == None:
                # 不存在就将计数器置为1
                data_map[t] = 1
            else:
                # 已存在就将计数器自增1
                data_map[t] = data_map[t] + 1

# # 连接数据库
# conn = sqlite3.connect(f"{base_dir}/source/scripts/data.db")
# cur = conn.cursor()
# # 将数据存入数据库
# for key in data_map.keys():
#     cur.execute(f"REPLACE INTO {table_name} VALUES('{key}', '{data_map[key]}')")
#     conn.commit()
# # 关闭数据库
# cur.close()
# conn.close()

# 分年度存储
date_map_year = dict()

# 从建站那一年的元旦遍历到明年元旦
# 建站时间
site_date = datetime.datetime(2019, 11, 1)
# 建站那一年的元旦
start_date = datetime.datetime(site_date.year, 1, 1)
# 今天
now_date = datetime.datetime.now()
# 明年的元旦
end_date = datetime.datetime(now_date.year + 1, 1, 1)
# 遍历游标
current_date = start_date
while current_date.year < end_date.year:
    # print(current_date)
    if len(str(current_date.month)) == 2:
        month = current_date.month
    else:
        month = f"0{current_date.month}"
    if len(str(current_date.day)) == 2:
        day = current_date.day
    else:
        day = f"0{current_date.day}"
    current_date_string = f"{current_date.year}-{month}-{day}"
    # print(current_date_string)
    count = data_map.get(current_date_string, 0)
    if date_map_year.get(f"{current_date.year}") is None:
        date_map_year[f"{current_date.year}"] = []
    date_map_year[f"{current_date.year}"].append([f"{current_date_string}", count])
    # print(a)
    # 自增
    current_date = current_date + datetime.timedelta(days=1)

# 准备将要写入HTML文件的内容
file_content_html = ""
# 准备将要写入JS文件的内容
file_content_js = "/**\n * 渲染贡献日历\n */\n"
# 定义HTML头部，引入echarts.js
file_content_html += "<!doctype html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\"\n          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>貢獻</title>\n</head>\n<body>\n"
# 循环写入每一年的数据
index = end_date.year - 1
while index >= start_date.year:
    data = date_map_year[f"{index}"]
    file_content_html += f"""
<h2>{index}年度</h2>
<div id="app-contribute-{index}" style="width: 100%; height: 100%;"></div>
"""
    file_content_js += f"""
if (document.getElementById("app-contribute-{index}") !== null) {{
    echarts.init(document.getElementById("app-contribute-{index}")).setOption({{
        /* 悬浮窗 */
        tooltip: {{
            padding: 10,
            borderColor: "#FFF",
            borderWidth: 1,
            formatter: function (param) {{
                return `<div style="font-size: 14px;">${{param.value[0]}}: ${{param.value[1]}}</div>`;
            }}
        }},
        visualMap: {{
            show: false,
            min: 1,
            max: 5,
            minOpen: true,
            maxOpen: true,
            calculable: false,
            inRange: {{
                symbol: "rect",
                color: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"]
            }},
            itemWidth: 12,
            itemHeight: 12,
            type: "piecewise",
            orient: "horizontal",
            left: "center",
            top: 0
        }},
        /* 主体 */
        calendar: {{
            top: 0,
            range: "{index}",
            left: "center",
            cellSize: [13, 13],
            splitLine: {{
                /* 月份分割线 */
                show: false
            }},
            name: {{
                textStyle: {{
                    color: "#3C4858"
                }}
            }},
            itemStyle: {{
                borderColor: "#fff",
                borderWidth: 2
            }},
            yearLabel: {{
                /* 左侧年份 */
                show: false
            }},
            monthLabel: {{
                /* 上面月份 */
                show: false
            }},
            dayLabel: {{
                /* 左侧星期 */
                show: false
            }}
        }},
        series: {{
            type: "heatmap",
            coordinateSystem: "calendar",
            calendarIndex: 0,
            data: {json.dumps(data)}
        }}
    }});
}}
"""
    # 自减1
    index -= 1
# 定义HTML尾部
file_content_html += "\n</body>\n</html>"
# 写入文件
with open(f"{base_dir}/source/contribute/index.html", mode="w") as f:
    f.write(file_content_html)
with open(f"{base_dir}/source/contribute/index.js", mode="w") as f:
    f.write(file_content_js)

print("贡献日历计数完成")
