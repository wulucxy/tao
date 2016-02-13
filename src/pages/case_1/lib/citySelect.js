var $ = window.$ || require("jquery");
var extend =  require('object-assign');

var citySelect = {
	init : function(t,options){
		var options = extend({
			data :null,
			url : '',
			prov:'',
			city:'',
			nodata:'none',
			klass : "current",
	 		required:""
		},options);

		this.options = options;

		this.prov = t.find( '.prov' );
	 	this.city = t.find( '.city' );
	 	
	 	//缓存
	 	this.pageDataCache = {};

	 	this.initStatus();
	},

	initStatus : function(){
		var that = this,o = that.options;
		var temp_html=o.requiredProv || o.required;
		this.city.empty().addClass("disabled");

		return;
		
		//渲染省
		this.provStart();

		if(o.prov){
			that.provIndex = $.map(cityList,function(ele){
				return ele.v;
			}).indexOf(o.prov);
		}

		that.h = that.prov.find("li").height();

		if(typeof that.provIndex != "undefined" && that.provIndex != "-1"){
			that.provList.eq(that.provIndex).addClass(o.klass);
		}

		if(o.prov){
			that.ajaxRequest.call(that,o.prov,function(){
				if(!!o.city){
					that.city.val(o.city);
					if(o.citySuccessCb){
						o.citySuccessCb();
					}
				}
			});		
		}

		//回调
		o.startCallback && o.startCallback.call(that)


		// 选择省份时发生事件
		this.prov.on("click","li",function(){
			if(that.prov.hasClass("disabled")) return;
			that.provIndex = that.prov.find("li").index($(this));
			$(this).siblings().removeClass(o.klass);
			$(this).addClass(o.klass);

			that.ajaxRequest.call(that,that.provIndex);
		});

		// 选择城市时发生事件
		this.city.on("click","li",function(){
			if(that.city.hasClass("disabled")) return;
			that.cityIndex = that.city.find("li").index($(this));
			$(this).siblings().removeClass(o.klass);
			$(this).addClass(o.klass);
		});
	},

	ajaxRequest : function(val,callback){									//请求change状态 city数据信息
		var that = this, $this = that.target,o=that.options;
		
		this.city.empty();
		this.city.addClass("disabled");

		if(!o.url) return;

		$.ajax({
			url : o.url,
			type : "post",
			data : {provinceId:val},
			success : function(res){
				if(typeof res =="string"){
					var res = $.parseJSON(res);
				}

				that.cityStart.call(that,res);
				if(callback){
					callback();
				}
		 	},
			error : function(err){
				console.log(err);
			}
		})
	},

	provStart : function(){
		var that = this;
		$('.prov').html('');
		var temp = [];
		$.each(cityList,function(idx,list){
			temp.push("<li data-value='"+list.v+"'>"+list.p+"</li>");
		});

		$(".prov").append(temp.join(""));
		that.provList = $(".prov").find("li");
	},

	cityStart:function(data){
		var that = this, $this = that.target,o=that.options;
		if(that.provIndex < 0 || typeof data == "undefined"){	
			that.city.addClass("disabled");
			return;
		}
		
		// 遍历赋值市级下拉列表
		var temp_html=o.requiredCity || o.required;
		var citySelected = {};

		var listLen = 0;
		$.each(data.c,function(i,city){
			temp_html+='<li><label><input type="checkbox" name="city" n="'+city["name"]+'" value="'+city["id"]+'" ><em>'+city["name"]+'</em></label></li>';
			listLen = i+1;
		});
		this.city.html(temp_html);
		this.city.removeClass("disabled");

		o.citySuccessCb && o.citySuccessCb.call(that);
	},

};

module.exports = citySelect;