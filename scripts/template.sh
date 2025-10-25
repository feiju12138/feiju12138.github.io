# Author: FeiJu
# Created Time: 2024/11/16 17:24
# Release: 1.0
# Script Description: 输出预设模板

case $1 in
"video")
  echo '<video src="/images/00000000000000/00.mp4" preload="metadata" controlslist="nodownload" controls playsinline></video>'
;;
"audio")
  echo '<audio controls><source src="/images/00000000000000/00.mp3"></audio>'
;;
"red")
  echo '<font color="red"></font>'
;;
"hidden")
  echo '<span class="hidden-text"></span>'
;;
esac
