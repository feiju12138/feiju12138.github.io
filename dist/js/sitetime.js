/**
 * 网站运行时间统计
 */
function siteTime() {
    window.setTimeout("siteTime()", 1000);
    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;
    let years = days * 365;
    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth() + 1;
    let todayDate = today.getDate();
    let todayHour = today.getHours();
    let todayMinute = today.getMinutes();
    let todaySecond = today.getSeconds();
    // 在这里设置创站的年月日时分秒
    let t1 = Date.UTC(2019, 11, 22, 15, 53, 18);
    let t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
    let diff = t2 - t1;
    let diffYears = Math.floor(diff / years);
    let diffDays = Math.floor((diff / days) - diffYears * 365);
    let diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
    let diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);
    let diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds);
    document.getElementById("sitetime").innerHTML = " 本站已稳定运行 " + diffYears + " 年 " + diffDays + " 天 " + diffHours + " 小时 " + diffMinutes + " 分钟 " + diffSeconds + " 秒";
}

// 渲染倒计时
siteTime();
