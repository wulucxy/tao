var $ = window.$ || require("jquery");

var requestAllProvinces =  function(ele){
	$.ajax({
		url : "/system/allProvinces",
		type : "get",
		contentType: "application/json",
		success : function(res){
			if(typeof res == "string"){
				var res = $.parseJSON(res);
			}

			if(res.code!=1){
				warn(res.msg);
				return;
			}

			var res = res.result;
			var optionList = [];

			$.each(res,function(idx,ele){
				optionList.push('<option value='+ele.code+'>'+ele.name+'</option>');
			});

			$(ele).empty();
			$(ele).append(optionList.join(""));
		},
		error : function(){
			warn("网络请求失败，请稍后重试");
		}
	});
}

module.exports = requestAllProvinces;