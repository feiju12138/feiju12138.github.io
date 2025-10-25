@echo off

hexo new --lang zh-CN %1 && idea %CD%\source\_posts\%1*.md
