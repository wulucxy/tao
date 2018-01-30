<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<%@ include file = "/partials/_meta.jsp" %>
	<title>高考志愿</title>
	<link href="/static/web/css/vendors.f2b77075.css" rel="stylesheet"><link href="/static/web/css/evaluateStep2.d2806328.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%--  <%@ include file = "/partials/_header.jsp" %> --%>
	<%@ include file = "/partials/_header.jsp" %>

	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<!-- 文理科 -->
		<input type="hidden" name="courseType" value="${courseType}">

		<!-- 文理科 -->
		<input type="hidden" name="batch" value="${batch}">

		<!-- 更换志愿方案 -->
		<input type="hidden" name="isChange" value="${isChange}">

		<div class="container p_assess">

			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						高考志愿评估
						<em class="underLine"></em>	
					</span>
					<div class="fr f16 g6">
						<a class="setting trigger" data-trigger="detail">
							<i class="settingIcon icon-setting"></i><em class="vm">功能说明</em>
						</a>
						<a class="trigger" data-trigger="questions">
							<i class="settingIcon icon-question"></i><em class="vm">常见问题</em>
						</a>
					</div>
				</h3>

				<div class="breadcrumb">
					<ul class="clearfix">
						<li class="current"><a href="javascript:;"><em>选择志愿信息</em></a></li>
						<li><a href="javascript:;"><em>确认提交信息</em></a></li>
					</ul>
				</div>

				<div class="formWrap">
					<form action="javascript:;" onsubmit="return false" autocomplete="off" id="assessForm_2" class="rel">
						
						<div class="actionContent tc">
							<div class="upRow">
								<a href="javascript:;" class="btn btn-primary mr32" id="js-addSchool">选择学校</a>
								<a href="javascript:;" class="btn btn-primary disabled" id="js-addMajor">选择专业</a>
							</div>
							<div class="downRow">
								<a href="javascript:;" class="btn btn-positive disabled" id="js-addNext">增&ensp;&ensp;加</a>
							</div>
						</div>

						<div class="wux-divider" id="divider">
						</div>
						
						<div class="panelWrap ovh">
																					
						</div>

						<div class="footerCnt">
							<p id="errTxt" class="errTxt"></p>
							<div class="row btnRow">
								<!-- <a class="btn btn-primary btn-form" href="/box/plan/evaluate_step1">
			                        <em class="subTxt">上一步</em>
			                    </a> -->
			                    <button type="submit" class="btn btn-positive btn-form" id="verifyBtn">
			                        <em class="subTxt">下一步</em>
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

	<c:forEach var="wish" items="${wishes}">
		<input type="hidden" class="wishInput" 
				collegeid="${wish.collegeId}" 
				collegename="${wish.collegeName}" 
				majorid="${wish.majorId}" 
				majorname="${wish.majorName}" 
				field="${wish.field}"
				universitymajorid="${wish.universityMajorId}"
		>
	</c:forEach>
	
	<c:forEach var="subject" items="${subjects}">
		<input type="hidden" class="subjectInput" name="${subject.name}" value="${subject.code}">
	</c:forEach>

	<script src="/static/web/js/vendors.4230c1a2.js"></script><script src="/static/web/js/evaluateStep2.561d1845.js"></script></body>
</html>