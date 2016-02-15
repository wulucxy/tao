var $ = window.$ || require("jquery");

var sideBar = {
    init : function(){
        this.gotoTop();
        this.floatTip();
    },

    gotoTop: function(){
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
    },

    //floatTip
    floatTip : function(){
      var that = this;

      //计算balancetip位置
      if($(".balanceTip").length){
        var _left = ($(".balanceTip").closest(".tipBox").find(".tipLink").width() - $(".balanceTip").width())/2;
        $(".balanceTip").css("left",_left);
      }

      $(".tipLink").mouseenter(function(){
          var floatTipWrap = $(this).closest(".tipBox").find(".floatTipWrap"); 
          floatTipWrap.css("display","block");
          setTimeout(function(){
            floatTipWrap.addClass("show");
          },0)
      }).mouseleave(function(){
      var floatTipWrap = $(this).closest(".tipBox").find(".floatTipWrap"); 
      floatTipWrap.removeClass("show");   
        setTimeout(function(){
          floatTipWrap.css("display","none");
        },400)
      })

    }
};

sideBar.init();

module.exports = sideBar;