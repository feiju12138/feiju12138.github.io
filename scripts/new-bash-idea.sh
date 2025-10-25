# Author: FeiJu
# Created Time: 2024/10/28 09:43
# Release: 1.0
# Script Description: 创建新的文章文件，并自动使用IDEA打开文件

hexo new --lang zh-CN $1 && idea source/_posts/$1*.md
