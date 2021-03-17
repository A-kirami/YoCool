var link = [];
link[0] = "https://yocool.pcrlink.cn/princessadventure/scheme-01.css";
link[1] = "https://yocool.pcrlink.cn/princessadventure/scheme-02.css";
link[2] = "https://yocool.pcrlink.cn/princessadventure/scheme-03.css";
$(function() {
    var style = link[Math.floor(Math.random() * link.length)];
    if (document.createStyleSheet) {
        document.createStyleSheet(style)
    } else {
        $('<link />', {
            rel: 'stylesheet',
            href: style
        }).appendTo('head')
    }
});
document.writeln("<div id=\'bottomToolbar\'>Powered by <a href=\'https://github.com/pcrbot/yobot\'>Yobot</a> | Themes by <a href=\'https://github.com/A-kirami/YoCool\'>YoCool</a></div>");
$(function() {
    $(window).scroll(function() {
        var topToolbar = $("#topToolbar");
        var headerH = $("#header").outerHeight();
        var scrollTop = $(document).scrollTop()
    })
});