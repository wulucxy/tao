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
<link href="/static/web/css/vendors.0cd2f40b.css" rel="stylesheet"><link href="/static/web/css/createAppointment.bf615b08.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>

	<!-- 保存orderId属性 -->
	<input type="hidden" name="orderId" value="${orderId}">
	
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

							<form action="javascript:;" id="educationPlanForm" onsubmit="return false;">
								<div class="row inputWrapRow clearfix educationRow">
									<div class="row inline fl">
										<label for="name" class="control-label column col1 fl">
											<em class="vm">姓名：</em>
										</label>
										<div class="col2 inputWrap rel">
											<div class="fieldWrap">
												<input type="text" class="input form-control" id="name" name="name" required  placeholder='请输入姓名'>
											</div>
										</div>
										<div class="errInfo">
										<span class="p-error-empty">姓名不能为空</span>
										</div>
									</div>

									<div class="row inline fl">
										<label for="mobile" class="control-label column col1 fl">
											<em class="vm">手机：</em>
										</label>
										<div class="col2 inputWrap rel">
											<div class="fieldWrap">
												<input type="tel" class="input form-control" id="mobile" name="mobile" required placeholder='请输入手机号' maxlength="11">
											</div>
										</div>
										<div class="errInfo">
										<span class="p-error">手机号格式错误，请重新填写</span>
										<span class="p-error-empty">手机号不能为空</span>
										</div>
									</div>

									<div class="row inline fl">
										<label for="mobile" class="control-label column col1 fl">
											<em class="vm">所在城市：</em>
										</label>
										<div class="col2 selectWrap rel">
											<select name="city" id="city" class="form-control">
												<c:forEach var="list" items="${areaList}">
												<option value="${list.code}">${list.name}</option>
												</c:forEach>
											</select>
										</div>
										<div class="errInfo"></div>
									</div>
								</div>

								<div class="serviceWrap media">
									<span class="fl service_title">选择服务</span>
									<div class="serviceList media-body">
										
					<c:forEach var="list" items="${appointmentTypeList}" varStatus="status">
						<div class="serviceItem clearfix">
							<a href="${list.content}" class="fr link" target="_blank">详情</a>
							<div class="serviceDetail clearfix">
								<label for="appointmentType_${list.type}" class="label_radio inline fl">
									<em class="checkmark"></em>
									<c:choose>
									    <c:when test="${status.index == 0}">
									   	<input type="radio" class="input form-control" id="appointmentType_${list.type}" name="appointmentType" value="${list.type}" required checked>
										</c:when>
										<c:otherwise>
											<input type="radio" class="input form-control" id="appointmentType_${list.type}" name="appointmentType" value="${list.type}" required>
										</c:otherwise>
									</c:choose>
									<em class="service_name">${list.name}
										<c:choose>
									    <c:when test="${list.typeRemarks != null && list.typeRemarks != '' }">
									   		<em class="c7">（${list.typeRemarks}）</em>
										</c:when>
										<c:otherwise>
											
										</c:otherwise>
									   </c:choose>
									</em>
								</label>
								<span class="fr price orange">¥${list.price/100}元</span>
							</div>
						</div>
					</c:forEach>
									</div>
								</div>
								
								<div class="footerCnt">
									<p id="errTxt" class="errTxt"></p>
									<div class="btnRow">
										<a href="javascript:;" class="btn btn-positive btn-form" type="submit" id="submitBtn">
											申请
										</a>
									</div>
									<a href="/coupon/share" target="_blank" class="inviteLink" >
										<img src="/static/web/img/invite.png" class="responsive">
									</a>
								</div>

							</form>

						</div>
						<div class="column col2 fr">
							<!-- 广告 -->
							<%@ include file = "/partials/_direct.jsp" %>
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
	<script src="/static/web/js/vendors.368a60bb.js"></script><script src="/static/web/js/createAppointment.331db1d7.js"></script></body>
</html>