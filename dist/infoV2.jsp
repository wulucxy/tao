<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<%@ include file = "/partials/_meta.jsp" %>
	<title>淘志愿</title>
<link href="/static/web/css/vendors.da0ee6f1.css" rel="stylesheet"><link href="/static/web/css/infoV2.1ade7d8d.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<div class="jimu container clearfix">
			<div class="column fl col1">
				<a target="_blank"class="infoLink big" href="${bannerList.big.href}">
					<span class="imgWrap">
					<img src="${bannerList.big.imgUrl}" class="responsive">
					</span>
					<div class="figbar te">
						${bannerList.big.title}</div>
				</a>
			</div>
			<div class="column fr col2 ovh">
				<!-- <div class="top">
					<a target="_blank" class="infoLink mid" href="${bannerList.middle.href}">
						<span class="imgWrap">
							<img src="${bannerList.middle.imgUrl}" class="responsive">
						</span>
						<div class="figbar">
						${bannerList.middle.title}</div>
					</a>
				</div>

				<div class="bot clearfix mt10"> -->

				<div class="smlLists">
					<c:forEach var="list" items="${bannerList.smallList}">
					<div class="column fl col">
						<a target="_blank" class="infoLink sml" href="${list.href}">
							<span class="imgWrap">
								<img src="${list.imgUrl}" class="responsive">
							</span>
							<div class="figbar">
						<em class="vm w99 dib">${list.title}</em><em class="pixel1 vm"></em></div></a>	
					</div>
					</c:forEach>	
				</div>
					<!-- <div class="column fl col">
						<a target="_blank"class="infoLink sml">
							<span class="imgWrap">
								<img src="/static/web/img/4.png" class="responsive">
							</span>
							<div class="figbar">
						<em class="vm w99 dib">参加2017年新高考</em><em class="pixel1 vm"></em></div></a>
					</div> 
				</div>  -->
			</div>
		</div>

		<div class="infoLists">
			<div class="container ovh">
				<div class="f-layout clearfix">
					<div class="column col1 fl">
						<div class="colPad">
							<div class="content v2-layout clearfix preloading infoListWrap">
							<div class="contentWrap">
							<c:forEach var="item" items="${moduleList}">
							<div class="column fl">
								<div class="colPad">
									<h3 class="clearfix title">
										<span class="fl s-title toggleTitle">
											${item.name}
											<em class="underLine"></em>	
										</span>
										<a href="/moduleSiteList?moduleId=${item.id}&moduleName=${item.name}" class="link fr more" target="_blank">更多&gt;&gt;</a>
									</h3>
									<ul class="infoList">
										
									</ul>
								</div>
							</div>
							</c:forEach>
							</div>	
							</div>
						</div>
					</div>

					<div class="column col2 fl">
						<div class="colPad r-content">
							<!-- <section class="r-lists">
								<div class="content">
									<h3 class="clearfix title">
										<span class="fl s-title">
											标签分类
											<em class="underLine"></em>	
										</span>
									</h3>
								</div>
								<div class="tagsWrap ovh">
									<div class="tagsList">
									<c:forEach var="list" items="${tagList}">
									<span class="btn btn-primary infoTag" code="${list.code}">${list.name}</span>
									</c:forEach>
									</div>
								</div>
							</section> -->
							<section class="r-lists">
							<div class="content">
								<h3 class="clearfix title">
									<span class="fl s-title">
										热门资讯
										<em class="underLine"></em>	
									</span>
								</h3>
								
								<ul class="timelineList">
									<c:forEach var="list" items="${hotList}">
									   <li class="timeline media">
									   <span class="label fl">
											${list.time}
										</span>
										<div class="media-body"><a href="${list.href}" target="_blank">
											${list.title}
										</a></div>
									   </li>
									</c:forEach>
								</ul>
							</div>
						</section>
						<section class="r-list mt20 mb20">
							<%@ include file = "/partials/_direct.jsp" %>
						</section>
						<section class="mt20 mb20">
							<%@ include file = "/partials/_sidebar.jsp" %>
						</section>
						</div>
					</div>

				</div>
			</div>
		</div>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	
	<script>
		window.__initData__ = ${moduleList};
	</script>

	<script src="/static/web/js/vendors.44849dc1.js"></script><script src="/static/web/js/infoV2.e753a01f.js"></script></body>
</html>