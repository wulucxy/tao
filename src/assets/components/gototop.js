var $ = window.$ || require("jquery");

var gotoTop = function(){
    var bh = $(document.body).height();
    var fh = $('#footer').outerHeight();
    var lastScrollTop = 0;
    var iBtn = false;

    $('.btn-backtotop').on('click', function(e) {
        e.preventDefault();
        if(!!iBtn) return;
        iBtn = true;
        $("html,body").stop(false, true).animate({
            scrollTop: 0
        }, 400, function() {
            iBtn = false;
        });
    });
};

module.exports = gotoTop;