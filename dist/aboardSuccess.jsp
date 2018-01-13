<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%> 
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<%@ include file = "/partials/_meta.jsp" %>
	<title>淘志愿</title>
<link href="/static/web/css/vendors.f2b77075.css" rel="stylesheet"><link href="/static/web/css/aboardSuccess.75f3607e.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">

		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<!-- 保存provinceName属性 -->
		<input type="hidden" name="provinceName" value="${user.province.name}">

		<!-- 保存userName属性 -->
		<input type="hidden" name="userName" value="${user.userName}">

		<div class="container aboard">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						留学方案定制
						<em class="underLine"></em>	
					</span>
					<div class="small">
						（了解更多请拨打施强国际服务热线：400-018-0008）
					</div>
				</h3>

				<div class="bg bg-blue mb20 lh42 tc">结&nbsp;&nbsp;果</div>
				<div class="formWrap">
					
					<section class="caseSection">
					
				<c:choose>	
					<c:when test="${fn:length(collegeList) == 0 }">
							<div class="list-group-item f18 tc" >
					    	未获取到留学方案，请检查信息后重新提交
						   	</div>
					</c:when>
					<c:otherwise>
					<c:forEach var="list" items="${collegeList}" varStatus="loop">
						<div class="media detailContent">
						
							<span class="fl index">${loop.index+1}</span>
							<div class="media-body">
								<h4 class="name badgeRow">
									<em class="badgetitle vm">${list.collegeName}</em>
								</h4>
								<div class="detail">
									<c:forEach var="major" items="${list.majorList}">
									<span class="btn btn-default field">
										${major}
									</span>
									</c:forEach>
								</div>
							</div>
						</div>	
					</c:forEach>
					</c:otherwise>
				</c:choose>
					</section>
					
				</div>

			</div>
		</div>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.0809b0e9.js"></script><script src="/static/web/js/aboardSuccess.291e8ae3.js"></script></body>
</html>