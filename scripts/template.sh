# Author: FeiJu
# Created Time: 2024/11/16 17:24
# Release: 1.0
# Script Description: 输出预设模板

case $1 in
"video")
  echo '<video controls src="../images/00000000000000/00.webm" type="video/webm" style="width:640px;height:340px;"></video>'
;;
"audio")
  echo '<video controls src="../images/00000000000000/00.webm" type="video/webm" style="width:640px;height:340px;"></video>'
;;
"red")
  echo '<span style="color: red"></span>'
;;
"hidden")
  echo '<span class="hidden-text"></span>'
;;
esac
