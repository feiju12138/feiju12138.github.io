/**
 * 屏幕取色器
 */

// 屏幕尺寸
let width = document.body.clientWidth;
let height = document.body.clientHeight;

// 屏幕尺寸修改时刷新屏幕尺寸
window.onresize = function () {
  width = document.body.clientWidth;
  height = document.body.clientHeight;
};

// 鼠标位置
let mouse_x;
let mouse_y;

// 鼠标移动事件
document.onmousemove = function (event) {
  // 解决兼容性，重新获取事件
  let e = event || window.event;

  // 鼠标位置（横纵坐标，单位px）
  mouse_x = e.clientX;
  mouse_y = e.clientY;

  // 获取四个值
  let left = mouse_x / width;
  let right = (width - mouse_x) / width;
  let top = mouse_y / height;
  let bottom = (height - mouse_y) / height;

  // 打印日志
  // console.log(mouse_x * 100 + "%");
  // console.log(mouse_y * 100 + "%");

  // console.log("width: " + width + " " + "height: " + height);
  // console.log("left: " + (left * 100) + "% " + "right: " + (right * 100) + "% " + "top: " + (top * 100) + "% " + "bottom: " + (bottom * 100) + "%");

  // 修改背景颜色
  document.body.style.backgroundColor = `rgba(${top * 255}, ${bottom * 255}, ${left * 255}, ${right * 255}`;

};

