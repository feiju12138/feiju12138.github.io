/**
 * 加载站内快捷键
 */
(function () {
    document.body.onkeydown = function (e1) {
        //需要依次按下`ctrl`（`command`）、`alt`（`option`）才能激活站内快捷键
        if (e1.keyCode === 17) {
            document.body.onkeydown = function (e2) {
                if (e2.keyCode === 18) {
                    document.body.onkeydown = function (e3) {
                        // 按下F激活搜索
                        if (e3.keyCode === 70) {
                            if (document.body.classList.contains("search-active")) {
                                document.body.classList.remove("search-active");
                            } else {
                                document.body.classList.add("search-active");
                            }
                        }
                        /*
                        if (event.keyCode === ) {

                        }
                         */
                    };
                }
            };
        }


        // 彩蛋
        if (e1.keyCode === 38) {
            document.body.onkeydown = function (e2) {
                if (e2.keyCode === 38) {
                    document.body.onkeydown = function (e3) {
                        if (e3.keyCode === 40) {
                            document.body.onkeydown = function (e4) {
                                if (e4.keyCode === 40) {
                                    document.body.onkeydown = function (e5) {
                                        if (e5.keyCode === 37) {
                                            document.body.onkeydown = function (e6) {
                                                if (e6.keyCode === 39) {
                                                    document.body.onkeydown = function (e7) {
                                                        if (e7.keyCode === 37) {
                                                            document.body.onkeydown = function (e8) {
                                                                if (e8.keyCode === 39) {
                                                                    document.body.onkeydown = function (e9) {
                                                                        if (e9.keyCode === 66) {
                                                                            document.body.onkeydown = function (e10) {
                                                                                if (e10.keyCode === 65) {
                                                                                    let cursorPlusJS = document.createElement("script");
                                                                                    cursorPlusJS.setAttribute("type", "text/javascript");
                                                                                    cursorPlusJS.setAttribute("src", "/dist/js/cursor_plus.js");
                                                                                    document.body.appendChild(cursorPlusJS);
                                                                                }
                                                                            };
                                                                        }
                                                                    };
                                                                }
                                                            };
                                                        }
                                                    };
                                                }
                                            };
                                        }
                                    };
                                }
                            };
                        }
                    };
                }
            };
        }
    };
})();
