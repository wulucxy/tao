webpackJsonp([40],{0:function(t,a,e){e(22),e(293);var n=(window.$||e(45),e(46),e(47),e(295));n.init()},293:function(t,a){},295:function(t,a,e){var n=window.$||e(45),s=(e(50),e(296)),i=(e(134),e(46)),l=n("[name=province]").val(),r={render:function(){var t=this;if(this.state.tagList.length){var a=n.map(t.state.tagList,function(t){var a=t.type+":"+t.value;return'<a class="tags" data-action="remove" href="javascript:;" data-value="'+a+'">'+t.text+'<span class="taoIcon btn-x"></span></a>'}),e=[];e.push('<a href="javascript:;" class="fr btn btn-default" data-action="clear">清空所有</a>'),e.push('<span class="cat-text fl">已选择：</span>'),e.push(a.join("")),n(".crumb").html(e.join(""))}else n(".crumb").html('<span class="cat-text fl">已选择：</span>');if(!n("input[name=major]").length){var s=[];s.push('<input type="hidden" name="major">'),s.push('<input type="hidden" name="university">'),s.push('<input type="hidden" name="universityLevel">'),n(".crumb").append(s.join(""))}var i="0";n.each(t.state.tagList,function(t,a){n("[name="+a.type+"]").val(a.value||""),i+=n("[name="+a.type+"]").val()})},requestData:function(t){var a=this,e=(a.options,n("[name=major]").val()),s=n("[name=university]").val(),r=n("[name=universityLevel]").val(),o={capacity:a.capacity};i.isUndefined(e)||(o.majorId=e),i.isUndefined(s)||(o.universityId=s),i.isUndefined(r)||(o.universityLevel=r),t&&n(t).hasClass("btn-loading")?a.pager++:a.pager=1,o.page=a.pager,n.ajax({url:preServer+l+"/newsV3/majorUnscrambleListWeb",type:"post",contentType:"application/json",data:JSON.stringify(o),success:function(t){if("string"==typeof t)var t=n.parseJSON(t);return 1!=t.code?void warn(t.msg):(t.result.majorList.forEach(function(t){t.date=i.formatDate(t.newsDate,"yyyy-MM-dd hh:mm:ss")}),t.result.provinceId=l,t=t.result,void a.loadList(t,a.pager))}})},loadList:function(t,a){var e=this,i=(e.options,s(t));1==a?n(".majorList").empty().html(i):n(".majorList").append(i),1==a&&0==t.total?n(".btn-loading").hide():(n(".btn-loading").show(),n(".btn-loading").removeClass("loading disabled"));var l=Math.ceil(t.total/e.capacity);a>=l?n(".btn-loading").addClass("loading-all"):n(".btn-loading").removeClass("loading-all")},updateUI:function(){this.render()},init:function(t){this.state={tagList:[]},this.options=t,this.capacity=10,this.pager=1,this.render(),this.bindEvt()},bindEvt:function(){var t=this;n(document).on("click","[data-action=add]",function(a){a.preventDefault();var e=n(a.target);n("#collegeInput").val(""),t.state.searchType=0;var s=e.data("value").split(":")[0],i=e.data("value").split(":")[1];e.closest(".row").find(".item").not(e).removeClass("current"),e.toggleClass("current"),n.each(t.state.tagList,function(a,e){if(s==e.type)return t.state.tagList.splice(a,1),!1}),t.state.tagList.push({type:s,value:i,text:e.text()}),t.render(),t.requestData(e)}),n(document).on("click","[data-action=clear]",function(a){a.preventDefault(),t.state.searchType=0,n("#collegeInput").val(""),n("[data-action=add]").removeClass("current"),t.state.tagList=[],t.render(),t.requestData()}),n(document).on("click","[data-action=remove]",function(a){a.preventDefault(),n("#collegeInput").val(""),t.state.searchType=0;var e=n(a.target).closest(".tags"),s=e.data("value").split(":")[0],i=e.data("value").split(":")[1];n.each(t.state.tagList,function(a,e){if(s==e.type&&i==e.value){t.state.tagList.splice(a,1);var l='[data-value="'+s+":"+i+'"]';return n(l).removeClass("current"),!1}}),t.render(),t.requestData(e)}),n(".btn-loading").on("click",function(a){a.preventDefault();var e=n(this).closest(".btn");e.hasClass("disabled")||e.hasClass("loading-all")||(e.addClass("disabled loading"),0==t.state.searchType&&t.requestData(e))}),t.state.searchType=0,t.requestData()}};t.exports=r},296:function(module,exports){module.exports=function(obj){function print(){__p+=__j.call(arguments,"")}obj||(obj={});var __t,__p="",__j=Array.prototype.join;with(obj)if(0==majorList.length&&1==page)__p+='\n\t<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';else{__p+="\t\n";for(var i=0;i<majorList.length;i++)__p+='\n<li class="clearfix">\n\t<a href=\'/infoV3/'+(null==(__t=majorList[i].newsId)?"":__t)+'/majorUnscrambleDetail\' class="media">\n\t<span class="fl imgWrap mr10 dib">\n\t\t<img src="'+(null==(__t=majorList[i].newsIconUrl)?"":__t)+'" class="responsive" />\n\t</span>\n\t<div className="media-body">\n\t\t<h4 class="name">'+(null==(__t=majorList[i].newsTitle)?"":__t)+'</h4>\n\t\t<div class="detail">样本院校：'+(null==(__t=majorList[i].newsUniversityName)?"":__t)+'</div>\n\t</div>\n\t<div class="footCnt clearfix">\n\t\t<span class="moment">'+(null==(__t=majorList[i].date)?"":__t)+"</span>\n\t</div>\n\t</a>\n</li>\n"}return __p}}});