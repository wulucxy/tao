var $ = window.$ || require("jquery");
var extend =  require('object-assign');

var cityList = require("./city");

var citySelect = {
	init : function(t,options){
		var options = extend({
			data :null,
			url : '',
			prov:'',
			city:'',
			nodata:'none',
	 		required:"<option value='' selected>请选择</option>"
		},options);

		this.options = options;

		this.prov = t.find( '.prov' );
	 	this.city = t.find( '.city' );


	 	this.initStatus();

		

	},

	initStatus : function(){
		var that = this,o = that.options;
		var temp_html=o.requiredProv || o.required;
		this.city.empty().attr("disabled",true);
		
		this.startProv();

		if(o.prov){
			that.provIndex = $.map(cityList,function(ele){
				return ele.v;
			}).indexOf(o.prov);
		};

		if()

	},

	startProv : function(){
		$('.prov').html('');
		var temp = [];
		$.each(cityList,function(idx,list){
			temp.push("<li data-value='"+list.v+"'>"+list.p+"</li>");
		});

		$(".prov").append(temp.join(""));
	}

};

module.exports = citySelect;