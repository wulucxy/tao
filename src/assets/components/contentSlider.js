var $ = window.$ || require("jquery");
var extend =  require('object-assign');
var browser = require("./browser.js");

function contentSlider(target,options){

    function Plugin(t,o){
      this.target=t;
      this.ul = t.find('ul');
      this.options=o;
      this.init(this.options);
    }

    Plugin.prototype = {
      init : function(o){
        var that = this, $this = that.target;

        //控制切换的屏数
        that.startPoint = 0;
        that.endPoint = that.startPoint+1;
        that.count = 5;

        //当前可视屏索,从0开始
        this.current = 0;

        //当前页面索引
        that.pageIndex = o.pageIndex;

        //取css动画结束方法浏览器兼容
        that.transEndEventName = browser.whichTransitionEvent();

        //初始化dom
        this.insertHTML(that.startPoint,that.endPoint);

        //初始化进度条
        o.nav && o.nav.call(that,that.pageIndex);
      },

      renderPos : function(){
        var that = this,o = that.options;
        
        this.li = this.ul.find('>li');

        if(browser.isModernBrower){
          this.li.css( 'transition', 'opacity ' + o.speed + 'ms '+o.easing);
        }
        //默认进来列表隐藏
        if(that.startPoint == 0){
          this.li.hide();
          this.li.eq( this.current ).show();
        //其他情况下将下一块列表的首屏展示设置在右侧
        }else{
          this.li.eq( this.count).nextAll().hide();
          this.li.eq( this.count).css({"left":"0%","transition":"none"});
          setTimeout(function(){
            that.li.eq( that.count).css({"left":"0%",'transition':'opacity ' + o.speed + 'ms '+o.easing});
          },20);
          
        }
        
        this.bindEvt();
      },
     
      insertHTML : function(startPoint,endPoint){
        var that = this,o = that.options;

        var _key = o.key;
        that.availData = {};
        that.availData[_key] = o.data[o.key].slice(o.pageIndex+startPoint*that.count,o.pageIndex+endPoint*that.count);

        var _html = o.tmpl(that.availData);

        //初始化插入数据
        if(startPoint == 0){
          this.ul.empty().append(_html);
        //其他情况下append数据
        }else{
          this.ul.append(_html);
        }
        
        that.renderPos();
      },

      transitionEnd : function($oldItem,$newItem){
        var that = this,o = that.options;

        var transitionendfn = function() {

          $oldItem.off( that.transEndEventName ).hide();
          that.isAnimating = false;

          
          //当前页面索引++
          that.pageIndex++;

          //nav回调
          o.nav && o.nav.call(that,that.pageIndex);

          //其他回调
          o.callback && o.callback.call(that,that.pageIndex,$oldItem,$newItem);

          if( !$newItem.length && $oldItem.next().length){
              //移除前面的list
              that.li.slice(0,that.count).remove();
              //将current重新职位o
              that.current = 0;
          }

        };

        if( browser.isModernBrower ) {
          $oldItem.on( that.transEndEventName, transitionendfn );
        }else {
          transitionendfn.call();
        }
      },

      switchItem : function($oldItem,$newItem){
        var that = this;

        if( browser.isModernBrower ) {
            //运动完毕回调函数
            that.transitionEnd($oldItem,$newItem);

            setTimeout( function() {
              $oldItem.css( 'opacity', '0');
              $newItem.css( 'opacity', '1' );
            }, 25 );
        }else{
            $oldItem.css({'opacity':'0'});
            $newItem.css({'opacity':'1'});
            that.transitionEnd.call(that,$oldItem,$newItem)
        }
      },

      bindEvt : function(){
        var that = this, o= that.options;
        
        $(o.trigger).on("click",function(e){

          e.preventDefault();
          var btn = $(this).closest(o.trigger);


          if(btn.hasClass(o.klass)) return;
          if(!!that.isAnimating) return;

          btn.siblings(o.trigger).removeClass(o.klass);
          btn.addClass(o.klass);

          that.isAnimating = true;
          that.li =  that.ul.find('>li');

          var $oldItem = that.li.eq( that.current );
          that.idx = ++that.current;
          var $newItem = that.li.eq( that.idx );

          //初始化nextItem位置
          $newItem.css( 'opacity', '0' );
          $newItem.show();

          //点击回调
          o.startCallback && o.startCallback.call(that,that.pageIndex,$oldItem,$newItem)

          //已经是最后一个了，直接返回
          if((that.pageIndex+1) >= o.allItems) return;

          //当点击到当前最后一个列表时，需要往后再插入新的列表数据
          if(!$newItem.length){
            that.startPoint++;
            that.endPoint = that.startPoint+1;
            that.insertHTML(that.startPoint,that.endPoint);
          }

          //动画
          that.switchItem($oldItem,$newItem);
            
        });
      },
    };

    var settings = extend({
      data: {},
      speed: 500,
      nav : true,
      easing : 'linear',    
      pageIndex : 0,
      allItems : 10,
      trigger : "[data-type]",
      klass : "current",
      tmpl : null
    },options);
    
    return target.each(function(index) {
      var me = $(this);  
        return new Plugin(me,settings);
    });
}

module.exports = contentSlider;
