/**
 * 加载看板娘
 */

/*
console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);
*/

/*
气泡优先级注释：
  1：预留
  2：朗诵歌词
  3：预留
  4：事件触发
  5：切换模型
  6：对话反馈，一言，语言输入
  7：欢迎语句
  8：节日播报
  9：预留
 */

// 音乐搜索后台接口
// 部署方法详见：https://github.com/Binaryify/NeteaseCloudMusicApi
const music_api = "https://netease-cloud-music-api.loli.fj.cn";

// 一言API接口
const hitokoto_api = "https://v1.hitokoto.cn";

// 互动对话配置
const json_path = "/dist/live2d/v2/waifu.json";

//const api_path = `https://cdn.jsdelivr.net/gh/feiju12138/blog-live2d-model`;
const api_path = "/dist/live2d/v2/model";

// 朗读者对象
var synth = undefined;
const msg = new SpeechSynthesisUtterance();

// 初始化live2d
if (screen.width >= 768) {
    document.body.insertAdjacentHTML("beforeend", `
    <div id="waifu-toggle">
			<span>看板娘</span>
		</div>`);
    const toggle = document.getElementById("waifu-toggle");
    toggle.addEventListener("click", function () {
        toggle.classList.remove("waifu-toggle-active");
        if (toggle.getAttribute("first-time")) {
            loadWidget();
            toggle.removeAttribute("first-time");
        } else {
            localStorage.removeItem("waifu-display");
            document.getElementById("waifu").style.display = "";
            setTimeout(function () {
                document.getElementById("waifu").style.bottom = 0;
            }, 0);
        }
    });
    if (localStorage.getItem("waifu-display") && Date.now() - localStorage.getItem("waifu-display") <= 86400000) {
        toggle.setAttribute("first-time", true);
        setTimeout(function () {
            toggle.classList.add("waifu-toggle-active");
        }, 0);
    } else {
        loadWidget();
    }
}

