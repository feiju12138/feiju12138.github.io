/**
 * 渲染鼠标指针光环
 */
(function () {

    // 小屏手机不显示
    if (screen.width < 768) {
        return;
    }

    // 鼠标位置初始值
    let mouseX = 10;
    let mouseY = document.body.clientHeight / 3;
    // 鼠标位置偏移量
    let mouseOffset = -25;
    // 旋转激活标志
    let revolveFlag = false;
    // 激活追踪标志
    let moveFlag = false;

    // 指针圆环图片
    let cursor_circle_img = "/dist/images/cursor_circle.png";
    // 指针圆环旋转偏移量
    let cursor_circle_rotate_offset = 0;
    // 指针圆环缩放偏移量
    let cursor_circle_scale_offset = 1.5;

    // 创建指针圆环对象
    let cursor_div = document.createElement("div");
    cursor_div.id = "cursorplus";
    // 设置指针圆环属性
    cursor_div.style.position = "fixed";
    cursor_div.style.width = "76px";
    cursor_div.style.height = "76px";
    cursor_div.style.left = `${mouseX}px`;
    cursor_div.style.top = `${mouseY}px`;
    cursor_div.style.zIndex = "20";
    cursor_div.style.background = `url('${cursor_circle_img}')`;
    cursor_div.style.transform = `scale(${cursor_circle_scale_offset}) rotate(${cursor_circle_rotate_offset}deg)`;
    // 挂载标签
    document.body.appendChild(cursor_div);

    setInterval(function () {
        // 指针圆环旋转
        if (revolveFlag) {
            cursor_div.style.transform = `scale(${cursor_circle_scale_offset}) rotate(${cursor_circle_rotate_offset}deg)`;
            if (cursor_circle_rotate_offset >= 360) {
                cursor_circle_rotate_offset = 0;
            } else {
                cursor_circle_rotate_offset = cursor_circle_rotate_offset + 1;
            }
        }
        // 指针圆环追踪
        if (moveFlag) {
            cursor_div.style.left = `${mouseX}px`;
            cursor_div.style.top = `${mouseY}px`;
        }
    }, 1);

    // 单击指针圆环时激活旋转
    cursor_div.addEventListener("click", function () {
        revolveFlag = !revolveFlag;
    });

    // 双击指针圆环时激活跟随
    cursor_div.addEventListener("dblclick", function () {

        // 强制激活旋转
        revolveFlag = true;
        // 激活追踪
        moveFlag = true;

        // 修改为绝对定位
        cursor_div.style.position = "absolute";
        // 禁用鼠标事件，实现点击穿透
        cursor_div.style.pointerEvents = "none";

        // 鼠标移动事件
        document.addEventListener("mousemove", function (e) {
            // 刷新位置
            mouseX = e.pageX + mouseOffset;
            mouseY = e.pageY + mouseOffset;
        });
        // 鼠标滚轮事件
        document.addEventListener("wheel", function (e) {
            // 刷新位置
            mouseX = e.pageX + mouseOffset;
            mouseY = e.pageY + mouseOffset;
        });
        // 鼠标按下事件
        document.addEventListener("mousedown", function (e) {
            // 指针圆环缩小
            cursor_circle_scale_offset = 1.3;
            cursor_div.style.transform = `scale(${cursor_circle_scale_offset}) rotate(${cursor_circle_rotate_offset}deg)`;
        });
        // 鼠标抬起事件
        document.addEventListener("mouseup", function (e) {
            // 指针圆环恢复
            cursor_circle_scale_offset = 1.5;
            cursor_div.style.transform = `scale(${cursor_circle_scale_offset}) rotate(${cursor_circle_rotate_offset}deg)`;
        });
    });

})();
