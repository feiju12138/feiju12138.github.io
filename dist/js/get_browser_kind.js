/**
 * 获取浏览器类型
 * @returns {number}
 */

const EDGE = 1;
const OPERA = 2;
const FIREFOX = 3;
const CHROME = 4;
const SAFARI = 5;

function getBrowserKind() {

    // 取得浏览器的User-Agent字符串
    const user_agent = navigator.userAgent;

    if (user_agent.indexOf("Edg") !== -1) {
        return EDGE;
    } else if (user_agent.indexOf("OPR") !== -1) {
        return OPERA;
    } else if (user_agent.indexOf("Firefox") !== -1) {
        return FIREFOX;
    } else if (user_agent.indexOf("Chrome") !== -1) {
        return CHROME;
    } else if (user_agent.indexOf("Safari") !== -1) {
        return SAFARI;
    }
}