// 加载live2d
function loadWidget() {

    // APayer的音量变量
    let volumeArr = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
    let volumeIndex = 7;

    let messageTimer;
    let modelList;

    localStorage.removeItem("waifu-display");
    sessionStorage.removeItem("waifu-text");
    document.body.insertAdjacentHTML("beforeend", `
        <div id="waifu">
			<div id="waifu-tips"></div>
			<canvas id="live2d" width="800" height="800"></canvas>
		</div>`);
    setTimeout(function () {
        document.getElementById("waifu").style.bottom = 0;
    }, 0);

    // 初始化模型
    (function () {
        // 从localStorage中获取模型编号
        let modelId = localStorage.getItem("modelId");
        // 如果localStorage中没有模型编号，则将模型编号置0
        if (modelId === null) {
            modelId = 0;
        }

        loadModel(modelId);

        fetch(json_path)
            .then(response => response.json())
            .then(result => {
                window.addEventListener("mouseover", function (event) {
                    for (let {selector, text} of result.mouseover) {
                        if (!event.target.matches(selector)) continue;
                        if (selector === "#live2d") {
                            // 如果抚摸的是live2d，则开启一言
                            showHitokoto();
                            return;
                        } else {
                            text = randomSelection(text);
                            text = text.replace("{text}", event.target.innerText);
                            showMessage(text, 3000, 4);
                            return;
                        }
                    }
                });
                window.addEventListener("click", function (event) {
                    for (let {selector, text} of result.click) {
                        if (!event.target.matches(selector)) continue;
                        if (selector === "#live2d") {
                            // 如果点击的是live2d，则开启对话模式
                            chatTogether();
                            return;
                        } else {
                            text = randomSelection(text);
                            text = text.replace("{text}", event.target.innerText);
                            showMessage(text, 3000, 4);
                            return;
                        }
                    }
                });
                result.seasons.forEach(({date, text}) => {
                    if (date === undefined) return;
                    const now = new Date();
                    const month = (now.getMonth() + 1).toString().padStart(2, "0");
                    const day = now.getDate().toString().padStart(2, "0");
                    if (date === `${month}/${day}`) {
                        text = randomSelection(text);
                        showMessage(text, 5000, 8);
                    }
                });
            });
    })();

    // 欢迎语句设置
    (function () {
        let text;

        if (document.referrer !== "") {
            const referrer = new URL(document.referrer);
            const domain = referrer.hostname.split(".")[1];
            if (location.hostname === referrer.hostname) text = `欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;
            else if (domain === "baidu") text = `Hello！来自 百度搜索 的朋友<br>你是搜索 <span>${referrer.search.split("&wd=")[1].split("&")[0]}</span> 找到的我吗？`;
            else if (domain === "so") text = `Hello！来自 360搜索 的朋友<br>你是搜索 <span>${referrer.search.split("&q=")[1].split("&")[0]}</span> 找到的我吗？`;
            else if (domain === "google") text = `Hello！来自 谷歌搜索 的朋友<br>欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;
            else text = `Hello！来自 <span>${referrer.hostname}</span> 的朋友`;
        } else if (location.pathname === "/") { // 如果是主页
            const now = new Date().getHours();
            if (now > 5 && now <= 7) text = "早上好！一日之计在于晨，美好的一天就要开始了。";
            else if (now > 7 && now <= 11) text = "上午好！工作顺利嘛，不要久坐，多起来走动走动哦！";
            // else if (now > 11 && now <= 13) text = "中午了，工作了一个上午，现在是午餐时间！";
            else if (now > 13 && now <= 17) text = "午后很容易犯困呢，今天的运动目标完成了吗？";
            else if (now > 17 && now <= 19) text = "傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~";
            else if (now > 19 && now <= 21) text = "晚上好，今天过得怎么样？";
            else if (now > 21 && now <= 23) text = ["已经这么晚了呀，早点休息吧，晚安~", "深夜时要爱护眼睛呀！"];
            else if (now > 23 || now < 5) text = "你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？";
        } else {
            text = `欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;
        }
        showMessage(text, 5000, 7);
    })();

    // 事件绑定
    (function () {
        // 监听键盘F12
        window.addEventListener("keyup", function (event) {
            event = event || window.event;
            if (event.keyCode === 123) {
                showMessage("哈哈，你打开了控制台，是想要偷看我裙子下的小秘密吗？<br>>﹏<", 2000, 6);
            }
        });
        // 监听切换页面
        window.addEventListener("visibilitychange", function () {
            if (!document.hidden) showMessage("哇，你终于回来了~<br>◝(⑅•ᴗ•⑅)◜..°♡", 2000, 6);
        });
    })();

    // 与Aplayer联动
    (function () {
    // console.log("Live2d & APlayer 开始联动")
        let lrcTmp = "";
        ap.on("timeupdate", function () {
            let lrcCurrent = document.querySelector(".aplayer-lrc-contents .aplayer-lrc-current").innerHTML;
            if (lrcTmp !== lrcCurrent) {
                lrcTmp = lrcCurrent;
                // console.log(lrcCurrent);
                showMessage(lrcCurrent, 2000, 2);
            }
        });
    })();

    // 气泡
    function showMessage(text, timeout, priority) {
        if (!text || (sessionStorage.getItem("waifu-text") && sessionStorage.getItem("waifu-text") > priority)) return;
        if (messageTimer) {
            clearTimeout(messageTimer);
            messageTimer = null;
        }
        text = randomSelection(text);
        sessionStorage.setItem("waifu-text", priority);
        const tips = document.getElementById("waifu-tips");
        tips.innerHTML = text;
        tips.classList.add("waifu-tips-active");
        messageTimer = setTimeout(function () {
            sessionStorage.removeItem("waifu-text");
            tips.classList.remove("waifu-tips-active");
        }, timeout);
    }

    // 一言功能
    function showHitokoto() {
        fetch(`${hitokoto_api}`)
            .then(response => response.json())
            .then(result => {
                showMessage(result.hitokoto, 3000, 6);
            });
    }

    // 聊天功能
    function chatTogether() {
    // 获取气泡对象
        const tips = document.getElementById("waifu-tips");
        // 先清空上一次的气泡
        sessionStorage.removeItem("waifu-text");
        tips.classList.remove("waifu-tips-active");
        // 在气泡上添加文本域
        let text = `<textarea cols='29' rows='4' id='chatInput'>${"> "}</textarea>`;
        showMessage(text, 60000, 6);
        // 获取输入框对象
        let chat = document.getElementById("chatInput");
        // 自动成为焦点
        chat.focus();
        // 光标移到末尾
        chat.selectionStart = chat.selectionEnd = chat.value.length;
        // 添加键盘按下事件
        chat.onkeydown = function (e) {
            let {keyCode, target} = e;
            if (keyCode === 13) {
                // 输入回车后立即清空气泡
                sessionStorage.removeItem("waifu-text");
                tips.classList.remove("waifu-tips-active");

                // 截取主要内容
                let main_value = target.value.substr(2);

                // 笔记快速跳转
                fetch(json_path)
                    .then(response => response.json())
                    .then(result => {
                        for (let {title, url} of result.post) {
                            if (main_value === title) {
                                pjax.loadUrl(url);
                                return;
                            }
                        }
                    });

                // 其他的命令
                switch (main_value) {
                case "回到顶部":
                    document.documentElement.scrollTop = 0;
                    return;
                case "召唤雪花":
                    let snowCSS = document.createElement("link");
                    snowCSS.setAttribute("rel", "stylesheet");
                    snowCSS.setAttribute("href", "/egg/snow/index.css");
                    let snowJS = document.createElement("script");
                    snowJS.setAttribute("type", "text/javascript");
                    snowJS.setAttribute("src", "/egg/snow/index.js");
                    let snowDiv = document.createElement("div");
                    snowDiv.setAttribute("class", "snow-container");

                    document.body.appendChild(snowCSS);
                    document.body.appendChild(snowJS);
                    document.body.appendChild(snowDiv);

                    showMessage("下雪啦~", 2000, 6);
                    return;
                case "召唤樱花":
                    let sakuraJS = document.createElement("script");
                    sakuraJS.setAttribute("type", "text/javascript");
                    sakuraJS.setAttribute("src", "/egg/sakura/index.js");
                    document.body.appendChild(sakuraJS);

                    showMessage("樱花飘飘~", 2000, 6);
                    return;
                case "召唤冰霜":
                    let freezeCSS = document.createElement("link");
                    freezeCSS.setAttribute("rel", "stylesheet");
                    freezeCSS.setAttribute("href", "/egg/freeze/index.css");

                    let freezeDiv1 = document.createElement("div");
                    freezeDiv1.setAttribute("class", "hp_special_experience");
                    let freezeDiv2 = document.createElement("div");
                    freezeDiv2.setAttribute("class", "hol_frames_cont");
                    let freezeDiv3 = document.createElement("div");
                    freezeDiv3.setAttribute("class", "frame fader frost show");
                    let freezeDiv4 = document.createElement("div");
                    freezeDiv4.setAttribute("class", "frame_sprite frame_left");
                    let freezeDiv5 = document.createElement("div");
                    freezeDiv5.setAttribute("class", "frame_sprite frame_right");
                    let freezeDiv6 = document.createElement("div");
                    freezeDiv6.setAttribute("class", "frame_sprite frame_top");
                    let freezeDiv7 = document.createElement("div");
                    freezeDiv7.setAttribute("class", "frame_sprite frame_bottom");

                    document.body.appendChild(freezeCSS);
                    freezeDiv1.appendChild(freezeDiv2);
                    freezeDiv2.appendChild(freezeDiv3);
                    freezeDiv3.appendChild(freezeDiv4);
                    freezeDiv3.appendChild(freezeDiv5);
                    freezeDiv3.appendChild(freezeDiv6);
                    freezeDiv3.appendChild(freezeDiv7);
                    document.body.appendChild(freezeDiv1);

                    showMessage("结冰啦~", 2000, 6);
                    return;
                case "朗读":
                    // 判断是否支持
                    if (!window.speechSynthesis) {
                        console.log("不支持朗读者");
                        showMessage("当前浏览器不支持朗读(>﹏<)请更换浏览器再试试吧", 2000, 6);
                        return;
                    } else {
                        console.log("支持朗读者");
                    }
                    // 创建朗读者对象
                    synth = window.speechSynthesis;
                    // 设置语言
                    msg.lang = "zh-CN";
                    // 获取正文内容，并去除HTML标签
                    let text = "";
                    let flag = true;
                    for (let i = 0; i < document.getElementsByClassName("post-body").length; i++) {
                        let content = document.getElementsByClassName("post-body")[i].innerHTML;
                        for (let j = 0; j < content.length; j++) {
                            // 遇到尖括号就停止朗读，再次遇到尖括号就继续朗读
                            if (content.charAt(j) === "<") {
                                flag = false;
                            } else if (content.charAt(j) === ">") {
                                flag = true;
                            }
                            // 将当前字符放到需要朗读的文本中
                            if (flag) {
                                text += content.charAt(j);
                            }
                        }
                    }
                    msg.text = text;
                    // 开始朗读
                    synth.speak(msg);
                    console.log("朗读者已被创建");
                    showMessage("开始朗读文章内容~", 2000, 6);
                    return;
                case "停止朗读":
                    synth.cancel(msg);
                    console.log("朗读者已被销毁");
                    showMessage("停止朗读文章内容~", 2000, 6);
                    return;
                case "背景取色器":
                    const backgroundColorPickerScript = document.createElement("script");
                    backgroundColorPickerScript.src = "/egg/background-color-picker/index.js";
                    document.head.appendChild(backgroundColorPickerScript);
                    showMessage("背景取色器启动成功~", 2000, 6);
                    return;
                case "毒药":
                    let poisonCSS = document.createElement("link");
                    poisonCSS.setAttribute("rel", "stylesheet");
                    poisonCSS.setAttribute("href", "/egg/poison/index.css");

                    document.body.appendChild(poisonCSS);

                    showMessage("中毒了！！！！！！", 2000, 6);
                    return;
                case "芝麻关门":
                    // 加载门关闭
                    document.getElementById("loading-door-left").style.width = `${window.innerWidth / 2}px`;
                    document.getElementById("loading-door-right").style.width = `${window.innerWidth / 2}px`;
                    // 锁定滚动条
                    document.body.style.overflow = "hidden";
                    function loadingDoorOpenByClick() {
                        // 加载门打开
                        document.getElementById("loading-door-left").style.width = "0";
                        document.getElementById("loading-door-right").style.width = "0";
                        // 解锁滚动条
                        document.body.style.overflow = "";
                    }
                    document.getElementById("loading-door-left").onclick = loadingDoorOpenByClick;
                    document.getElementById("loading-door-right").onclick = loadingDoorOpenByClick;
                    showMessage("duang~", 2000, 6);
                    return;
                case "音乐喷泉":
                    let musicDanceCanvas = document.createElement("canvas");
                    musicDanceCanvas.id = "music-dance-app";
                    let musicDanceCSS = document.createElement("link");
                    musicDanceCSS.setAttribute("rel", "stylesheet");
                    musicDanceCSS.setAttribute("href", "/egg/music-dance/index.css");
                    let musicDanceJS = document.createElement("script");
                    musicDanceJS.setAttribute("type", "text/javascript");
                    musicDanceJS.setAttribute("src", "/egg/music-dance/index.js");

                    document.body.appendChild(musicDanceCanvas);
                    document.body.appendChild(musicDanceCSS);
                    document.body.appendChild(musicDanceJS);

                    // 立即播放音乐
                    ap.play();

                    showMessage("开始蹦迪~\n（仅Firefox下有效）", 2000, 6);
                    return;
                case "飞机大战":
                    if (window.Asteroids) {
                        if (!window.ASTEROIDSPLAYERS) window.ASTEROIDSPLAYERS = [];
                        window.ASTEROIDSPLAYERS.push(new Asteroids());
                    } else {
                        const script = document.createElement("script");
                        script.src = "/egg/asteroids/index.js";
                        document.head.appendChild(script);
                    }
                    showMessage("飞机大战启动成功~（上：前进，左右：调整方向，空格：射击,B：显示目标，ESC停止）", 5000, 6);
                    return;
                case "捉住小猫":
                    open("/egg/catch-the-cat/", "_self");
                    return;
                case "小恐龙":
                    open("/egg/chrome-dino/", "_self");
                    return;
                case "布局页面":
                    open("/egg/typesetting/", "_self");
                    return;
                case "评价页面":
                    open("/egg/appraisal/", "_self");
                    return;
                case "系统更新":
                    open("/egg/update/", "_self");
                    return;
                case "站点访问状态":
                    open("https://stats.uptimerobot.com/qqg21fLRRg");
                    return;
                }

                // live2d的命令
                switch (main_value) {
                case "召唤妹妹":
                    loadOtherModel();
                    return;
                case "换个裙子吧":
                    loadRandModel();
                    return;
                case "主人是谁":
                    open("/about", "_self");
                    return;
                case "拍个照吧":
                    showMessage("照好了嘛，人家是不是很可爱？", 2000, 6);
                    Live2D.captureName = "photo.png";
                    Live2D.captureFrame = true;
                    return;
                case "我生气了":
                    localStorage.setItem("waifu-display", Date.now());
                    showMessage("那人家呆一会再来找你玩吧~", 2000, 6);
                    document.getElementById("waifu").style.bottom = "-500px";
                    setTimeout(function () {
                        document.getElementById("waifu").style.display = "none";
                        document.getElementById("waifu-toggle").classList.add("waifu-toggle-active");
                    }, 3000);
                    return;
                }

                // APlayer的命令
                // 以下为与APlayer的联动命令，如果在加载live2d之前没有APlayer的对象ap，则以下命令无效
                if (ap) {
                    // 判断是否点歌
                    if (main_value.indexOf("放一首") === 0) {
                        let keywords = main_value.substr(3);
                        // console.log(`正在查找歌曲: ${keywords}`);
                        fetch(music_api + "/search?offset=0&limit=30&keywords=" + keywords)
                            .then(response => response.json())
                            .then(result => {
                                if (result.result.songs.length !== 0) {
                                    let songId = result.result.songs[0].id;
                                    let songName, songArtist, songCover, songUrl, songLrc;
                                    // 获取歌曲基本信息
                                    fetch(music_api + "/song/detail?ids=" + songId)
                                        .then(response => response.json())
                                        .then(result => {
                                            songName = result.songs[0].name;
                                            songArtist = result.songs[0].ar[0].name;
                                            songCover = result.songs[0].al.picUrl;
                                            // 获取歌曲链接
                                            fetch(music_api + "/song/url?id=" + songId)
                                                .then(response => response.json())
                                                .then(result => {
                                                    songUrl = result.data[0].url;
                                                    // 获取歌词
                                                    fetch(music_api + "/lyric?id=" + songId)
                                                        .then(response => response.json())
                                                        .then(result => {
                                                            songLrc = result.lrc.lyric;
                                                            // 清空播放列表
                                                            ap.list.clear();
                                                            // 添加一首歌
                                                            ap.list.add({
                                                                name: songName,
                                                                artist: songArtist,
                                                                cover: songCover,
                                                                url: songUrl,
                                                                lrc: songLrc
                                                            });
                                                            // 开始播放
                                                            ap.play();
                                                            showMessage(`人家从互联网找到了这首 ${songName}，要不要奖励人家呢~`, 3000, 6);
                                                            return;
                                                        });
                                                });
                                        });
                                }
                            });
                    }

                    // 判断播放器控制操作
                    switch (main_value) {
                    case "播放":
                    case "唱首歌吧":
                        ap.play();
                        showMessage("已经开始播放音乐啦~", 2000, 6);
                        return;
                    case "暂停":
                    case "停止":
                        ap.pause();
                        showMessage("已经暂停播放音乐啦~", 2000, 6);
                        return;
                    case "上一曲":
                        ap.skipBack();
                        showMessage("已经切换到上一首音乐啦~", 2000, 6);
                        return;
                    case "下一曲":
                        ap.skipForward();
                        showMessage("已经切换到下一首音乐啦~", 2000, 6);
                        return;
                    case "单曲循环":
                    case "循环":
                        ap.options.loop = "one";
                        showMessage("已经单曲循环啦~", 2000, 6);
                        return;
                    case "不循环":
                        ap.options.loop = "none";
                        showMessage("已经不循环啦~", 2000, 6);
                        return;
                    case "顺序播放":
                    case "取消单曲循环":
                    case "取消随机播放":
                        ap.options.loop = "all";
                        ap.options.order = "list";
                        showMessage("已经顺序播放啦~", 2000, 6);
                        return;
                    case "随机播放":
                        ap.options.loop = "all";
                        ap.options.order = "random";
                        showMessage("已经随机播放啦~", 2000, 6);
                        return;
                    case "音量高一点":
                    case "大点声":
                        if (volumeIndex <= 10) {
                            volumeIndex += 1;
                        }
                        ap.volume(volumeArr[volumeIndex], true);
                        return;
                    case "音量低一点":
                    case "小点声":
                        if (volumeIndex >= 0) {
                            volumeIndex -= 1;
                        }
                        ap.volume(volumeArr[volumeIndex], true);
                        showMessage(`音量已调到${volumeArr[volumeIndex] * 100}%`, 2000, 6);
                        return;
                    case "音量调到最大":
                    case "最大声":
                        ap.volume(volumeArr[10], true);
                        showMessage("音量已调到最大", 2000, 6);
                        return;
                    case "静音":
                    case "别出声":
                        ap.volume(volumeArr[0], true);
                        showMessage("已经静音啦~", 2000, 6);
                        return;
                    case "取消静音":
                        ap.volume(volumeArr[volumeIndex], true);
                        showMessage(`音量已调到${volumeArr[volumeIndex] * 100}%`, 2000, 6);
                        return;
                    }
                }

                // 与ChatGPT对话
                // fetch("https://chatgpt.loli.fj.cn/" + target.value)
                //     .then(response => response.json())
                //     .then(result => {
                //       try {
                //         /* 如果ChatGPT配额足够，就返回ChatGPT说的话 */
                //         showMessage(result["choices"][0]["message"]["content"], 5000, 6);
                //       } catch (error) {
                //         console.log(error)
                //       }
                //     });

                // 与思知机器人对话
                // fetch("https://api.ownthink.com/bot?appid=xiaosi&userid=user&spoken=" + target.value)
                //     .then(response => response.json())
                //     .then(result => {
                //         showMessage(result["data"]["info"]["text"], 5000, 6);
                //     });

                // 从localStorage获取sizhiUserID，如果拿不到就生成新的
                let sizhiUserID = localStorage.getItem("sizhi-userid");
                if (sizhiUserID === null) {
                    const newSizhiUUID = generateUUID();
                    localStorage.setItem("sizhi-userid", newSizhiUUID);
                    sizhiUserID = newSizhiUUID;
                }
                // 与思知API对话
                fetch(`https://sizhi-api.loli.fj.cn/?userid=${sizhiUserID}&spoken=${target.value}`)
                    .then(response => response.text())
                    .then(result => {
                        console.log(result);
                        if (result !== "error") {
                            showMessage(result, 5000, 6);
                        }
                    });

                // 与图灵机器人对话
                // fetch("https://turing.loli.fj.cn/" + target.value)
                //     .then(response => response.json())
                //     .then(result => {
                //       showMessage(result["results"][0]["values"]["text"], 5000, 6);
                //     });

            }
        };

    }

    // 随机选择器，随机从数组中返回一个值
    function randomSelection(obj) {
        return Array.isArray(obj) ? obj[Math.floor(Math.random() * obj.length)] : obj;
    }

    // 加载模型
    async function loadModel(modelId, message) {
        localStorage.setItem("modelId", modelId);
        showMessage(message, 3000, 5);
        if (!modelList) await loadModelList();
        const target = randomSelection(modelList.models[modelId]);
        loadlive2d("live2d", `${api_path}/${target}/index.json`);
    }

    // 加载模型列表
    async function loadModelList() {
        const response = await fetch(`${api_path}/model_list.json`);
        modelList = await response.json();
    }

    // 换个裙子吧
    async function loadRandModel() {
        const modelId = localStorage.getItem("modelId");
        if (!modelList) await loadModelList();
        loadModel(modelId, "我的新裙子好看嘛？");
    }

    // 召唤妹妹
    async function loadOtherModel() {
        let modelId = localStorage.getItem("modelId");
        if (!modelList) await loadModelList();
        const index = (++modelId >= modelList.models.length) ? 0 : modelId;
        loadModel(index, modelList.messages[index]);
    }
}

// 生成UUID
function generateUUID(len, radix) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    let uuid = [], i;
    radix = radix || chars.length;

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
        // rfc4122, version 4 form
        let r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
        uuid[14] = "4";

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random()*16;
                uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return uuid.join("");
}
