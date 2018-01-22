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
<link href="/static/web/css/vendors.f2b77075.css" rel="stylesheet"><link href="/static/web/css/fillPolicDetail.274331c5.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<!-- 保存province属性 -->
		<input type="hidden" name="newsId" value="${newsId}">

		<!-- favorId,如果有的话 -->
		<input type="hidden" name="favorId" value="${favorId}">

		<div class="container ovh">
			<div class="f-layout clearfix">
				<div class="column c-66 fl">
					<div class="colPad">
						<div class="articleWrap">
							<h3>填报政策：${title}</h3>
							<p class="g6 moment">${moment}</p>
							<div class="article-content">
								${context}
							</div>
						</div>
					</div>
				</div>
				<div class="column c-33 fl">
					<div class="colPad r-content">
						<section class="hot">
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

						<section class="mt20 mb20">
							<%@ include file = "/partials/_direct.jsp" %>
						</section>

					</div>
				</div>
			</div>
		</div>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>
	
	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>

	<script src="/static/web/js/vendors.b89c0e77.js"></script><script src="/static/web/js/fillPolicDetail.93fa9bbe.js"></script></body>
</html>