/**
 * 渲染音乐喷泉
 */

(function() {

    if (getBrowserKind() !== FIREFOX) {
        console.log("音乐喷泉加载失败，浏览器不支持");
        return;
    }

    // 获取canvas对象
    const canvas = document.getElementById("music-dance-app");
    const canvasContext = canvas.getContext("2d");
    // 初始化canvas宽度为浏览器内可视页面宽度
    canvas.width = window.innerWidth;
    // 初始化canvas高度为浏览器内可视页面高度
    canvas.height = window.innerHeight;
    // 如果浏览器内可视页面宽度发生改变，动态改变canvas的宽高
    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    // 创建一个音频上下文
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    // 创建音频分析器
    const analyser = audioContext.createAnalyser();
    // 获取音源
    const source = audioContext.createMediaElementSource(ap.audio);
    // 将音源连接音频分析器作为输入
    source.connect(analyser);
    // 将音频分析器连接音频上下文作为输出
    analyser.connect(audioContext.destination);

    // 渲染
    (function draw() {
        function getFFTSize() {
            // 计算2的1次方到2的12次方，将计算结果放到一个数组中备用
            const numArray = [32, 64, 128, 256, 512, 1024, 2048, 4096];
            // 获取距离最近的2的n次方数
            let numForTwo;
            for (let i = numArray.length - 1; i >= 0; i--) {
                numForTwo = numArray[i];
                if (window.innerWidth > numForTwo) {
                    break;
                }
            }
            return numForTwo;
        }

        // 表示单次数据的长度，只能是2的n次方
        analyser.fftSize = getFFTSize();
        // console.log(analyser.fftSize);

        // 设置好fftSize之后可以拿到frequencyBinCount
        const bufferLength = analyser.frequencyBinCount;
        // 使用frequencyBinCount来创建一个Uint8Array，用于装数据
        const dataArray = new Uint8Array(bufferLength);

        analyser.getByteTimeDomainData(dataArray);

        const WIDTH = canvas.width;
        const HEIGHT = canvas.height;
        // console.log(canvas.height);

        requestAnimationFrame(draw);

        analyser.getByteFrequencyData(dataArray);

        canvasContext.fillStyle = "rgba(0, 0, 0, 0)";
        canvasContext.clearRect(0, 0, WIDTH, HEIGHT);
        canvasContext.fillRect(0, 0, WIDTH, HEIGHT);

        const barWidth = (WIDTH / bufferLength) * 3;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];
            canvasContext.fillStyle = `rgba(255, ${255 - barHeight}, 200, 0.2)`;
            canvasContext.fillRect(x, HEIGHT - barHeight, barWidth, barHeight * 2);
            x += barWidth + 1;
        }
    })();
})();
