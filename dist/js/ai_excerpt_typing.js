/**
 * 渲染Ai摘要打字机效果
 */
function loadingAiExcerptTyping() {
    const element_list = document.getElementsByClassName("typing");
    for (let i = 0; i < element_list.length; i++) {
        const all_data = element_list[i].innerHTML;
        element_list[i].innerHTML = all_data.substring(0, 1);
        let timer = setInterval(function () {
            if (element_list[i].innerHTML.length + 1 <= all_data.length) {
                element_list[i].innerHTML = all_data.substring(0, element_list[i].innerHTML.length + 1);
            } else {
                clearInterval(timer);
            }
        }, 100);
    }
}

loadingAiExcerptTyping();
