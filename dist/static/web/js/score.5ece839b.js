webpackJsonp([49],{0:function(t,e,s){s(22),s(316);var a=window.$||s(45),n=(s(46),s(47),s(318)),r=s(319),i=a("[name=province]").val(),o={init:function(){this.getScore(),this.state={}},render:function(){var t=this;if(t.state.promoteSubjects.length){var e=a.map(t.state.promoteSubjects,function(t){return t.subjectName}).join("、"),s=a.map(t.state.promoteSubjects,function(t){return t.subjectId}).join("");t.state.recommend=e,t.state.keys=s,a(".recommend").empty().html(n(t.state)).fadeIn()}t.state.scores.length&&(a("#scoreTable").find("tbody").html(r(t.state)),t.tableEditor())},getScore:function(){var t=this;a.ajax({url:preServer+i+"/profile/score/detail?"+Math.random(),type:"get",success:function(e){if("string"==typeof e)var e=a.parseJSON(e);if(1!=e.code)return void warn(e.msg||"网络错误，请稍后重试");var e=e.result;t.state.promoteSubjects=e.promoteSubjects,t.state.scores=e.scores,t.render(),t.subjectList=a.map(e.scores[0].subjects,function(t){return{subjectId:t.subjectId,subjectName:t.subjectName}})},error:function(t){btn.removeClass("disabled")}})},tableEditor:function(){var t=this;a("[editable]").prop("tabindex",1),a(".toggleTxt").on("click",function(e){e.preventDefault();var s=a(e.target).closest(".btn");0==s.attr("txtstatus")?(s.addClass("needEditing"),s.attr("txtstatus",1),t.editAction(s)):1==s.attr("txtstatus")&&t.saveAction(s)})},editAction:function(t){var e=this,s=["padding","padding-top","padding-bottom","padding-left","padding-right","text-align","font","font-size","font-family","font-weight"];if(a("td[editable]").removeClass("onEditor"),t.hasClass("needEditing")){var n=t.attr("rel"),r=a("td[examid="+n+"][editable]");r.each(function(t,n){var r,i=a(n),o=1;if("undefined"!=typeof i.attr("select")?(o=2,r="<select class='editor'></select>"):(r="<input class='editor'/>",o=1),i.append(r).addClass("onEditor"),2==o){var c=[],d=i.attr("subjectid");a.each(e.subjectList,function(t,e){var s=e.subjectId==d?"selected":"";c.push("<option value="+e.subjectId+" "+s+" >"+e.subjectName+"</option>")}),c=c.join("")}1==o?i.find(".editor").css("position","absolute").offset(i.offset()).css(i.css(s)).width(i.width()).height(i.height()).val(a.trim(i.text())):2==o&&i.find(".editor").offset(i.offset()).css(i.css(s)).width(i.outerWidth(!0)).height(i.outerHeight(!0)).append(c)}),a(".editor").on("focusin",function(){a(this).removeClass("error")})}},saveAction:function(t){var e=this;e.validateField(t)?(t.removeClass("needEditing"),t.attr("txtstatus",0),e.renderSaveRes(t)):window.console&&console.log("修改出错")},renderSaveRes:function(t){var e=this,s=t.attr("rel"),n=a("td[examid="+s+"][editable]"),r=a("tr[examid="+s+"]"),i=[];a.each(n,function(t,e){var s=a(e),n=s.find(".editor"),r=n.val();"SELECT"==n.get(0).tagName&&(r=n.find("option:selected").text(),s.attr("subjectid",n.val())),n.remove(),s.html(r)}),a.each(r,function(t,e){var s=a(e);i.push({subjectId:s.find("td").eq(0).attr("subjectid"),subjectName:s.find("td").eq(0).text(),score:s.find("td").eq(1).text(),place:s.find("td").eq(2).text()})}),a.each(e.state.scores,function(t,a){if(a.exam.examId==s)return e.state.scores[t].subjects=i,!1}),e.reqEditScore(t)},reqEditScore:function(t){var e,s=this,n=t.attr("rel");a.each(s.state.scores,function(t,s){if(s.exam.examId==n)return e=t,!1});var r={examId:t.attr("rel"),subjects:s.state.scores[e].subjects};a.ajax({url:preServer+i+"/profile/score/edit",type:"post",contentType:"application/json",data:JSON.stringify(r),success:function(t){if("string"==typeof t)var t=a.parseJSON(t);return 1!=t.code?void warn(t.msg):void window.location.reload()}})},validateField:function(t){var e=this;e.reg=/^radio|checkbox/;var s=t.attr("rel"),n=a("td[examid="+s+"]").find(".editor");return e.allPass=!0,a.each(n,function(t,s){e.validate(s)}),!!e.allPass},isEmpty:function(t){var e=0,s=a(t).val();return""==a.trim(s)&&e++,0!=e},isRegex:function(t){var e=t.value,s=(t.getAttribute("type"),a(t).closest("td").attr("pattern"));return"string"==typeof s&&(s=new RegExp(s,"i")),s.test(e)},validate:function(t){var e=this;t.getAttribute("type");"SELECT"==t.tagName?t.value||(e.allPass=!1,a(t).addClass("error")):e.isEmpty(t)?(e.allPass=!1,a(t).addClass("error"),warn("请录入分数")):e.isRegex(t)?Number(t.value)>200&&(a(t).addClass("error"),e.allPass=!1,warn("录入分数不能超过200分")):(e.allPass=!1,a(t).addClass("error"),warn("请录入正确的分数"))}};o.init()},316:function(t,e){},318:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<p>\n\t<span class="blue">推荐选考：</span>\n\t<span class="list">\n\t\t<em class="recommendList">'+(null==(__t=recommend)?"":__t)+'</em>\n\t</span>\n</p>\n<div class="btnRow">\n\t<a href="/library/subject?keys='+(null==(__t=keys)?"":__t)+'" class="btn btn-primary" target="_blank">查查看，能选什么专业</a>\n</div>';return __p}},319:function(module,exports){module.exports=function(obj){function print(){__p+=__j.call(arguments,"")}obj||(obj={});var __t,__p="",__j=Array.prototype.join;with(obj)for(var i=0;i<scores.length;i++){__p+="\n\t";for(var k=0;k<scores[i].subjects.length;k++)__p+='\n<tr examid="'+(null==(__t=scores[i].exam.examId)?"":__t)+'">\n\t',0==k&&(__p+='\n\t<th rowspan="'+(null==(__t=scores[i].subjects.length)?"":__t)+'" >\n\t\t<div class="control">\n\t\t<p>'+(null==(__t=scores[i].exam.examName)?"":__t)+'</p>\n\t\t<a href="javascript:;" class="btn btn-primary toggleTxt" txtStatus="0" rel="'+(null==(__t=scores[i].exam.examId)?"":__t)+'" >\n\t\t\t<em class="editTxt">编辑</em>\n\t\t\t<em class="saveTxt">保存</em>\n\t\t</a>\n\t\t</div>\n\t</th>\n\t'),__p+='\n\t<td examid="'+(null==(__t=scores[i].exam.examId)?"":__t)+'" select subjectid="'+(null==(__t=scores[i].subjects[k].subjectId)?"":__t)+'" >\n\t\t'+(null==(__t=scores[i].subjects[k].subjectName)?"":__t)+'\n\t</td>\n\t<td editable examid="'+(null==(__t=scores[i].exam.examId)?"":__t)+'" pattern="^[0-9]{1,3}$" >'+(null==(__t=scores[i].subjects[k].score)?"":__t)+'</td>\n\t<td examid="'+(null==(__t=scores[i].exam.examId)?"":__t)+'" pattern="^[0-9]{1,8}$" >'+(null==(__t=scores[i].subjects[k].place)?"":__t)+"</td>\n</tr>\n\t";__p+="\n"}return __p}}});