/**
 * 渲染钢琴音
 */

// 为指定class的标签设置触摸事件
element_classname = ["site-title"];

// C大调钢琴音调
const pitch = [
    262, 294, 330, 349, 392, 440, 494,
    523, 587, 659, 698, 784, 880, 988,
    1046, 1175, 1318, 1397, 1568, 1760, 1976,
];

// 根据曲谱打歌
const tone = [
    12, 13, 14, 13, 14, 16, 13,
    9, 9, 12, 11, 12, 14, 11,
    9, 9, 10, 9, 10, 14, 9,
    14, 14, 13, 10, 10, 13, 13,
    12, 13, 14, 13, 14, 16, 13,
    9, 9, 12, 11, 12, 14, 11,
    8, 9, 10, 14, 13, 14, 15, 16, 14,
    14, 13, 12, 13, 11, 12,
    14, 15, 16, 15, 16, 18, 15,
    11, 11, 14, 13, 14, 16, 16,
    12, 13, 14, 13, 15, 15, 14, 11, 11,
    17, 16, 15, 14, 16,
    16, 19, 19, 18, 18, 16, 15, 14,
    14, 15, 14, 15, 18, 16,
    16, 19, 19, 18, 18, 16, 15, 14,
    14, 15, 14, 15, 13, 12,
];

// 将曲谱转换为钢琴音数组
let music_list = [];
for (let i = 0; i < tone.length; i++) {
    music_list.push(pitch[tone[i]]);
}
// console.log(music_list)

window.AudioContext = window.AudioContext || window.webkitAudioContext,
function () {
    if (window.AudioContext) {
        let e = new AudioContext;
        let t = music_list;
        let i = 0;
        let o = 1;
        for (const item of element_classname) {
            document.getElementsByClassName(item)[0].addEventListener("mouseenter", function () {
                let r = t[i];
                r || (i = 0, r = t[i]), i += o;
                let c = e.createOscillator();
                let l = e.createGain();
                c.connect(l);
                l.connect(e.destination);
                c.type = "sine";
                c.frequency.value = r;
                l.gain.setValueAtTime(0, e.currentTime);
                l.gain.linearRampToValueAtTime(1, e.currentTime + .01);
                c.start(e.currentTime);
                l.gain.exponentialRampToValueAtTime(.001, e.currentTime + 1);
                c.stop(e.currentTime + 1);
                n = !1;
            });
        }
    }
}();
