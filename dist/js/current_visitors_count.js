/**
 * 网站当前访客统计
 */
function current_visitors_count() {
    // 建立连接
    const ws = new WebSocket("wss://counter.loli.fj.cn");
    // 接受消息
    ws.addEventListener("message", function (event) {
        document.getElementById("current_visitors_count").innerText = event.data;
    });
}

current_visitors_count();
