/**
 * 在代码块导航条复制按钮追加代码类型
 */

code_block_list = document.getElementsByClassName("highlight");

function loadCodeBlockButton() {
    // 遍历所有代码块
    for (const code_block of code_block_list) {
        /*
            渲染绿色按钮
         */
        let radius_green = document.createElement("div");
        radius_green.style.position = "absolute";  // 绝对定位
        radius_green.style.backgroundColor = "#43BF41";
        radius_green.style.width = "13px";
        radius_green.style.height = "13px";
        radius_green.style.borderRadius = "50%";
        radius_green.style.left = "52px";
        radius_green.style.marginTop = "-20px";
        // 绘制图标（左上）
        let radius_green_logo_1 = document.createElement("div");
        radius_green_logo_1.style.position = "absolute";  // 绝对定位
        radius_green_logo_1.style.display = "none";  // 默认不显示
        radius_green_logo_1.style.borderTop = "4px solid #1A5610";
        radius_green_logo_1.style.borderRight = "4px solid transparent";
        radius_green_logo_1.style.left = "4px";
        radius_green_logo_1.style.top = "4px";
        radius_green.append(radius_green_logo_1);
        // 绘制图标（右下）
        let radius_green_logo_2 = document.createElement("div");
        radius_green_logo_2.style.position = "absolute";  // 绝对定位
        radius_green_logo_2.style.display = "none";  // 默认不显示
        radius_green_logo_2.style.borderBottom = "4px solid #1A5610";
        radius_green_logo_2.style.borderLeft = "4px solid transparent";
        radius_green_logo_2.style.left = "6px";
        radius_green_logo_2.style.top = "6px";
        radius_green.append(radius_green_logo_2);
        // 显示图标
        radius_green.onmouseenter = function () {
            radius_green_logo_1.style.display = "inline";  // 显示图标1
            radius_green_logo_2.style.display = "inline";  // 显示图标2
        };
        // 不显示图标
        radius_green.onmouseleave = function () {
            radius_green_logo_1.style.display = "none";  // 不显示图标1
            radius_green_logo_2.style.display = "none";  // 不显示图标2
        };
        // 点击事件
        radius_green.onclick = function () {
            radius_green_logo_1.style.display = "none";  // 不显示图标1
            radius_green_logo_2.style.display = "none";  // 不显示图标2
            // 判断是否存在全屏代码块
            const full_screen_code_block = document.getElementById("full-screen-code-block");
            if (full_screen_code_block) {  // 全屏代码幕布已存在
                // 销毁全屏代码块幕布
                full_screen_code_block.remove();
                // 还原代码块高度
                code_block.style.height = "100%";
                // 获取占位节点
                const code_block_old = document.getElementById("code-block-old");
                // 放回原处
                code_block_old.parentNode.insertBefore(code_block, code_block_old);
                // 添加折叠样式
                code_block.getElementsByClassName("table-container")[0].parentElement.classList.add("highlight-fold");
                // 销毁占位节点
                code_block_old.remove();
                /* 解锁滚动条 */
                document.body.style.overflow = "";
            } else {  // 全屏代码幕布不存在
                /* 判断侧边栏是否已打开，获取侧边栏宽度 */
                let sidebar_width = 0;
                const sidebar = document.getElementsByClassName("sidebar-active");
                // 侧边栏已打开
                if (sidebar.length) {
                    // 修改侧边栏宽度
                    sidebar_width = 320;
                }
                // 创建全屏代码块幕布
                let app = document.createElement("div");
                app.id = "full-screen-code-block";
                app.style.position = "fixed";
                app.style.backgroundColor = "#FFF";
                app.style.left = "0";
                app.style.top = "0";
                app.style.width = `${window.innerWidth - sidebar_width}px`;
                app.style.height = "100vh";
                // 设置代码块高度
                code_block.style.height = "96vh";
                /* 锁定滚动条 */
                document.body.style.overflow = "hidden";
                // 创建一个兄弟节点用来占位置
                const code_block_old = document.createElement("div");
                code_block_old.id = "code-block-old";
                code_block.parentNode.insertBefore(code_block_old, code_block);
                // 去除折叠样式
                code_block.getElementsByClassName("table-container")[0].parentElement.classList.remove("highlight-fold");
                // 把代码块放到全屏代码块中
                app.appendChild(code_block);
                // 把全屏代码块添加到body中
                document.body.append(app);
            }
        };
        code_block.insertBefore(radius_green, code_block.firstChild);
        /*
            渲染黄色按钮
         */
        let radius_yellow = document.createElement("div");
        radius_yellow.style.position = "absolute";  // 绝对定位
        radius_yellow.style.backgroundColor = "#F5B839";
        radius_yellow.style.width = "13px";
        radius_yellow.style.height = "13px";
        radius_yellow.style.borderRadius = "50%";
        radius_yellow.style.left = "32px";
        radius_yellow.style.marginTop = "-20px";
        code_block.insertBefore(radius_yellow, radius_green);
        // 绘制图标（中间）
        let radius_yellow_logo = document.createElement("div");
        radius_yellow_logo.style.position = "absolute";  // 绝对定位
        radius_yellow_logo.style.backgroundColor = "#A3691D";
        radius_yellow_logo.style.display = "none";  // 默认不显示
        radius_yellow_logo.style.width = "9px";
        radius_yellow_logo.style.height = "2px";
        radius_yellow_logo.style.left = "2px";
        radius_yellow_logo.style.top = "5px";
        radius_yellow.append(radius_yellow_logo);
        // 显示图标
        radius_yellow.onmouseenter = function () {
            radius_yellow_logo.style.display = "inline";  // 显示图标1
            radius_yellow_logo.style.display = "inline";  // 显示图标2
        };
        // 不显示图标
        radius_yellow.onmouseleave = function () {
            radius_yellow_logo.style.display = "none";  // 不显示图标1
            radius_yellow_logo.style.display = "none";  // 不显示图标2
        };
        // 点击事件
        radius_yellow.onclick = function () {
            // code_block.style.overflow = "hidden";
            if (code_block.getElementsByClassName("table-container")[0].style.display === "none") { // 代码块已隐藏
                // 代码块改为显示
                code_block.getElementsByClassName("table-container")[0].style.display = "";
                // 加上折叠样式
                code_block.getElementsByClassName("table-container")[0].parentElement.classList.add("highlight-fold");
            } else { // 代码块已显示
                // 代码块改为隐藏
                code_block.getElementsByClassName("table-container")[0].style.display = "none";
                // 去除折叠样式
                code_block.getElementsByClassName("table-container")[0].parentElement.classList.remove("highlight-fold");
            }
        };
        /*
            渲染红色按钮
         */
        let radius_red = document.createElement("div");
        radius_red.style.position = "absolute";  // 绝对定位
        radius_red.style.backgroundColor = "#F15F51";
        radius_red.style.width = "13px";
        radius_red.style.height = "13px";
        radius_red.style.borderRadius = "50%";
        radius_red.style.left = "12px";
        radius_red.style.marginTop = "-20px";
        code_block.insertBefore(radius_red, radius_yellow);
        // 绘制图标（反斜线）
        let radius_red_logo_1 = document.createElement("div");
        radius_red_logo_1.style.position = "absolute";  // 绝对定位
        radius_red_logo_1.style.backgroundColor = "#8F1D13";
        radius_red_logo_1.style.display = "none";  // 默认不显示
        radius_red_logo_1.style.transform = "rotate(45deg)";
        radius_red_logo_1.style.width = "9px";
        radius_red_logo_1.style.height = "1px";
        radius_red_logo_1.style.left = "2px";
        radius_red_logo_1.style.top = "5px";
        radius_red.append(radius_red_logo_1);
        // 绘制图标（正斜线）
        let radius_red_logo_2 = document.createElement("div");
        radius_red_logo_2.style.position = "absolute";  // 绝对定位
        radius_red_logo_2.style.backgroundColor = "#8F1D13";
        radius_red_logo_2.style.display = "none";  // 默认不显示
        radius_red_logo_2.style.transform = "rotate(-45deg)";
        radius_red_logo_2.style.width = "9px";
        radius_red_logo_2.style.height = "1px";
        radius_red_logo_2.style.left = "2px";
        radius_red_logo_2.style.top = "5px";
        radius_red.append(radius_red_logo_2);
        // 显示图标
        radius_red.onmouseenter = function () {
            radius_red_logo_1.style.display = "inline";  // 显示图标1
            radius_red_logo_2.style.display = "inline";  // 显示图标2
        };
        // 不显示图标
        radius_red.onmouseleave = function () {
            radius_red_logo_1.style.display = "none";  // 不显示图标1
            radius_red_logo_2.style.display = "none";  // 不显示图标2
        };
        // 点击事件
        radius_red.onclick = function () {
            code_block.remove();
            // 判断是否存在全屏代码块
            const full_screen_code_block = document.getElementById("full-screen-code-block");
            if (full_screen_code_block) {  // 全屏代码幕布已存在
                // 销毁全屏代码块幕布
                full_screen_code_block.remove();
                // 获取占位节点
                const code_block_old = document.getElementById("code-block-old");
                // 销毁占位节点
                code_block_old.remove();
                /* 解锁滚动条 */
                document.body.style.overflow = "";
            }
            // 弹出吐司
            showToast("代码块关闭成功（如需恢复代码块请刷新当前页）", 3000);
        };
    }
}

if (code_block_list.length) {
    loadCodeBlockButton();
}
