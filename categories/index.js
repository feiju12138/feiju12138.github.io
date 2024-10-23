/**
 * 重新渲染分类页面
 */
function loadCategories() {
    let categoryList = document.getElementsByClassName("category-list-item");

    if (categoryList[0] != null) {
        for (let category of categoryList) {

            // 生成一个随机的索引
            let randIndex = randomNum(0, skirt_colors.length - 1);

            // 获取文件名
            // 根据`/`分割，得到最后一位
            const file_name_list = skirt_colors[randIndex].img.split("/");
            const file_name = file_name_list[file_name_list.length - 1];
            // 获取文件名前缀和后缀
            // 根据`-`分割，得到第一位和第二位
            const file_name_pre = file_name.split("-")[0];
            let  file_name_suf = file_name.split("-")[1];
            // 修复后缀
            // 根据`.`分割，获取第一位
            file_name_suf = file_name_suf.split(".")[0];
            // 得到处理后的文件名前缀和后缀
            skirt_colors[randIndex].brand = file_name_pre;
            skirt_colors[randIndex].name = file_name_suf;

            // 创建前缀节点
            let node = document.createElement("p");
            node.innerHTML = `${skirt_colors[randIndex].brand} - ${skirt_colors[randIndex].name}`;
            node.style.color = "white";
            category.insertBefore(node, category.childNodes[0]);

            // 修改背景颜色
            // category.style.backgroundColor = lipstick_colors[randIndex].color;
            category.style.backgroundImage = `url(${skirt_colors[randIndex].img})`;
            category.style.backgroundRepeat = "repeat";

            // 获取页面跳转超链接
            // let src = $(category.childNodes[1]).attr("href");
            let src = category.childNodes[1].href;
            category.onclick = function () {
                pjax.loadUrl(src);
            };
        }
    }
}

if (window.location.pathname==="/categories/") {
    loadCategories();
}

