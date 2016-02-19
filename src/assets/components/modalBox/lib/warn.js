var $ = window.$ || require("jquery");
require("./warn.less");

function warn(str,success){
    $(".Kwarn").remove();
    var _warn_obj = $('<div class="Kwarn"><div class="Title"><span class="vm w99 dib"><i class="KwarnIcon"></i>'+str+'</span><i class="pixel1 vm"></i></div><div class="Kwarnbg"></div></div>');
    $("body").append(_warn_obj);
    var _t = ($(window).height() - _warn_obj.height())/2 + $(window).scrollTop();
    _warn_obj.css({
        left : ($(window).width() - _warn_obj.width())/2,
        top : _t + 100,
        opacity : 0
    }).animate({
        top : _t,
        opacity : 1
    },350).delay(1600).animate({
        top : _t - 100,
        opacity : 0
    },350,function(){
        $(this).remove();
        if(success){success();}
    });

};

window.warn = warn;

module.exports = warn;