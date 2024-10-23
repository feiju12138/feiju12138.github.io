/**
 * 重新渲染标签页面
 */
function loadTags() {
    let aList = document.querySelectorAll(".tag-cloud-tags a");

    if (aList[0] != null) {

        let ul = document.createElement("ul");
        ul.className = "tag-list";

        aList[0].parentNode.appendChild(ul);

        for (let tag of aList) {

            // 生成一个随机的索引
            let randIndex = randomNum(0, lipstick_colors.length - 1);

            // 创建前缀节点
            let node = document.createElement("p");
            node.innerHTML = `${lipstick_colors[randIndex].brand} - ${lipstick_colors[randIndex].name}`;
            node.style.color = "white";

            let li = document.createElement("li");
            li.className = "tag-list-item";
            // 修改背景颜色
            li.style.backgroundColor = lipstick_colors[randIndex].color;

            li.appendChild(node);
            li.appendChild(tag);
            ul.appendChild(li);

            // 设置页面跳转
            let src = tag.href;
            li.onclick = function() {
                pjax.loadUrl(src);
            };

        }

    }
}

if (window.location.pathname==="/tags/") {
    loadTags();
}
