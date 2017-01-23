var $ = window.$ || require("jquery");
var extend =  require('object-assign');
var tmpl = require("../templates/school.ejs");
var localData = require("../../../assets/components/localData");

var major = {
	init : function(o){
		
        this.majorId = $("[name=majorId]").val();
        this.pager = 1;
        this.capacity = 10;
		this.bindEvt();
	},

	requestData : function(btn){
		var that = this;

		that.province = $("[name=studentProvince]").val();
        that.year = $("[name=Year]").val();
        that.batch = $("[name=batch]").val();
		
		var _data = {
			capacty: that.capacity,
			year: that.year,
			batch: that.batch,
			majorId: that.majorId,
			page: that.pager
		};

		if(that.province){
			_data.province = that.province;
		}

		$.ajax({
			url : preServer+that.province + "/data/major/college",
			type : "post",
			data : JSON.stringify(_data),
            contentType: "application/json",
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

				if(res.code != 1){
					warn(res.msg);
					return;
				}

				//客户端修改数据
                $.each(res.result.colleges,function(idx,ele){
                    //增加code,name
                    ele.code = ele.collegeId;
                    ele.name = ele.collegeName;

                    //获取city名称
                    ele.city = {
                        code : ele.city,
                        name : localData.getCityName(ele.city)
                    };

                    //获取getCollegeTypeName(院校属性)
                    ele.collegeType = {
                        code : ele.collegeType,
                        name : localData.getCollegeTypeName(ele.collegeType)
                    };

                    //获取getCollegeTypeName(院校性质)
                    ele.ownerType = {
                        code : ele.collegeNature,
                        name : localData.getOwnerTypeName(ele.collegeNature)
                    };

                    //获取getLevelName(院校层次)
                    ele.level = {
                        code : ele.level,
                        name : localData.getLevelName(ele.collegeLevel)
                    };

                    //获取featrueList
                    ele.feature = ele.feature ? $.map(ele.feature,function(el,index){
                        return {
                            type : el,
                            name : localData.getFeatureName(el)
                        };
                    }) : [];
                });

                res = res.result;

                console.log(res);

				that.insertData(res,that.pager);
			}
		});
	},

	insertData : function(res,pager){
		var that = this;
		var _html = tmpl(res);

		if(pager == 1){
			$(".schoolList").empty().html(_html);
		}else{
			$(".schoolList").append(_html);
		}

		if(pager == 1 && res.total == 0){
			$(".btn-loading").hide();
		}else{
			$(".btn-loading").show();
			$(".btn-loading").removeClass("loading disabled");
		}

		var pageCount = Math.ceil(res.total / that.capacity);
		//最后一页
		if(pager >= pageCount){
			$(".btn-loading").addClass("loading-all");
		}else{
            $(".btn-loading").removeClass("loading-all");
        }

		that.pager++;
	},

	bindEvt : function(){
		var that = this;

		$(".trigger").on("change",function(){
			that.pager = 1;
			that.requestData();
		});

		$(".btn-loading").on("click",function(e){
    		e.preventDefault();
    		var btn = $(this).closest(".btn");
    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
    		btn.addClass("disabled loading");
    		that.requestData(btn);
    	});

		$(".btn-loading").trigger("click");

	}
};

module.exports = major;