<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%> 
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.368b14c7.css" rel="stylesheet"><link href="/static/web/css/collegeFaq.34bc3415.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
		<div class="container faqWrapper db">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						高校问答
						<em class="underLine"></em>	
					</span>
				</h3>

				<div class="formWrap clearfix">
					<div class="column col1 fl">
						
						<section class="faqList now">
						<h4 class="blue">今日问答</h4>
							<div class="list-group">
						
					<c:choose>	
						<c:when test="${fn:length(today) == 0 }">
							<a href="javascript:;" class="list-group-item" >
					    	暂无数据
						   	</a>
						</c:when>
						<c:otherwise>
							<c:forEach var="list" items="${today}">
							<c:choose>
							    <c:when test="${list.status == 1}">
							   	<a href="/box/college_faq/${list.college.collegeId}?on=1" target="_blank" class="list-group-item active cp" >
							   	<i class="fr taoIcon icon-right"></i>
						    	<span class="fl collegeName">${list.college.collegeName}</span>
						    	<span class="body orange">${list.describtion}</span>
							   	</a>
								</c:when>
								<c:when test="${list.status == 3}">
							   	<a href="/box/college_faq/${list.college.collegeId}" target="_blank" class="list-group-item cp" >
							   	<i class="fr taoIcon icon-right"></i>
						    	<span class="fl collegeName">${list.college.collegeName}</span>
						    	<span class="body orange">${list.describtion}</span>
							   	</a>
								</c:when>
								<c:otherwise>
								<a href="javascript:;" class="list-group-item" >
							   	<i class="fr taoIcon icon-right"></i>
						    	<span class="fl collegeName">${list.college.collegeName}</span>
						    	<span class="body orange">${list.describtion}</span>
							   	</a>
								</c:otherwise>
						   </c:choose>
							</c:forEach>
						</c:otherwise>
					</c:choose>
						</div>
						</section>

						<section class="faqList pre">
						<h4 class="blue">问答预告</h4>
							<div class="list-group">
							<c:choose>	
						<c:when test="${fn:length(forecast) == 0 }">
							<a href="javascript:;" class="list-group-item" >
					    	暂无数据
						   	</a>
						</c:when>
						<c:otherwise>
							<c:forEach var="list" items="${forecast}">
							<a href="javascript:;" class="list-group-item clearfix">
							    <span class="fl collegeName">${list.college.collegeName}</span>
							    <span class="fr orange">${list.describtion}</span>
						  	</a>
							</c:forEach>
						</c:otherwise>
					</c:choose>
						</div>
						</section>

						<section class="faqList history">
						<h4 class="blue more">历史问答
							<a href="/box/college_faq/history" class="fr" target="_blank">更多>></a>
						</h4>
							<div class="list-group">
							<c:choose>	
						<c:when test="${fn:length(history) == 0 }">
							<a href="javascript:;" class="list-group-item" >
					    	暂无数据
						   	</a>
						</c:when>
						<c:otherwise>
							<c:forEach var="list" items="${history}">
							<a href="/box/college_faq/${list.college.collegeId}" target="_blank" class="list-group-item clearfix cp">
						    <div class="fl">
						    	<p class="collegeName">${list.college.collegeName}</p>
						    	<p class="f13">总共&nbsp;${list.count}&nbsp;条回答</p>
						    </div>
						    <i class="fr taoIcon icon-right"></i>
						  </a>
							</c:forEach>
						</c:otherwise>
					</c:choose>
						</div>
						</section>

					</div>
					<div class="col2 fr">
						<div class="directs">
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
					</div>
				</div>
			</div>
		</div>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/collegeFaq.js"></script></body>
</html>