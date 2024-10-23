/**
 * 在左上角显示吐司
 */
function showToast(msg, duration) {
    duration = isNaN(duration) ? 3000 : duration;
    const m = document.createElement("div");
    m.innerHTML = msg;
    m.style.cssText = "background: #222; opacity: 0.8; height: auto; color: #fff; text-align: center; border-radius: 4px; position: fixed; top: 0; left: 0; z-index: 30;";
    document.body.appendChild(m);
    setTimeout(function () {
        const d = 0.5;
        m.style.webkitTransition = "-webkit-transform " + d + "s ease-in, opacity " + d + "s ease-in";
        m.style.opacity = "0";
        setTimeout(function () {
            document.body.removeChild(m);
        }, d * 1000);
    }, duration);
}
