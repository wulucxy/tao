webpackJsonp([49],{0:function(a,e,t){t(19),t(311);var s=(window.$||t(41),t(42),t(43));s.switchNav(2);var n=t(313);n.init()},311:function(a,e){},313:function(a,e,t){var s=window.$||t(41),n=(t(46),t(314)),l=t(153),i=t(315),o=t(316),r=t(187),c=t(42),p=s("[name=province]").val(),u={render:function(){var a=this;if(this.state.tagList.length){var e=s.map(a.state.tagList,function(a){var e=a.type+":"+a.value;return s("[subject="+a.value+"]").addClass("current"),'<a class="tags" data-action="remove" href="javascript:;" data-value="'+e+'">'+a.text+'<span class="taoIcon btn-x"></span></a>'}),t=[];t.push('<a href="javascript:;" class="fr btn btn-default" data-action="clear">清空所有</a>'),t.push('<span class="cat-text fl">已选择：</span>'),t.push('<span class="tagsWrap">'+e.join("")+"</span>"),s(".crumb").html(t.join(""))}else s(".crumb").html('<span class="cat-text fl">已选择：</span>');if(!s("input[name=subjectList]").length){var n=[];n.push('<input type="hidden" name="subjectList">'),s(".m-nav").append(n.join(""))}},requestData:function(a){var e=this,t=(e.options,s.map(e.state.tagList,function(a){return Number(a.value)})),n={capacity:e.capacity,subjectList:t};a?e.pager++:e.pager=1,n.page=e.pager,s.ajax({url:preServer+p+"/data/subject/search",type:"post",contentType:"application/json",data:JSON.stringify(n),success:function(a){if("string"==typeof a)var a=s.parseJSON(a);return 1!=a.code?void warn(a.msg):(a=a.result,s.each(a.colleges,function(a,e){e.code=e.collegeId,e.name=e.collegeName,e.city={code:e.city,name:l.getCityName(e.city)},e.collegeType={code:e.collegeType,name:l.getCollegeTypeName(e.collegeType)},e.ownerType={code:e.ownerType,name:l.getOwnerTypeName(e.ownerType)},e.level={code:e.level,name:l.getLevelName(e.level)},e.feature=s.map(e.feature,function(a,e){return{type:a,name:l.getFeatureName(a)}})}),void e.loadList(a,e.pager))}})},loadList:function(a,e){var t=this,l=(t.options,n(a));1==e?s(".schoolList").empty().html(l):s(".schoolList").append(l),s(".btn-loading").removeClass("loading disabled");var i=Math.ceil(a.total/t.capacity);e>=i?s(".btn-loading").addClass("loading-all"):s(".btn-loading").removeClass("loading-all")},updateUI:function(){this.render()},init:function(a){var e=this;if(this.state={tagList:[]},this.options=a,this.capacity=10,this.pager=1,this.len=6,this.bindEvt(),c.getQuery("keys")){var t=s(".itemLists .item").map(function(a,e){return{type:s(e).data("value").split(":")[0],value:s(e).data("value").split(":")[1],text:s(e).text()}}),n=c.getQuery("keys").split("");s.each(n,function(a,n){s.each(t,function(a,t){return n==t.value?(e.state.tagList.push({type:t.type,value:t.value,text:t.text}),!1):void 0})}),this.updateUI(),this.requestData()}else this.updateUI(),this.requestData()},bindEvt:function(){var a=this;s(document).on("click","[data-action=add]",function(e){e.preventDefault();var t=s(e.target),n=t.data("value").split(":")[0],l=t.data("value").split(":")[1];t.hasClass("current")||""==l||(a.state.tagList.push({type:n,value:l,text:t.text()}),a.updateUI(),a.requestData())}),s(document).on("click","[data-action=clear]",function(e){e.preventDefault(),s("[data-action=add]").removeClass("current"),a.state.tagList=[],a.updateUI(),a.requestData()}),s(document).on("click","[data-action=remove]",function(e){e.preventDefault();var t=s(e.target).closest(".tags"),n=t.data("value").split(":")[0],l=t.data("value").split(":")[1];s.each(a.state.tagList,function(e,t){if(n==t.type&&l==t.value){a.state.tagList.splice(e,1);var i='[data-value="'+n+":"+l+'"]';return s(i).removeClass("current"),!1}}),a.updateUI(),a.requestData()}),s(".btn-loading").on("click",function(e){e.preventDefault();var t=s(this).closest(".btn");t.hasClass("disabled")||t.hasClass("loading-all")||(t.addClass("disabled loading"),a.requestData(t))}),s(document).on("click",".favMajorBtn",function(e){e.preventDefault();var t=s(e.target).closest(".btn");return t.hasClass("disabled")?!1:(t.addClass("disabled"),void a.reqCollegeInfo(t))})},pagination:function(a,e){var t=this,s=Math.ceil(e.majors.length/6);r(a,{pages:s,displayedPages:3,currentPage:1,edges:1,onPageClick:function(a){t.requestItemList(a)}})},requestItemList:function(a){var e=this;e.majorRes.subMajors=e.majorRes.majors.slice((a-1)*e.len,a*e.len),e.pager++,e.renderList(e.majorRes)},renderList:function(a){s(".majorList").empty().append(o(a))},majorBox:function(a,e){var t=this;modalBox(a,{html:i(e),klass:"w540 shadow",closeByOverlay:!1,startCallback:function(){if(t.pager=1,t.requestItemList(t.pager),!s(".majorListWrap").find(".pagination").length){s(".majorListWrap").append('<div class="pagination"></div>');var a=s(".majorListWrap").find(".pagination");t.pagination(a,e)}},completeCallback:function(){},closeCallback:function(){a.removeClass("disabled")}})},reqCollegeInfo:function(a){var e=this,t=s.map(e.state.tagList,function(a){return Number(a.value)});s.ajax({url:preServer+p+"/data/subject/"+a.attr("collegeid"),type:"post",data:JSON.stringify({subjects:t}),success:function(t){if("string"==typeof t)var t=s.parseJSON(t);return 1!=t.code?(warn(t.msg),!1):(e.majorRes=t.result,void e.majorBox(a,e.majorRes))}})}};a.exports=u},314:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";Array.prototype.join;with(obj)if(0==colleges.length&&1==page)__p+='\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';else{__p+="	\n";for(var i=0;i<colleges.length;i++){__p+='\n<li class="clearfix">\n	<div class="fl">\n	<h4 class="name badgeRow"><em class="badgetitle vm">'+(null==(__t=colleges[i].collegeName)?"":__t)+"</em>\n		";for(var j=0;j<colleges[i].feature.length;j++)__p+="\n			",__p+=1==colleges[i].feature[j].type?'\n				<span class="badge green">'+(null==(__t=colleges[i].feature[j].name)?"":__t)+"</span>\n			":2==colleges[i].feature[j].type?'\n				<span class="badge red">'+(null==(__t=colleges[i].feature[j].name)?"":__t)+"</span>\n			":'\n				<span class="badge">'+(null==(__t=colleges[i].feature[j].name)?"":__t)+"</span>\n			",__p+="\n		";__p+='\n	</h4>\n	<div class="detail">\n		<span class="label">院校属地：</span><span class="field">'+(null==(__t=colleges[i].city.name)?"":__t)+'</span>\n		<span class="label">院校分类：</span><span class="field">'+(null==(__t=colleges[i].collegeType.name)?"":__t)+'</span>\n		<span class="label">院校性质：</span><span class="field">'+(null==(__t=colleges[i].ownerType.name)?"":__t)+'</span>\n		<span class="label">院校层次：</span><span class="field">'+(null==(__t=colleges[i].level.name)?"":__t)+'</span>\n	</div>\n	</div>\n	<div class="fr">\n		<a href="javascript:;" class="btn btn-primary btn-mid favMajorBtn" collegeid='+(null==(__t=colleges[i].collegeId)?"":__t)+" >"+(null==(__t=colleges[i].majorCount)?"":__t)+"个专业</a>\n	</div>\n</li>\n"}}return __p}},315:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<div class="modalCntWrap g9 favMajorModal">\n <h3 class="clearfix">\n <a href="javascript:;" class="icons btn-close fr"></a>\n <span class="fl">'+(null==(__t=collegeName)?"":__t)+'</span>\n</h3>\n\n<div class="majorListWrap">\n  <div class="majorList">\n  	\n  </div>\n</div>\n\n</div>';return __p}},316:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";Array.prototype.join;with(obj)for(var i=0;i<subMajors.length;i++){if(__p+='\n  <div class="row clearfix"> \n  	<span class="col1 fl">\n	  	<a target="_blank" href="/library/major/'+(null==(__t=subMajors[i].majorId)?"":__t)+'" title="'+(null==(__t=subMajors[i].majorName)?"":__t)+'">\n	  		'+(null==(__t=subMajors[i].majorName)?"":__t)+':\n	  	</a>\n  	</span>\n  	<div class="col2 fl">\n      ',0==subMajors[i].subjects.length)__p+='\n        <span class="btn btn-default">不限</span>\n      ';else{__p+="\n  		";for(var k=0;k<subMajors[i].subjects.length;k++)__p+='\n  		<span class="btn btn-default">'+(null==(__t=subMajors[i].subjects[k].subjectName)?"":__t)+"</span>\n  		"}__p+="\n  	</div>\n  </div>\n"}return __p}}});