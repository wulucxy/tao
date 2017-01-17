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
	<link href="/static/web/css/vendors.95838b90.css" rel="stylesheet"><link href="/static/web/css/completeInfo.b219f4d1.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%--  <%@ include file = "/partials/_header.jsp" %> --%>
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 保存province属性 -->
	<input type="hidden" name="province" value="${user.province.code}">

	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<!-- 保存mobile属性 -->
		<input type="hidden" name="mobile" value="${user.mobile}">

		<div class="container">

			<div class="content">
				<h3 class="clearfix title neeRow">
					<span class="fl s-title">
						<span class="">完善信息</span>
						<em class="f14 blue">（为了更好地为您服务，请先完善信息！）</em>
						<em class="underLine"></em>
					</span>
				</h3>

				<div class="formWrap">
					<form action="#" onsubmit="return false" autocomplete="off" id="myInfoForm" class="rel">
						<div class="row clearfix">
							<label for="name" class="control-label column col1 fl">
								<i class="icon-location"></i>
								<em class="vm">姓名：</em></label>
							<div class="col2 inputWrap rel">
								<div class="fieldWrap">
									<input type="text" class="input form-control" id="name" name="name" value="${name}" required placeholder="请输入姓名">
								</div>
							</div>
							<div class="errInfo">
								<span class="p-error-empty">姓名不能为空</span>
							 </div>
						</div>
						
						
						<div class="row clearfix">
							<label for="sex" class="control-label column col1 fl">
								<i class="icon-location"></i>
								<em class="vm">性别：</em></label>
							<div class="col2 selectWrap rel">
								<div class="fieldWrap">
									<select class="form-control" name="sex" readonly required>
										<c:choose>
										    <c:when test="${gender == 1}">
										   		<option value="1" selected>男</option>
										   		<option value="2">女</option>
											</c:when>
											<c:when test="${gender == 2}">
												<option value="1">男</option>
										   		<option value="2" selected>女</option>
											</c:when>
											<c:otherwise>
												<option value="">请选择</option>
												<option value="1">男</option>
												<option value="2">女</option>
											</c:otherwise>
										</c:choose>
									</select>
								</div>
							</div>
							<div class="errInfo">
								<span class="p-error-empty">性别不能为空</span>
							 </div>
						</div>


						<div class="row clearfix">
							<label for="highSchool" class="control-label column col1 fl">
								<i class="icon-location"></i>
								<em class="vm">高中：</em></label>
							<div class="col2 inputWrap rel">
								<div class="fieldWrap">
									<input type="text" class="input form-control addSchool" id="highSchool" name="highSchool" required placeholder="请选择高中" value="${ highSchoolName }" code="${ highSchoolCode }">
								</div>
							</div>
							<div class="errInfo">
								<span class="p-error-empty">高中不能为空</span>
							 </div>
						</div>

						<div class="row clearfix">
							<label for="highYear" class="control-label column col1 fl">
								<i class="icon-location"></i>
								<em class="vm">入学年份：</em></label>
							<div class="col2 selectWrap rel">
								<div class="fieldWrap">
									
									<c:choose>
									    <c:when test="${highSchoolEntryYear != 0}">
									   		<input type="hidden" name="highYearInput" value=${highSchoolEntryYear}>
									   		<select class="form-control" name="highYear" required>
											</select>
										</c:when>
										<c:otherwise>
											<select class="form-control" name="highYear" required>
											</select>
										</c:otherwise>
									</c:choose>
								</div>
							</div>
							<div class="errInfo">
								<span class="p-error-empty">入学年份必选</span>
							 </div>
						</div>
						
						<div class="footerCnt">
							<p id="errTxt" class="errTxt"></p>

							<div class="row btnRow tc">
			                    <button type="submit" class="btn btn-positive btn-form" id="verifyBtn">
			                        <em class="subTxt">提&nbsp;交</em>
			                    </button>
			      			</div>

						</div>

					</form>
				</div>

			</div>
		</div>

		<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
		<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.8a18fe91.js"></script><script src="/static/web/js/completeInfo.3bfb84ab.js"></script></body>
</html>