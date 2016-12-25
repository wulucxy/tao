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
	<link href="/static/web/css/vendors.42c2d263.css" rel="stylesheet"><link href="/static/web/css/evaluateStep3.b89535d8.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%--  <%@ include file = "/partials/_header.jsp" %> --%>
	<%@ include file = "/partials/_header.jsp" %>

	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<!-- 保存mobile属性 -->
		<input type="hidden" name="mobile" value="${user.mobile}">

		<!-- 保存courseType属性 -->
		<input type="hidden" name="courseType" value="${courseType}">
		
		<!-- 保存score属性 -->
		<input type="hidden" name="score" value="${score}">

		<!-- 保存place属性 -->
		<input type="hidden" name="place" value="${place}">

		<!-- 保存batch属性 -->
		<input type="hidden" name="batch" value="${batch}">
	
		<div class="container p_assess_3">

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
						<li><a href="javascript:;"><em>输入基本信息</em></a></li>
						<li><a href="javascript:;"><em>选择志愿信息</em></a></li>
						<li class="current"><a href="javascript:;"><em>确认提交信息</em></a></li>
					</ul>
				</div>

				<div class="formWrap">
					<form action="#" onsubmit="return false" autocomplete="off" id="assessForm_3" class="rel">
					<section class="p1">
							<div class="row clearfix">
								<label for="province" class="control-label column col1 fl">
									<i class="icon-location"></i>
									<em class="vm">高考所在地：</em></label>
								<div class="col2 inputWrap rel">
									<div class="fieldWrap">
										<span class="onlyTxt">${user.province.name}</span>
									</div>
								</div>
							</div>
									
							<div class="row clearfix inline">
								<label for="score" class="control-label column col1 fl">
									<i class="icon-location icon-fenshu"></i>
									<em class="vm">高考分数：</em></label>
								<div class="col2 inputWrap rel">
									<span class="fieldWrap">
										<span class="onlyTxt">${score}分</span>
									</span>
								</div>
							</div>

					<div class="row clearfix">
					  <label for="subjects" class="control-label column col1 fl">
					    <i class="icon-location icon-book"></i>
					    <em class="vm">选考科目：</em></label>
					  <div class="col2 inputWrap rel">
					    <div class="fieldWrap">
						   	
						<c:forEach var="list" items="${subjects}" varStatus="loop">
					      <label for="subjectId_${list.code}" class="label_check inline">
					      <em class="icon-radio"></em>
					      <input type="checkbox" class="input form-control" id="subjectId_${list.code}" subjectname="${list.name}" name="subjectId" value="${list.code}" disabled checked>
					      <em class="vm">${list.name}</em>
					      </label>
					    </c:forEach>

					    </div>
					  </div>
					</div>
						</section>

			<section class="p2">
						<div class="f15 g3 mb20">志愿信息：</div>
			<div class="panelWrap ovh">
						<c:forEach var="list" items="${wishes}" varStatus="loop">
				<div class="panel" collegename="${list.collegeName}" collegeid="${ list.collegeId}" majorname="${list.majorName}" majorid="${list.majorId}" >
					<div class="panel-hd">
						<i class="icon icon-close fr panel-close"></i>
						<div class="collegeName">${list.collegeName}</div>
					</div>
					<div class="panel-bd">${list.majorName}
				 		<c:if test="${list.field != null and list.field != ''}" >(${list.field}方向)</c:if>
					</div>
				</div>																
						</c:forEach>
			</div>
		</section>
			
						<div class="footerCnt">
							<p id="errTxt" class="errTxt"></p>
							
							<div class="row btnRow">
							 	<a class="btn btn-primary btn-form" href="/box/plan/evaluate_step2">返回修改
			                    </a>
			                    <button type="submit" class="btn btn-positive btn-form" id="verifyBtn">提交
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
		>
	</c:forEach>
	
	<c:forEach var="subject" items="${subjects}">
		<input type="hidden" class="subjectInput" name="${subject.name}" value="${subject.code}">
	</c:forEach>

	<script src="/static/web/js/vendors.ea70127b.js"></script><script src="/static/web/js/evaluateStep3.06c978b2.js"></script></body>
</html>