var link = [];
link[0] = "/yobot-depencency/yocool@final/princessadventure/scheme-01.css";
link[1] = "/yobot-depencency/yocool@final/princessadventure/scheme-02.css";
link[2] = "/yobot-depencency/yocool@final/princessadventure/scheme-03.css";
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
document.writeln("<div id=\'bottomToolbar\'>Powered by <a href=\'https://github.com/pcrbot/yobot\'>Yobot</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;Themes by <a href=\'https://github.com/A-kirami/YoCool\'>YoCool</a></div>");
$(function() {
    $(window).scroll(function() {
        var topToolbar = $("#topToolbar");
        var headerH = $("#header").outerHeight();
        var scrollTop = $(document).scrollTop()
    })
});
;(function ($) {
    $.fn.extend({
        "sliderBar": function (options) {
            var opts = $.extend(
                {} ,
                $.fn.sliderBar.defalutPublic ,
                options
            );
            return this.each(function () {
                var $this = $(this);  

                $this.data('open', opts.open);

                privateMethods.initSliderBarCss($this, opts);

                switch(opts.position){
                    case 'right' : privateMethods.showAtRight($this, opts); break;
                    case 'left'  : privateMethods.showAtLeft($this, opts); break;
                }
                
            });
        }
    });

    $.fn.sliderBar.defalutPublic = {
        open : false,
        top : 200,
        width : 260,
        height : 200,
        position : 'left'
    }

    var privateMethods = {
        initSliderBarCss : function(obj, opts){
            obj.css({
                'width': opts.width+20+'px',
                'height' : opts.height+20+'px',
                'top' : opts.top+'px',
                'position':'fixed',
                'font-family':'Microsoft Yahei',
                'z-index': '9999'
            }).find('.body').css({
                'width': opts.width+'px',
                'height' : opts.height+'px',
                'position':'relative',
                'padding':'10px',
                'overflow-x':'hidden',
                'overflow-y':'auto',
                'font-family':'Microsoft Yahei',
                'font-size' : '14px'
            });

            var titleCss = {
                'width':'15px',
                'position':'absolute',
                'top':'-1px',
                'display':'block',
                'font-size': '13px',
                'padding':'8px 4px 8px 5px',
                'color':'#fff',
                'cursor': 'pointer',
                'font-family':'Microsoft Yahei'
            }

            obj.find('.title').css(titleCss).find('i').css({
                'font-size': '15px'
            });
        },
        showAtLeft : function(obj, opts){
            if(opts.open){
                obj.css({left:'0px'});
                obj.find('.title').css('right','-25px').find('i').attr('class','fa fa-chevron-circle-left');
            }else{
                obj.css({left:-opts.width-22+'px'});
                obj.find('.title').css('right','-25px').find('i').attr('class','fa fa-chevron-circle-right');
            }

            obj.find('.title').click(function(){
                if(obj.data('open')){
                    obj.animate({left:-opts.width-22+'px'}, 500);
                    $(this).find('i').attr('class','fa fa-chevron-circle-right');
                }else{
                    obj.animate({left:'0px'}, 500);
                    $(this).find('i').attr('class','fa fa-chevron-circle-left');
                }
                obj.data('open',obj.data('open') == true ? false : true);
            });
        },
        showAtRight : function(obj, opts){
            if(opts.open){
                obj.css({right:'0px'});
                obj.find('.title').css('right', opts.width+20+'px').find('i').attr('class','fa fa-chevron-circle-right');
            }else{
                obj.css({right:'25px'});
                obj.find('.title').css('right', opts.width+20+'px').find('i').attr('class','fa fa-chevron-circle-left');
            }

            obj.find('.title').click(function(){
                if(obj.data('open')){
                    obj.animate({right:-opts.width-22+'px'}, 500);
                    $(this).find('i').attr('class','fa fa-chevron-circle-left');
                }else{
                    obj.animate({right:'0px'}, 500);
                    $(this).find('i').attr('class','fa fa-chevron-circle-right');
                }
                obj.data('open',obj.data('open') == true ? false : true);
            });
        }
    };
})(jQuery)