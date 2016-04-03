var $ = window.$ || require("jquery");
var extend =  require('object-assign');

var tmpl = require("../templates/history.ejs");

//公共方法
var util = require("../../../assets/components/util");

module.exports = {
	init : function(o){
		// 分页默认从第1页开始
    	this.pager = 1;
    	this.tmpl = tmpl;


    	this.options = extend({

    	},o);

    	this.target = $(o.ele);

		this.bindEvt();
	},

	bindEvt : function(){
		var that = this;
		//select切换
		$("#caseType").on("change",function(){
			var val = $(this).val();
				
			$("#historyWrapper .well").each(function(idx,ele){
				var type = $(ele).attr("type");
				var item = $(ele);

				if(val == 0){
					var match = true;
				}else{
					var match = (val.indexOf(type) >= 0);
				}

				return item.toggle(match);
			});
		});

		that.fetch.call(that);

	},

	fetch : function(){
		var that = this,o = that.options,$this = that.target;

		var parm = [];

		$.ajax({
			url : o.url,
			type : o.type,
			contentType: "application/json",
			success : function(res){
				if(typeof(res) == 'string'){
                   var res = $.parseJSON(res);
                }

                if(res.code!=1){
					warn(res.msg);
					return;
				}

				 var res = res.result;

				//时间优化,区分wishes和assessment
                $.each(res.wishes,function(idx,ele){
                	ele.type = 1;
                });

                $.each(res.assessment,function(idx,ele){
                	ele.type = 2;
                });


                //组装新的list
                var newList = res.wishes.concat(res.assessment).sort(that.sortNumber);

                $.each(newList,function(idx,ele){
                	ele.createTime = util.buildDate(ele.createTime,"yyyy-MM-dd");
                });

                res.caseList = newList;

                that.insertData.call(that,res);
			}
		});
	},

	sortNumber : function(arr1,arr2){
		return (arr2.createTime  - arr1.createTime);
	},

	renderData : function(res){
		var that = this;
		return that.tmpl(res);
	},

	insertData : function(res){
		var that = this,$this = that.target,o = that.options;

		var _html = that.renderData(res);
		if(that.pager == 1){
			$this.empty().append(_html);
		}else{
			$this.append(_html);
		}

	}
};