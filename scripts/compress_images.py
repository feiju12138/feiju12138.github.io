import os
import sqlite3
import hashlib
import subprocess

"""
压缩图片，保存记录到数据库

brew install --cask imageoptim
npm install --global imageoptim-cli
"""

# 数据表名
table_name = "compress_images"
# 获取项目根目录路径
os.chdir("../../")
base_dir = os.getcwd()
# 获取所有图片目录
image_dir_list = os.listdir(f"{base_dir}/source/images")
# 数据库中存储的图片相对路径
image_src_in_database = []
# 磁盘中存储的图片相对路径
image_src_in_disk = []

# 计数器
exec_success_count = 0
exec_failed_count = 0
exec_clean_count = 0
# 是否存在.DS_Store目录
exist_ds_store = 0


def get_file_md5(file):
    file_md5 = None
    with open(file, 'rb') as file_object:
        file_content = file_object.read()
        file_md5 = hashlib.md5(file_content).hexdigest()
    return file_md5


# 遍历所有图片目录
for image_dir in image_dir_list:
    if image_dir == ".DS_Store":
        exist_ds_store += 1
        continue
    # 获取所有图片文件名
    image_name_list = os.listdir(f"{base_dir}/source/images/{image_dir}")
    # 遍历所有图片文件名
    for image_name in image_name_list:
        # print(image_name)

        # 获取图片的绝对路径
        image_path_absolute = f"{base_dir}/source/images/{image_dir}/{image_name}"
        # 获取图片的相对路径
        image_path_relative = f"source/images/{image_dir}/{image_name}"
        # 相对路径添加到列表中
        image_src_in_disk.append(image_path_relative)

        # 通过图片的绝对路径获取图片文件，并计算图片文件的MD5值
        md5 = get_file_md5(image_path_absolute)
        # print(image_path_relative, md5)

        # 查询数据库中是否存在已经压缩图片的记录
        # 连接数据库
        conn = sqlite3.connect(f"{base_dir}/source/scripts/data.db")
        cur = conn.cursor()
        # 查询数据库
        cur.execute(f"SELECT * FROM {table_name} WHERE image_src='{image_path_relative}' AND image_md5='{md5}'")
        # 获取查询结果
        result = cur.fetchone()
        # 关闭数据库连接
        cur.close()
        conn.close()

        if result is None:
            # 如果不存在记录，需要压缩
            p = subprocess.Popen(f"imageoptim {image_path_absolute}", shell=True)
            res = p.wait()
            print(res)
            # 重新计算压缩后图片文件的MD5值
            md5 = get_file_md5(image_path_absolute)
            # print(image_path_relative, md5)

            # 在数据库写入记录
            try:
                # 连接数据库
                inner_conn = sqlite3.connect(f"{base_dir}/source/scripts/data.db")
                inner_cur = inner_conn.cursor()
                # 修改数据
                inner_cur.execute(f"REPLACE INTO {table_name} VALUES('{image_path_relative}', '{md5}')")
                # 提交SQL
                inner_conn.commit()
                # 关闭数据库连接
                inner_cur.close()
                inner_conn.close()
                print("图片压缩完成 已重新写入数据库")
                print("图片文件:", image_path_absolute)
                print("写入的数据:", image_path_relative, md5)
                # 计数器自增1
                exec_success_count += 1
            except Exception as e:
                # 计数器自增1
                exec_failed_count += 1
                print("图片压缩完成 写入数据库失败:", e)
        else:
            # 如果存在记录，则无需压缩
            print("图片压缩跳过 未重新写入数据库")
            print("图片文件:", image_path_absolute)
            continue

"""
清理已删除的图片
"""

# 连接数据库
conn = sqlite3.connect(f"{base_dir}/source/scripts/data.db")
cur = conn.cursor()
# 查询数据库
cur.execute(f"SELECT image_src FROM {table_name}")
result_list = cur.fetchall()
# 关闭数据库连接
cur.close()
conn.close()

# 遍历数据库的结果，放到数据库中所有的filename_md5列表中
for result in result_list:
    image_src_in_database.append(result[0])
# 遍历数据库中所有文件的MD5值列表，将所有数据库中存在但是文章中不存在数据删除
for item in image_src_in_database:
    if item not in image_src_in_disk:
        # 连接数据库
        conn = sqlite3.connect(f"{base_dir}/source/scripts/data.db")
        cur = conn.cursor()
        # 删除数据
        cur.execute(f"DELETE FROM {table_name} WHERE image_src='{item}'")
        # 提交SQL
        conn.commit()
        # 关闭数据库连接
        cur.close()
        conn.close()
        # 计数器自增1
        exec_clean_count += 1

"""
结果日志
"""

# 连接数据库
conn = sqlite3.connect(f"{base_dir}/source/scripts/data.db")
cur = conn.cursor()
# 查询数据库
cur.execute(f"SELECT COUNT(*) FROM {table_name}")
result_count = cur.fetchone()[0]
# 关闭数据库连接
cur.close()
conn.close()

print(f"== 累计完成 {exec_success_count} / {exec_success_count + exec_failed_count} 次 ==")
print(f"== 累计清理数据库 {exec_clean_count} 次 ==")
print(f"== 清理后数据库中数据总数为 {result_count} ==")
