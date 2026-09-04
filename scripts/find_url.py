import os
import re

# 文章文件名列表
post_filename_list = os.listdir(f"/workspace/blog-backup/source/_posts/")
# 输出路径
output_src = "/workspace/blog-backup/result.txt"

# 1. 定义匹配URL的正则表达式（仅http开头，遇到)立即终止截取）
# 关键修改：移除www.匹配分支，新增排除)的匹配规则，遇到)即停止
url_pattern = re.compile(r'https?://[^())\[\]\s<>"]+')
# 2. 定义需要排除的URL前缀列表
exclude_prefixes = [
    "http://127.0.0.1",
    "https://127.0.0.1",
    "http://localhost",
    "http://es",
    "http://example",
    "http://ip地址",
    "http://IP地址",
    "http://域名",
    "https://loli.fj.cn"
]

a = open(output_src, "a")

for post_filename in post_filename_list:
    print(f"正在处理文件: {post_filename}")
    with open(f"/workspace/blog-backup/source/_posts/{post_filename}", "r", encoding="utf-8") as r:  # 增加utf-8编码避免中文乱码
        lines = r.readlines()
        for line in lines:
            # 3. 查找当前行中所有匹配的URL
            matched_urls = url_pattern.findall(line)
            
            for url in matched_urls:
                print(f"找到URL: {url}")
                # 4. 判断URL是否以排除前缀开头（均不满足则写入文件）
                if not any(url.startswith(prefix) for prefix in exclude_prefixes):
                    a.write(f"{url}\n")

a.close()