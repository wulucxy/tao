webpackJsonp([31],{0:function(n,s,e){e(21),e(258);var t=window.$||e(44),i=(e(45),e(46),e(252),e(260)),a=t("[name=province]").val(),r={init:function(){this.pager=1,this.capacity=10,this.tagIndex=0,this.bindEvt()},initRequest:function(){for(var n=this,s=[],e=0;e<window.__initData__.length;e++)s.push(n.request(window.__initData__[e].id));t.when.apply(t,s).done(function(){var s=Array.prototype.slice.call(arguments);t(".infoListWrap").removeClass("preloading");for(var e=0;e<s.length;e++)n.loadList.call(n,s[e][0],e)})},request:function(n){var s=[];return s.push("capacity=5"),s.push("moduleId="+n),t.ajax({url:preServer+a+"/news?"+s.join("&"),type:"get",success:function(n){if("string"==typeof n)var n=t.parseJSON(n);return 1!=n.code?void warn(n.msg):void 0},error:function(n){console.log(n)}})},requestList:function(n){var s=this;n&&t(n).hasClass("btn-loading")?s.pager++:s.pager=1;var e=[];e.push("capacity=5"),e.push("tag="+t(".infoTag").eq(s.tagIndex).attr("code")),t.ajax({url:preServer+a+"/news?"+e.join("&"),type:"get",success:function(n){if("string"==typeof n)var n=t.parseJSON(n);if(1!=n.code)return void warn(n.msg);n.result.tagType=tagType;var n=n.result;t(".infoListWrap").removeClass("preloading"),s.loadList(n,s.pager)},error:function(n){console.log(n)}})},loadList:function(n,s){var e=this,a=(e.options,i(n.result));console.log(a),t(".infoList").eq(s).empty().html(a)},bindEvt:function(){this.initRequest()}};r.init()},258:function(n,s){},260:function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="";Array.prototype.join;with(obj)if(0==news.length&&1==page)__p+='\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';else{__p+="\n";for(var i=0;i<news.length;i++){__p+='\n<li>\n   	 <div class="media">\n		<span class="fl imgWrap">\n			<img src="'+(null==(__t=news[i].newsIconUrl)?"":__t)+'">\n		</span>\n		<div class="media-body">\n				<h3 class="clearfix">\n					',news[i].newsTags.length&&news[i].newsTags[0]&&(__p+='\n					<span class="btn btn-primary infoTag btn-outlined fr">\n						'+(null==(__t=news[i].newsTags)?"":__t)+"\n					</span>\n					"),__p+='\n					<a class="detailTitle" href="'+(null==(__t=news[i].newsUrl)?"":__t)+'" target="_blank">\n						'+(null==(__t=news[i].newsName)?"":__t)+'\n					</a>\n					\n				</h3>\n				\n				<!-- <div class="clearfix detailSub g6">\n					';for(var k=0;k<news[i].newsTags.length;k++)__p+='\n					<span class="fl article-tag mr10">'+(null==(__t=news[i].newsTags[k])?"":__t)+"</span>\n					";__p+='\n				\n				</div> -->\n\n				<div class="detailCnt clearfix">\n					<span class="moment">'+(null==(__t=news[i].time)?"":__t)+"</span>\n				</div>\n				\n		</div>\n	</div>\n</li>\n"}}return __p}}});