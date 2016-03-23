<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.6be66a7c.css" rel="stylesheet"><link href="/static/web/css/evaluateResult.a6a9f554.css" rel="stylesheet"></head>
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

		<div class="container p_case_4">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						高考志愿定制
						<em class="underLine"></em>	
					</span>
					<div class="fr f16 g6">
						<a class="setting trigger" data-trigger="info">
							<i class="settingIcon icon-setting"></i><em class="vm">我的信息</em>
						</a>
					</div>
				</h3>

				<div class="bg bg-blue mb20 lh42 tc">结&nbsp;&nbsp;果</div>
				<div class="formWrap">
					
					<section class="caseSection">

					<c:forEach var="list" items="${wishes}" varStatus="loop">
						<div class="media detailContent">
						<a href="javascript:;" class="taoIcon toggleIcon toggle"></a>
							<span class="fl index">${loop.index+1}</span>
							<div class="media-body">
								<h4 class="name badgeRow">
									<em class="badgetitle vm">${list.collegeName}</em>
									<c:forEach var="featurelist" items="${list.feature}">
									 <c:choose>
									 	<c:when test="${featurelist.type == 1}">
									   		<span class="badge green">${featurelist.name}</span>
										</c:when>
										<c:when test="${featurelist.type == 2}">
									   		<span class="badge red">${featurelist.name}</span>
										</c:when>
									 	<c:otherwise>
											<span class="badge">${featurelist.name}</span>
										</c:otherwise>
									 </c:choose>
									</c:forEach>
								</h4>
								<div class="detail">
		<span class="label">院校属地：</span><span class="field">${list.city}</span>
		<span class="label">院校分类：</span><span class="field">${list.type}</span>
		<span class="label">院校性质：</span><span class="field">${list.ownerType}</span>
		<span class="label">院校层次：</span><span class="field">${list.level}</span>
								</div>
								<div class="tableWrap">
									<table class="table table-bordered text-center">
										<tbody>
											<tr>
												<td>专业名称</td>
												<td>所属科类</td>
												<td>上一年录取平均分</td>
												<td>填报建议</td>
											</tr>
											<c:forEach var="major" items="${list.majors}">
											<tr>
												<td>${major.majorName}</td>
												<td>${major.fCategory}</td>
												<td>${major.average}</td>
												<td>
									<c:choose>
									 	<c:when test="${major.assessment == '-2'}">
									   		<span class="red">不建议填报</span>
										</c:when>
										<c:when test="${major.assessment == '-1'}">
									   		<span class="green">建议志愿保底</span>
										</c:when>
										<c:when test="${major.assessment == '0'}">
									   		<span class="green">建议志愿平稳</span>
										</c:when>
									 	<c:otherwise>
											<span class="green">建议志愿冲刺</span>
										</c:otherwise>
									 </c:choose>
												</td>
											</tr>
											</c:forEach>
										</tbody>
									</table>
								</div>
							</div>
						</div>	
					</c:forEach>
					</section>
					
				</div>

			</div>
		</div>

		
		<pre name="courseType">${courseType}</pre>
		<pre name="batch">${batch}</pre>
		<pre name="score">${score}</pre>
		<pre name="place">${place}</pre>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/evaluateResult.js"></script></body>
</html>