/**
 * 重写i18n的跳转路径
 */
const element_for_i18n = document.querySelector("option[value='zh-CN']");
element_for_i18n.setAttribute("data-href", "/zh-CN" + element_for_i18n.getAttribute("data-href"));
