var $ = window.$ || require("jquery");
var extend =  require('object-assign');

function unslider(target,options){

    function Plugin(t,o){
      this.target=t;
      this.ul = t.find('ul');
      this.li = this.ul.find('li');
      this.visible_item = o.visible_item;
      this.options=o;
      this.timer = null;
      this.init(this.options);
    }

    Plugin.prototype = {
      init : function(o){
        var that = this, $this = that.target;
        var len = this.li.length;
        that.target.css({overflow: 'hidden'});
        this.ul.css({position: 'relative', left: 0, width: (len * 100) + '%'}); 
        this.li.css({'float': 'left', width: (100 / len) + '%'}); 

        $.each(this.li,function(idx,ele){
          var $ele = $(ele);
          $ele.find("a").css({"backgroundImage":"url("+$ele.data("pic")+")"});
        });
        //this.li.find("a").css({"backgroundImage":"url("+this.li.data("pic")+")"});

        o.nav && this.nav();
      },
      nav : function(){
        var that = this, $this = that.target,o = that.options;
        var name = 'dot';

          var html = '<div class="dots">';
          $.each(this.li, function(index) {
            html += '<a href="#" class="' + (index == that.visible_item ? name + ' active' : name) + '">'+(++index)+'</a>';
          });
        html += '</ol>';
        this.target.append(html);
        var _dotsW = this.target.find('.dots').width();
        this.target.find('.dots').css({left:'50%',marginLeft:-(_dotsW/2)});
        this.dots = this.target.find('.dots');
        this.dot = this.target.find('.'+name);
        this.bindEvt();
      },
      bindEvt : function(){
        var that = this, $this = that.target,o = that.options;
        this.dots.on('click','.dot',function(e){                         //点击触发，自动轮播
          e.preventDefault();
          var me = $(this);
           if(me.hasClass('active')){return false;}
           if(me.hasClass('dot')){
           that.to($('.dots  .dot').index(this));
        }
        });

        if (o.keys) {
        $(document).keydown(function(e) {
          var key = e.which;
          clearInterval(that.timer);
          if (key == 37)
            that.to(that.visible_item-1); // Left
          else if (key == 39)
            that.to(that.visible_item+1); // Right
          else if (key == 27)
            clearInterval(that.timer); // Esc
        });
        };

        if(o.delay){
        that.timer=setInterval(function() {
            that.to();
        },o.delay);

        if (o.pause) {
          $this.mouseenter(function() {
            clearInterval(that.timer);
          }).mouseleave(function(){
            clearInterval(that.timer);
            that.timer=setInterval(function(){
              that.to();
            },o.delay);
          }); 
        };
        }
      },
      to : function(index,callback){
        var that = this, $this = that.target,o = that.options;
        if (typeof index == "undefined") { 
          index = that.visible_item + 1;                   
          index = index >= this.li.length ? 0 : index;         
        }
           
          if(index==-1) index=that.li.length-1;
        if(index==that.li.length) index=0;

        $this.find('.dot').eq(index).addClass('active').siblings().removeClass('active');
   
        that.ul.animate({left: '-' + index + '00%'}, o.speed, function() {
          that.visible_item = index;  
        });
      }
    };

    var settings = extend({
      speed: 500,   
      delay: 5000,  
      pause: true,         
      keys: true,      
      nav: true,       
      visible_item : 0
    },options);
    
    return target.each(function(index) {
      var me = $(this);  
        return new Plugin(me,settings);
    });
  };

  module.exports = unslider;
