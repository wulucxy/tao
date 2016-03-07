require("./index.less");

var $ = window.$ || require("jquery");
var extend =  require('object-assign');

//mousewheel
require("./mousewheel");

function scroll(target,options){

  function Plugin(t,o){
    this.target=t;
    this.options=o;
    this.init(o);
  }

  Plugin.prototype={
    generateHTML : function(){          //html架构组装
      var that = this, $this = that.target,o=that.options;
      
      that.wrapper = $('<div>').addClass(o.wrapperClass).css({width: o.width,height: o.height});
      $this.css({overflow: 'hidden',width: o.width,height: o.height});
      that.rail = $('<div>').addClass(o.railClass).css({display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none'});
      that.bar = $('<div>').addClass(o.barClass).css({display: o.alwaysVisible ? 'block' : 'none'});
      
      var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
      that.rail.css(posCss);
      that.bar.css(posCss);

      $this.wrap(that.wrapper);
      $this.parent().append(that.bar);     
      $this.parent().append(that.rail);
    },

    getBarHeight:function(){
      var that = this, $this = that.target,o=that.options;
      var barHeight = Math.max(($this.outerHeight() / $this[0].scrollHeight) * $this.outerHeight(), o.minBarHeight);  
     //获取未隐藏容器的高度比例，并按照比例设置bar的高度    scrollHeight为总高度（包括卷起的高度），outerwidth为容器可见高度
      that.bar.css({ height: barHeight + 'px' });
      var display = barHeight == $this.outerHeight() ? 'none' : 'block';  //设置bar的可见性
      var railDisplay= (o.alwaysVisible && o.railVisible) ? 'block' : display;
      that.rail.css({display: railDisplay});
      that.bar.css({ display: display});
    },

    checkPos : function(){
       var that = this, $this = that.target,o=that.options;
       //判断初始位置
        if (o.start === 'bottom'){
          that.bar.css({ top: $this.outerHeight() - that.bar.outerHeight() });
          that.scrollContent(0, true);
        }
        else if (o.start !== 'top'){
          that.scrollContent($(o.start).position().top, false, true);

          if (!o.alwaysVisible) { that.bar.hide(); }
        }
    },

    drag : function(){
      var that = this, $this = that.target,o=that.options;
      that.isDragg = true;
       if (o.railDraggable){
          that.bar.on("mousedown", function(e) {
            var $doc = $(document);
            var disY=e.pageY-$(this).offset().top;

            $doc.on("mousemove", function(e){
               that.bar.offset({top:e.pageY-disY});
               that.scrollContent(0, that.bar.position().top, false);// scroll content
            });

            $doc.on("mouseup", function(e) {
              that.isDragg = false;
              $doc.off('mousemove');
             $doc.off('mouseup');
            });
            return false;
          });
        }
    },

    attachWheel:function(){
      var that = this, $this = that.target,o=that.options;
      $this.on('mousewheel', function(e, delta) {
        if(delta > 0) {
          if( that.wrapper.data( 'anim' ) ) return false;
          that.wrapper.data( 'anim', true );
          that.scrollContent(-1,true);
        } 
        else {
          if( that.wrapper.data( 'anim' ) ) return false;
          that.wrapper.data( 'anim', true );
          that.scrollContent(1,true);
        } 
        return false;
      });
    },

    scrollContent:function(y, isWheel, isJump){     //核心方法
      var that = this, $this = that.target,o=that.options;
      var delta = y,percentScroll;
      var maxTop = $this.parent().outerHeight() - that.bar.outerHeight();

      if (isWheel){
        delta = parseInt(that.bar.css('top')) + y * parseInt(o.wheelStep) / 100 * that.bar.outerHeight();
        //获取上一次bar的top值，鼠标每次滚动，都相当于以bar的高度为基准滑动20%

        delta = Math.min(Math.max(delta, 0), maxTop);
        //如果delta小于0，就取0
        //如果delta大于maxtop，就取maxtop值
  
        delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);
        //如果向下滑动，delta向上取整，否则向下取整。
      
        that.bar.css({ top: delta + 'px' });
        that.wrapper.data( 'anim', false );
      }
      percentScroll = parseInt(that.bar.css('top')) / ($this.outerHeight());  //计算bar滚动比例，获取
      delta = percentScroll * ($this[0].scrollHeight);

      if (isJump){
        delta = y;
        var offsetTop = delta / $this[0].scrollHeight * $this.outerHeight();
        that.bar.css({ top: Math.min(Math.max(offsetTop, 0), maxTop) + 'px' });
      }

      $this.scrollTop(delta);                 //将me.scrollTop设置为delta值
    },

    init : function(o){
      var that = this, $this = that.target;
      o.height = (o.height == 'auto') ? $this.parent().innerHeight() : o.height;   //如果o.height设置为auto,将o.height设置为父元素的innerHeight

      if ($this.parent().hasClass(o.wrapperClass)){    //外围容器,当前$(this)并没有包括到o.wrapperClass。
            var offset = $this.scrollTop();            //获取当前内容框的scrollTop值

            that.bar = $this.parent().find('.' + o.barClass); 
            that.rail = $this.parent().find('.' + o.railClass);

            that.getBarHeight();
            that.scrollContent(offset, false, true);
            return;
      }

      that.generateHTML();
      that.getBarHeight();
      that.checkPos();
      that.attachWheel();  //调用mousewheel事件
      that.drag();
    }
  };

  var settings = extend({
      width : 'auto',  //内容区宽度
      height : '250px', //内容区呈现高度
      position : 'right', //scrollbar定位位置
      start : "top", 
      distance : '1px',   //scrollbar到右边界的距离
      alwaysVisible : false, //scrollbar默认始终显示
      disableFadeOut: true, //鼠标悬浮scrllbar效果
      railVisible : true,  //rail滚动条背景
      railDraggable : true, //rail可拖拽
      railClass : 'scrollBeautifyRail',   //rail类
      barClass : 'scrollBeautifyBar',     //bar类
      wrapperClass : 'scrollBeautifyDiv', //容器类
      wheelStep : 20,                //滚动步长(相对于bar自己)
      minBarHeight:30               //bar最小值
  },options);
  
  // return target.each(function(index) {
  //   var me = $(this);  
  //     return new Plugin(me,settings);
  // });
  
  var instance = $(target).data('scroll' );

  $(target).each(function(index) {
    var me = $(this);   //表单容器本身
    var instance = me.data('scroll', new Plugin( me,settings ) );
  });
  
  return instance; 
}

module.exports = scroll;

  