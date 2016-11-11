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
</head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<div class="container">
			<div class="container">
				<div class="content">
					<h3 class="clearfix title">
						<span class="fl s-title">
							升学规划专家预约
							<em class="underLine"></em>	
						</span>
					</h3>
					<div class="formWrap clearfix">
						<div class="column col1 fl">

							<form action="#" id="educationPlanForm">
								<div class="row inline">
									<label for="province" class="control-label column col1 fl">
										<em class="vm">高考所在地：</em>
									</label>
									<div class="col2 inputWrap rel">
										<div class="fieldWrap">
											<input type="text" class="input form-control" id="name" name="province" required value='name'>
										</div>
									</div>
								</div>

								<div class="row inline">
									<label for="province" class="control-label column col1 fl">
										<em class="vm">高考所在地：</em>
									</label>
									<div class="col2 inputWrap rel">
										<div class="fieldWrap">
											<input type="text" class="input form-control" id="name" name="province" required value='name'>
										</div>
									</div>
								</div>

							</form>

						</div>
						<div class="column col2 fr">
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
		</div>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/educationPlan.js"></script></body>
</html>