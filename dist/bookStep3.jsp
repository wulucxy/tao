<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.5dd41735.css" rel="stylesheet"><link href="/static/web/css/bookStep3.63683c79.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">

		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<!-- 保存大类属性 -->
		<input type="hidden" name="batch" value="${batch}">

		<div class="container p_case_3">

			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						高考方案定制
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
						<li><a href="#"><em>输入基本信息</em></a></li>
						<li><a href="#"><em>选择志愿信息</em></a></li>
						<li class="current"><a href="#"><em>选择求学专业</em></a></li>
						<li><a href="#"><em>确认提交信息</em></a></li>
					</ul>
				</div>
				

				<div class="preloading formWrap" id="caseFormWrapper">
					<form action="#" onsubmit="return false" autocomplete="off" id="caseForm_3" class="rel contentWrap">
						
						<div class="selectContent clearfix" id="majorSelectWrapper">
							

						</div>
						
						<div class="footerCnt">
							<div class="row btnRow">
							 	<a class="btn btn-positive btn-primary btn-form" href="/box/plan/book_step2">
			                        <em class="subTxt">上一步</em>
			                    </a>
			                    <button class="btn btn-positive btn-form" id="nBtn" type="submit">下一步
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
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/bookStep3.js"></script></body>
</html>