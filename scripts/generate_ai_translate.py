import os
import time
import openai
import sqlite3
import hashlib

"""
采集AI翻译，写入文件作为英文文章
"""

# 数据表名
table_name = "generate_ai_translate"
# 切换到项目根目录路径
os.chdir("../../")
base_dir = os.getcwd()
# 中文文章文件名列表
post_cn_filename_list = os.listdir(f"{base_dir}/source/_posts/zh-CN/")
# 英文文章文件名列表
post_en_filename_list = os.listdir(f"{base_dir}/source/_posts/en/")


# 延时3秒
def pause():
    s = ''
    for i in range(3):
        time.sleep(1)
        s += '#'
        print('\r[%-3s]' % s, end='')
    print()


openai_api_key_list = os.getenv("OPENAI_API_KEY_MULTIPLE")
if openai_api_key_list is None:
    print("获取OPENAI密钥失败，程序终止")
    quit()
openai_api_key_list = openai_api_key_list.split(",")

# 计数器
exec_finish_count = 0
exec_success_count = 0
exec_failed_count = 0
exec_get_count = 0
exec_clean_database_count = 0
exec_clean_disk_count = 0
# 是否存在.DS_Store目录
exist_ds_store = 0


# 询问AI摘要
def ask_ai(text):
    global exec_finish_count
    print("正在发送请求...")
    # openai.api_key = os.getenv("OPENAI_API_KEY")
    openai.api_key = openai_api_key_list[exec_finish_count % len(openai_api_key_list)]
    print("当前使用的密钥:", openai.api_key)
    chat_completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user",
                                                                                     "content": f"接下来我将发给你一段使用Markdown书写的文档，请不要修改任何格式，将中文部分翻译为英文：{text}"}])
    ai_say = chat_completion.choices[0].message.content
    # print("ai_say:", ai_say)
    exec_finish_count += 1
    return ai_say


# 定义写入数据库函数
def write_database(inner_filename_md5, inner_content_md5):
    global exec_success_count
    global exec_failed_count
    try:
        # 连接数据库
        inner_conn = sqlite3.connect(f"{base_dir}/source/scripts/data.db")
        inner_cur = inner_conn.cursor()
        # 修改数据
        inner_cur.execute(f"REPLACE INTO {table_name} VALUES('{inner_filename_md5}', '{inner_content_md5}')")
        # 提交SQL
        inner_conn.commit()
        # 关闭数据库连接
        inner_cur.close()
        inner_conn.close()
        print("AI翻译 询问 完成 已重新写入数据库", post_cn_filename)
        pause()
        # 计数器自增1
        exec_success_count += 1
    except Exception as inner_e:
        # 计数器自增1
        exec_failed_count += 1
        print("AI翻译 询问 失败 未写入数据库", post_cn_filename, inner_e)


# 遍历文件名
for post_cn_filename in post_cn_filename_list:
    if post_cn_filename == ".DS_Store":
        exist_ds_store += 1
        continue
    # print(post_cn_filename)

    # 获取文件绝对路径
    file_src = f"{base_dir}/source/_posts/zh-CN/{post_cn_filename}"
    # print(file_src)

    # 读取文件
    with open(file_src) as f:
        content_all = f.read()
        content = content_all[content_all.find("## 前言"):]
        content = content[:4000]
        # print(content)

        # 计算当前文本内容的MD5
        content_md5 = hashlib.md5(content.encode("utf-8")).hexdigest()
        # 计算文件名的MD5
        filename_md5 = hashlib.md5(post_cn_filename.encode("utf-8")).hexdigest()

        # 连接数据库
        conn = sqlite3.connect(f"{base_dir}/source/scripts/data.db")
        cur = conn.cursor()
        # 查询数据库
        cur.execute(f"SELECT * FROM {table_name} WHERE filename_md5='{filename_md5}'")
        # 获取查询结果
        result_list = cur.fetchall()
        # 关闭数据库连接
        cur.close()
        conn.close()

        if len(result_list) == 0:  # 没有查询到结果
            # 询问GPT
            try:
                ai_say = ask_ai(content)
            except Exception as e:
                ai_say = None
                err = e
            if ai_say is not None:
                # 写入文件
                ## 获取中文文章的头部
                content_head = content_all[:content_all.find("## 前言")]
                ## 修改为英文
                content_head = content_head.replace("lang: zh-CN", "lang: en")
                ## 修改标题前缀
                index_left = content_head.find("【")
                index_right = content_head.find("】")
                title_prefix = content_head[index_left:index_right + 1]
                content_head = content_head.replace(title_prefix, "【英文】")
                ## 拼接为新的文件
                new_content = content_head + ai_say
                ## 写入文件
                with open(f"{base_dir}/source/_posts/en/{post_cn_filename}", mode="w") as f:
                    f.write(new_content)
                print("文件写入完成", f"{base_dir}/source/_posts/en/{post_cn_filename}")
                # 写入数据库
                write_database(filename_md5, content_md5)
            else:
                print("AI摘要 询问 失败 未写入数据库", post_cn_filename, err)
                # 计数器自增1
                exec_failed_count += 1
        else:  # 查询到结果了
            # 文章被更新了
            if content_md5 != result_list[0][1]:
                # 询问GPT
                try:
                    ai_say = ask_ai(content)
                except Exception as e:
                    ai_say = None
                    err = e
                if ai_say is not None:
                    # 写入文件
                    ## 获取中文文章的头部
                    content_head = content_all[:content_all.find("## 前言")]
                    ## 修改为英文
                    content_head = content_head.replace("lang: zh-CN", "lang: en")
                    ## 修改标题前缀
                    index_left = content_head.find("【")
                    index_right = content_head.find("】")
                    title_prefix = content_head[index_left:index_right + 1]
                    content_head = content_head.replace(title_prefix, "【英文】")
                    ## 拼接为新的文件
                    new_content = content_head + ai_say
                    ## 写入文件
                    with open(f"{base_dir}/source/_posts/en/{post_cn_filename}", mode="w") as f:
                        f.write(new_content)
                    print("文件写入完成", f"{base_dir}/source/_posts/en/{post_cn_filename}")
                    # 写入数据库
                    write_database(filename_md5, content_md5)
                else:
                    print("AI摘要 询问 失败 未写入数据库", post_cn_filename, err)
                    # 计数器自增1
                    exec_failed_count += 1
            else:
                # 计数器自增1
                exec_success_count += 1

        # 连接数据库
        conn = sqlite3.connect(f"{base_dir}/source/scripts/data.db")
        cur = conn.cursor()
        # 查询数据库
        cur.execute(f"SELECT COUNT(*) FROM {table_name}")
        result_count = cur.fetchone()[0]
        # 关闭数据库连接
        cur.close()
        conn.close()

    print(
        f"== 脚本完成进度 {exec_success_count + exec_failed_count + exec_get_count} / {len(post_cn_filename_list) - exist_ds_store} ==")
    print(f"== 数据库写入进度 {result_count} / {len(post_cn_filename_list) - exist_ds_store} ==")

