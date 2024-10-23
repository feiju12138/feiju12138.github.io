/**
 * 在代码块导航条复制按钮追加代码类型
 */

code_block_list = document.getElementsByClassName("highlight");

function loadCodeBlockType() {
    for (const code_block of code_block_list) {
        // 获取代码类型名
        const code_block_class_list = code_block.classList;
        const code_type_name = code_block_class_list[1];
        // 创建一个节点
        const code_type_node = document.createElement("div");
        code_type_node.style.position = "absolute";  // 绝对定位
        code_type_node.style.right = "30px";
        code_type_node.style.top = "2px";
        code_type_node.style.fontSize = "14px";
        code_type_node.innerText = code_type_name;
        code_block.insertBefore(code_type_node, code_block.firstChild);
    }
}

if (code_block_list.length) {
    loadCodeBlockType();
}
