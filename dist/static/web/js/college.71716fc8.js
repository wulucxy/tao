webpackJsonp([10],{0:function(e,t,a){a(21),a(162);var n=(window.$||a(44),a(45),a(46));n.switchNav(2);var l=a(164);l.init()},162:function(e,t){},164:function(e,t,a){var n=window.$||a(44),l=(a(49),a(165)),s=a(133),i=a(45),o=n("[name=province]").val(),c={render:function(){var e=this;if(this.state.tagList.length){var t=n.map(e.state.tagList,function(e){var t=e.type+":"+e.value;return'<a class="tags" data-action="remove" href="javascript:;" data-value="'+t+'">'+e.text+'<span class="taoIcon btn-x"></span></a>'}),a=[];a.push('<a href="javascript:;" class="fr btn btn-default" data-action="clear">清空所有</a>'),a.push('<span class="cat-text fl">已选择：</span>'),a.push(t.join("")),n(".crumb").html(a.join(""))}else n(".crumb").html('<span class="cat-text fl">已选择：</span>');if(!n("input[name=city]").length){var l=[];l.push('<input type="hidden" name="city">'),l.push('<input type="hidden" name="level">'),l.push('<input type="hidden" name="feature">'),n(".crumb").append(l.join(""))}var s="0";n.each(e.state.tagList,function(e,t){n("[name="+t.type+"]").val(t.value||""),s+=n("[name="+t.type+"]").val()})},requestData:function(e){var t=this,a=(t.options,{province:Number(n("[name=city]").val()),capacity:t.capacity,level:n("[name=level]").val(),feature:[Number(n("[name=feature]").val())]});a.city+a.level+a.feature;e&&n(e).hasClass("btn-loading")?t.pager++:t.pager=1,a.page=t.pager,n.ajax({url:preServer+o+"/data/college",type:"post",contentType:"application/json",data:JSON.stringify(a),success:function(e){if("string"==typeof e)var e=n.parseJSON(e);return 1!=e.code?void warn(e.msg):(e=e.result,n.each(e.colleges,function(e,t){t.code=t.collegeId,t.name=t.collegeName,t.city={code:t.city,name:s.getCityName(t.city)},t.collegeType={code:t.collegeType,name:s.getCollegeTypeName(t.collegeType)},t.ownerType={code:t.ownerType,name:s.getOwnerTypeName(t.ownerType)},t.level={code:t.level,name:s.getLevelName(t.level)},t.feature=n.map(t.feature,function(e,t){return{type:e,name:s.getFeatureName(e)}})}),void t.loadList(e,t.pager))}})},loadList:function(e,t){var a=this,s=(a.options,l(e));1==t?n(".schoolList").empty().html(s):n(".schoolList").append(s),1==t&&0==e.total?n(".btn-loading").hide():(n(".btn-loading").show(),n(".btn-loading").removeClass("loading disabled"));var i=Math.ceil(e.total/a.capacity);t>=i?n(".btn-loading").addClass("loading-all"):n(".btn-loading").removeClass("loading-all")},updateUI:function(){this.render()},init:function(e){this.state={tagList:[]},this.options=e,this.capacity=10,this.pager=1,this.render(),this.bindEvt()},searchCollegeReq:function(e,t){var a=this,l=n("#collegeInput");n.ajax({url:preServer+o+"/data/college/search",type:"post",data:JSON.stringify({keyword:t||l.val(),page:a.pager}),contentType:"application/json",success:function(t){if("string"==typeof t)var t=n.parseJSON(t);return 1!=t.code?(warn(t.msg),void e.removeClass("disabled")):(t=t.result,n.each(t.colleges,function(e,t){t.code=t.collegeId,t.name=t.collegeName,t.city={code:t.city,name:s.getCityName(t.city)},t.collegeType={code:t.collegeType,name:s.getCollegeTypeName(t.collegeType)},t.ownerType={code:t.ownerType,name:s.getOwnerTypeName(t.ownerType)},t.level={code:t.level,name:s.getLevelName(t.level)},t.feature=n.map(t.feature,function(e,t){return{type:e,name:s.getFeatureName(e)}})}),e.removeClass("disabled"),a.loadList(t,a.pager),void a.pager++)},error:function(t){e.removeClass("disabled"),console.log(t)}})},bindEvt:function(){function e(e){e.preventDefault(),t.pager=1;var a=n("#collegeInput"),l=n(this).closest(".btn");return""==n.trim(a.val())?void warn("请输入院校名称"):(t.state.searchType=1,void(l.hasClass("disabled")||(l.addClass("disabled"),t.state.tagList=[],n(".itemLists .item").removeClass("current"),t.render(),t.searchCollegeReq(l))))}var t=this;n(document).on("click","[data-action=add]",function(e){e.preventDefault();var a=n(e.target);n("#collegeInput").val(""),t.state.searchType=0;var l=a.data("value").split(":")[0],s=a.data("value").split(":")[1];a.hasClass("current")||""==s||(a.closest(".row").find(".item").removeClass("current"),n.each(t.state.tagList,function(e,a){if(l==a.type)return t.state.tagList.splice(e,1),!1}),a.addClass("current"),t.state.tagList.push({type:l,value:s,text:a.text()}),t.render(),t.requestData(a))}),n(document).on("click","[data-action=clear]",function(e){e.preventDefault(),t.state.searchType=0,n("#collegeInput").val(""),n("[data-action=add]").removeClass("current"),t.state.tagList=[],t.render(),t.requestData()}),n(document).on("click","[data-action=remove]",function(e){e.preventDefault(),n("#collegeInput").val(""),t.state.searchType=0;var a=n(e.target).closest(".tags"),l=a.data("value").split(":")[0],s=a.data("value").split(":")[1];n.each(t.state.tagList,function(e,a){if(l==a.type&&s==a.value){t.state.tagList.splice(e,1);var i='[data-value="'+l+":"+s+'"]';return n(i).removeClass("current"),!1}}),t.render(),t.requestData(a)}),n(".btn-loading").on("click",function(e){e.preventDefault();var a=n(this).closest(".btn");if(!a.hasClass("disabled")&&!a.hasClass("loading-all"))if(a.addClass("disabled loading"),1==t.state.searchType){var l=n("#collegeInput").val()||decodeURI(i.getQuery("keyword"));t.searchCollegeReq(n("#sBtn"),l)}else 0==t.state.searchType&&t.requestData(a)}),n("#sBtn").on("click",function(t){e(t)}),n("#collegeInput").on("keyup",function(t){return 13==t.keyCode&&void e(t)}),i.getQuery("keyword")?(t.state.searchType=1,t.searchCollegeReq(n("#sBtn"),decodeURI(i.getQuery("keyword")))):(t.state.searchType=0,t.requestData())}};e.exports=c},165:function(module,exports){module.exports=function(obj){function print(){__p+=__j.call(arguments,"")}obj||(obj={});var __t,__p="",__j=Array.prototype.join;with(obj)if(0==colleges.length&&1==page)__p+='\n\t<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';else{__p+="\t\n";for(var i=0;i<colleges.length;i++){__p+='\n<li class="clearfix">\n\t\n\t<div class="fr">\n\t\t<a href="/library/college/'+(null==(__t=colleges[i].collegeId)?"":__t)+'" target="_blank" class="btn btn-primary btn-mid">查看详情</a>\n\t</div>\n\t<div class="media">\n\t<span class="fl imgWrap mr10 dib">\n\t\t<img src="'+(null==(__t=colleges[i].logo)?"":__t)+'" class="responsive" />\n\t</span>\n\t<div className="media-body">\n\t\t<h4 class="name badgeRow"><em class="badgetitle vm">'+(null==(__t=colleges[i].collegeName)?"":__t)+"</em>\n\t\t\t";for(var j=0;j<colleges[i].feature.length;j++)__p+="\n\t\t\t\t",__p+=1==colleges[i].feature[j].type?'\n\t\t\t\t\t<span class="badge green">'+(null==(__t=colleges[i].feature[j].name)?"":__t)+"</span>\n\t\t\t\t":2==colleges[i].feature[j].type?'\n\t\t\t\t\t<span class="badge red">'+(null==(__t=colleges[i].feature[j].name)?"":__t)+"</span>\n\t\t\t\t":'\n\t\t\t\t\t<span class="badge">'+(null==(__t=colleges[i].feature[j].name)?"":__t)+"</span>\n\t\t\t\t",__p+="\n\t\t\t";__p+='\n\t\t</h4>\n\t\t<div class="detail">\n\t\t\t<span class="label">院校属地：</span><span class="field">'+(null==(__t=colleges[i].city.name)?"":__t)+'</span>\n\t\t\t<span class="label">院校分类：</span><span class="field">'+(null==(__t=colleges[i].collegeType.name)?"":__t)+'</span>\n\t\t\t<span class="label">院校性质：</span><span class="field">'+(null==(__t=colleges[i].ownerType.name)?"":__t)+'</span>\n\t\t\t<span class="label">院校层次：</span><span class="field">'+(null==(__t=colleges[i].level.name)?"":__t)+"</span>\n\t\t</div>\n\t</div>\n\t</div>\n</li>\n"}}return __p}}});