webpackJsonp([31],{0:function(t,n,i){i(21),i(258);var s=window.$||i(44),e=(i(45),i(46),i(252),i(260)),a=s("[name=province]").val(),r={init:function(){this.pager=1,this.capacity=10,this.tagIndex=0,this.bindEvt()},initRequest:function(){for(var t=this,n=[],i=0;i<window.__initData__.length;i++)n.push(t.request(window.__initData__[i].id));s.when.apply(s,n).done(function(){var n=Array.prototype.slice.call(arguments);s(".infoListWrap").removeClass("preloading");for(var i=0;i<n.length;i++)t.loadList.call(t,n[i][0],i)})},request:function(t){var n=[];return n.push("capacity=5"),n.push("moduleId="+t),s.ajax({url:preServer+a+"/news?"+n.join("&"),type:"get",success:function(t){if("string"==typeof t)var t=s.parseJSON(t);if(1!=t.code)return void warn(t.msg)},error:function(t){console.log(t)}})},requestList:function(t){var n=this;t&&s(t).hasClass("btn-loading")?n.pager++:n.pager=1;var i=[];i.push("capacity=5"),i.push("tag="+s(".infoTag").eq(n.tagIndex).attr("code")),s.ajax({url:preServer+a+"/news?"+i.join("&"),type:"get",success:function(t){if("string"==typeof t)var t=s.parseJSON(t);if(1!=t.code)return void warn(t.msg);t.result.tagType=tagType;var t=t.result;s(".infoListWrap").removeClass("preloading"),n.loadList(t,n.pager)},error:function(t){console.log(t)}})},loadList:function(t,n){var i=this,a=(i.options,e(t.result));console.log(a),s(".infoList").eq(n).empty().html(a)},bindEvt:function(){this.initRequest()}};r.init()},258:function(t,n){},260:function(module,exports){module.exports=function(obj){function print(){__p+=__j.call(arguments,"")}obj||(obj={});var __t,__p="",__j=Array.prototype.join;with(obj)if(0==news.length&&1==page)__p+='\n\t<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';else{__p+="\n";for(var i=0;i<news.length;i++){__p+='\n<li>\n   \t <div class="media">\n\t\t<span class="fl imgWrap">\n\t\t\t<img src="'+(null==(__t=news[i].newsIconUrl)?"":__t)+'">\n\t\t</span>\n\t\t<div class="media-body">\n\t\t\t\t<h3 class="clearfix">\n\t\t\t\t\t',news[i].newsTags.length&&news[i].newsTags[0]&&(__p+='\n\t\t\t\t\t<span class="btn btn-primary infoTag btn-outlined fr">\n\t\t\t\t\t\t'+(null==(__t=news[i].newsTags)?"":__t)+"\n\t\t\t\t\t</span>\n\t\t\t\t\t"),__p+='\n\t\t\t\t\t<a class="detailTitle" href="'+(null==(__t=news[i].newsUrl)?"":__t)+'" target="_blank">\n\t\t\t\t\t\t'+(null==(__t=news[i].newsName)?"":__t)+'\n\t\t\t\t\t</a>\n\t\t\t\t\t\n\t\t\t\t</h3>\n\t\t\t\t\n\t\t\t\t<!-- <div class="clearfix detailSub g6">\n\t\t\t\t\t';for(var k=0;k<news[i].newsTags.length;k++)__p+='\n\t\t\t\t\t<span class="fl article-tag mr10">'+(null==(__t=news[i].newsTags[k])?"":__t)+"</span>\n\t\t\t\t\t";__p+='\n\t\t\t\t\n\t\t\t\t</div> -->\n\n\t\t\t\t<div class="detailCnt clearfix">\n\t\t\t\t\t<span class="moment">'+(null==(__t=news[i].time)?"":__t)+"</span>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t</div>\n\t</div>\n</li>\n"}}return __p}}});