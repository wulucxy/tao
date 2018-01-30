<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.f2b77075.css" rel="stylesheet"><link href="/static/web/css/recommendUni.cfa18b63.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
	<div class="container ovh rel recWrap">
		<div class="bannerShow bannerLoading" id="bannerShow">
			 <ul id="bannerList" class="bannerList clearfix">
				
				<c:forEach var="banner" items="${bannerList}">
				   <li class="picSlide" data-pic = "${banner.imgUrl}" >
				   <c:choose>
				    <c:when test="${banner.href != null}">
				   		<a href="${banner.href}" target="_blank" >&nbsp;</a>
					</c:when>
					<c:otherwise>
						<a href="javascript:;" >&nbsp;</a>
					</c:otherwise>
				   </c:choose>
				   </li>
				</c:forEach>
			 </ul>
		</div>
		
		<c:forEach var="list" items="${recommendList}">
		<div class="content collegeListWrap">
			<h3 class="clearfix title">
				<span class="fl s-title">${list.title}
					<em class="underLine"></em>
				</span>
			</h3>
			<div class="collegeWrap container ovh">
		<ul class="collegeList clearfix">
				<c:forEach var="college" items="${list.uniList}">
				<li class="college" title="${college.name}">
				   		<a href="${college.href}" target="_blank">
							<img src="${college.imgUrl}" class="responsive">
						</a>
				</li>
				</c:forEach>
			</ul>
		</div>
		</div>
		</c:forEach>

	</div>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.4230c1a2.js"></script><script src="/static/web/js/recommendUni.0329732d.js"></script></body>
</html>