var $ = window.$ || require("jquery");

module.exports = {
	init : function(){
		// 历史方案
		$("#caseType").on("change",function(){
			var val = $(this).val();
				
			$(".btnLoadingWrap").toggle(!Number(val));

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

		$(".btn-loading").trigger("click");
	}
};