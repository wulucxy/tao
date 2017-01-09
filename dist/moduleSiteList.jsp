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
<link href="/static/web/css/vendors.95838b90.css" rel="stylesheet"><link href="/static/web/css/moduleSiteList.a366556e.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<div class="infoLists">
			<div class="container ovh">
				<div class="f-layout clearfix">
					<div class="column col1 fl">
						<div class="colPad preloading">
							<div class="content contentWrap">
								<h3 class="clearfix title">
									<span class="fl s-title" id="toggleTitle">
										<em id="moduleTitle"></em>
										<em class="underLine"></em>	
									</span>
								</h3>
								<div class="preloading infoListWrap">
								<ul class="infoList load-more-list contentWrap">
									
								</ul>
								</div>
								<!-- 加载更多模块 -->
								<%@ include file = "/partials/_loadMore.jsp" %>
							</div>
						</div>
					</div>

					<div class="column col2 fl">
						<div class="colPad r-content">
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
											${list.fullTitle}
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
	<script type="text/javascript" src="/static/web/js/vendors.59cee7d2.js"></script><script type="text/javascript" src="/static/web/js/moduleSiteList.fef0315c.js"></script></body>
</html>