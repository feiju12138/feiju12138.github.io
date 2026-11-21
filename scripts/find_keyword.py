import os

count = 0
# 切换到项目根目录路径
os.chdir("../../")
base_dir = os.getcwd()
# 中文文章文件名列表
post_filename_list = os.listdir(f"{base_dir}/source/_posts/")


# 寻找所有待处理的数据
for post_filename in post_filename_list:
    if post_filename == ".DS_Store":
        continue
    # 获取文件绝对路径
    file_src = f"{base_dir}/source/_posts/{post_filename}"
    # 读取文件
    with open(file_src) as f:
        content = f.read()
        if (content.find("Windows") > -1 or content.find("windows") > -1) and content.find("wget") > -1:
            print(file_src)
            count += 1
print(count)