"""
获取数据库中的所有文件名MD5列表
获取磁盘中的所有文件名列表
"""

# 连接数据库
conn = sqlite3.connect(f"{base_dir}/source/scripts/data.db")
cur = conn.cursor()
# 查询数据库
cur.execute(f"SELECT filename_md5 FROM {table_name}")
result_list = cur.fetchall()
# 关闭数据库连接
cur.close()
conn.close()
# 获取数据库中的所有文件名MD5列表
filename_md5_in_database_list = []
for result in result_list:
    filename_md5_in_database_list.append(result[0])
# print("数据库中的文件名MD5值", filename_md5_in_database_list)

# 获取磁盘中的所有文件名列表
filename_in_disk_list = os.listdir(f"{base_dir}/source/_posts/en/")
# print("磁盘中的文件名MD5值", filename_in_disk_list)

# 获取磁盘中的所有文件名MD5列表
filename_md5_in_disk_list = []
for filename_in_disk in filename_in_disk_list:
    # 计算文件名MD5值
    filename_md5_in_disk = hashlib.md5(filename_in_disk.encode("utf-8")).hexdigest()
    filename_md5_in_disk_list.append(filename_md5_in_disk)

"""
清理数据库中多余的记录
"""

# 遍历数据库中所有文件的MD5值列表，将所有数据库中存在但是磁盘中不存在数据删除
for filename_md5_in_database in filename_md5_in_database_list:
    if filename_md5_in_database not in filename_md5_in_disk_list:
        print("数据库中多余文件名MD5值", filename_md5_in_database)
        # 连接数据库
        conn = sqlite3.connect(f"{base_dir}/source/scripts/data.db")
        cur = conn.cursor()
        # 删除数据
        cur.execute(f"DELETE FROM {table_name} WHERE filename_md5='{filename_md5_in_database}'")
        # 提交SQL
        conn.commit()
        # 关闭数据库连接
        cur.close()
        conn.close()
        # 计数器自增1
        exec_clean_database_count += 1
        print("删除了数据库中的数据:", filename_md5_in_database)

"""
清理磁盘中多余的记录
"""

post_en_filename_list_tmp = post_en_filename_list
# 遍历所有中文目录下的文件名
for post_cn_filename_item in post_cn_filename_list:
    # 如果这个文章在中文列表中存在，就看一下在英文列表中是否也存在
    if post_cn_filename_item in post_en_filename_list_tmp:
        # 如果这个文章在中文列表中存在的同时在英文列表中页存在，就将这个文章从英文列表中移除
        post_en_filename_list_tmp.remove(post_cn_filename_item)
# 遍历剩下的英文文件名
for post_en_filename_item_tmp in post_en_filename_list_tmp:
    # 根据文件名删除文件
    os.remove(f"{base_dir}/source/_posts/en/{post_en_filename_item_tmp}")
    print("删除了磁盘中的文件:", f"{base_dir}/source/_posts/en/{post_en_filename_item_tmp}")
    exec_clean_disk_count += 1

"""
结果日志
"""

print(f"== 询问AI成功 {exec_success_count} 次 ==")
print(f"== 询问AI失败 {exec_failed_count} 次 ==")
print(f"== 数据库中已存在 {exec_get_count} 次 ==")
print(f"== 数据库已清理 {exec_clean_database_count} 次 ==")
print(f"== 磁盘已清理 {exec_clean_disk_count} 次 ==")
