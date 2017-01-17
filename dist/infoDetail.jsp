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
<link href="/static/web/css/vendors.95838b90.css" rel="stylesheet"><link href="/static/web/css/infoDetail.ed6d1048.css" rel="stylesheet"></head>
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
							<%@ include file = "/partials/_article.jsp" %>
							<div class="thirdParts">
								<div class="procons tc">

									<c:choose>
									    <c:when test="${up == 1}">
									   	<a href="javascript:;" class="btn btn-primary up" btn-type="${up}">
											<i class="taoIcon icon-pro"></i>
											<em class="vm">支持(<span id="upCount">${upCount}</span>)</em>
										</a>
										</c:when>
										<c:otherwise>
										<a href="javascript:;" class="btn btn-negative up" btn-type="${up}">
											<i class="taoIcon icon-pro"></i>
											<em class="vm">支持(<span id="upCount">${upCount}</span>)</em>
										</a>
										</c:otherwise>
									</c:choose>
									
									<c:choose>
									    <c:when test="${down == 1}">
									   	<a href="javascript:;" class="btn btn-primary down" btn-type="${down}">
											<i class="taoIcon icon-con"></i>
											<em class="vm">反对(<span id="downCount">${downCount}</span>)</em>
										</a>
										</c:when>
										<c:otherwise>
										<a href="javascript:;" class="btn btn-negative down" btn-type="${down}">
											<i class="taoIcon icon-con"></i>
											<em class="vm">反对(<span id="downCount">${downCount}</span>)</em>
										</a>
										</c:otherwise>
									</c:choose>
									
									
									<a href="javascript:;" class="btn btn-negative btn-fav last" data-favtype="3">
										<i class="taoIcon favIcon"></i>
										<em class="vm unfavedTxt">收藏(<span id="likeCount">${likeCount}</span>)</em>
									</a>
								</div>
								
								<div class="shareComponents tc">
									<%@ include file = "/partials/_share.jsp" %>
								</div>
								
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

						<section class="directs mt20 mb20">
							<div class="">
								<ul>
							<c:forEach var="list" items="${adList}">
							<li>
							<c:choose>
							    <c:when test="${list.href != null}">
							   		<a href="${list.href}" target="_blank" >
							   			<img src="${list.imgUrl}" >
							   		</a>
								</c:when>
								<c:otherwise>
									<a href="javascript:;" >
										<img src="${list.imgUrl}" >
									</a>
								</c:otherwise>
							</c:choose>
							</li>
							</c:forEach>
						</ul>
							</div>
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

	<script src="/static/web/js/vendors.8a18fe91.js"></script><script src="/static/web/js/infoDetail.32be771b.js"></script></body>
</html>