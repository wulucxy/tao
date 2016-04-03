var $ = window.$ || require("jquery");
var extend =  require('object-assign');

function Dropdown(t, o) {
    this.target = t;
    this.options = o;
    this.init(this.options);
}

Dropdown.prototype = {
	init : function(o){
		var that = this,$this = this.target;
		if($this.find(".trigger").length){
			that.trigger =  $this.find(".trigger");
		}else{
			that.trigger = $this;
			$this.addClass("trigger");
		}
		that.listWrapper = $this.find(o.listWrapper);
      	that.lists = that.listWrapper.find(o.li);

      	$this.addClass("fancy-select");
      	if(o.selectMode){
      		that.selectField = $this.find(".selectField");

      		if(!that.selectField.length){
      			console.error("需要定义selectField Class用于展现选择结果");
      			return;
      		}
      	}
      	this.bindEvt();
	},

	
	bindEvt : function(){
		var that = this,o = that.options, $this = this.target;
		var event = (o.event == "click") ? "click" : "mouseenter";

		that.trigger.on(event,function(e){
			e.preventDefault();
			e.stopPropagation();

	        if($(this).hasClass('disabled')) return;

	        //回调
	        o.clickHandle && o.clickHandle.call(that,$this)

	        //关闭其他dropdown list
	        $.each($(".fancy-select").not($this),function(i,ele){
	        	var $ele = $(ele);
	        	if($ele.find(".trigger.open").length || $ele.hasClass("open")){
	        		$ele.data("dropdown").close();
	        	}
	        });

	        that.toggle();
	    });

    if(event == "mouseenter"){
      that.trigger.on("mouseleave",function(){
        $this.timer = setTimeout(function(){
          that.close();
           //回调
          o.leaveHandle && o.leaveHandle.call(that,$this)
        },100);
      })
    }
    

	    that.listWrapper.on('mouseenter', o.li, function(e) {
          clearTimeout($this.timer);
	        $(this).addClass('current');
	    });

	    that.listWrapper.on('mouseleave', o.li, function(e) {
	        $(this).removeClass('current');
          $this.timer = setTimeout(function(){
            that.close();
          },100);
	    });

	    //点击子列表结果
	    that.listWrapper.on('click',o.li,function(e){
          if(o.selectMode){
          	e.preventDefault();
          	var $list = $(this);
          	
          	if($list.data("field") == ""){
          		console.error("未找到data-field属性，请设置");
          		return;
          	}

          	//点击当前选择项无效
          	if($this.find("input[type=hidden]").val() == $list.data("field")) return;

          	that.selectSublist.call(that,$list);

          	o.onSelectCallback && o.onSelectCallback.call(that)
          	that.close();

          }

	    });

	    if(o.selectMode){
	    	that.selectSublist(that.listWrapper.find(o.li).eq(0));
		}

	},

	selectSublist : function(list){
		var that = this,$this = that.target;
		that.selectField.text(list.text());
        $this.find("input[type=hidden]").val(that.selectField.data("field"));
	},

	toggle : function(){
      var that = this,$this = this.target;
      that.trigger.toggleClass('open');

      //保留动画效果
      if(!that.listWrapper.hasClass("open")){
      	that.listWrapper.css({"display": "block"});
      	setTimeout(function(){
      		that.listWrapper.addClass('open');
      	}, 20);
      }else{
      	that.listWrapper.removeClass('open');
      	that.listWrapper.css({"display": "none"});
      }
      
    },

    close : function(){
      var that = this,$this = this.target;
      that.trigger.removeClass('open');
      that.listWrapper.removeClass('open');
      that.listWrapper.css({"display": "none"});

      if($this.hasClass("trigger")){
      	$this.removeClass("trigger");
      }

    }
};


var dropdown = function (target,settings) {
    var defaultSettings = {
        clickHandle : null,
        event : "click",
        selectMode : false,
        onSelectCallback : null,
        listWrapper : ".options",
        li : ".ddlist"
    };
    settings = extend(defaultSettings, settings);
    return $(target).each(function () {
        var elem = $(this);  				//容器
        if (!elem.data("dropdown")) {
			elem.data("dropdown", new Dropdown( elem, settings ));
		}
    });
};

module.exports = dropdown;