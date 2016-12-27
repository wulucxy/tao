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
<link href="/static/web/css/vendors.95838b90.css" rel="stylesheet"><link href="/static/web/css/evaluateResultV2.14a67a7d.css" rel="stylesheet"></head>
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
						高考志愿评估
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
					
					<div class="wellWrapper tabs" id="bookResultTab">
						<nav class="clearfix">                
				                 <ul>
									<li  class="tab-item current"><a href="javascript:;">保守</a></li>
									<li  class="tab-item"><a href="javascript:;">平稳</a></li>
									<li  class="tab-item"><a href="javascript:;">冲刺</a></li>
									<li  class="tab-item"><a href="javascript:;">不建议</a></li>
								</ul>
				        </nav>
						
						<div class="content-wrap" id="evaluateContentWrap">
							<section class="tab-box wish0Wrap current detailContent">
							</section>
							<section class="tab-box wish1Wrap detailContent">
							</section>
							<section class="tab-box wish2Wrap detailContent">
							</section>
							<section class="tab-box wish3Wrap detailContent">
							</section>
						</div>
					</div>
				</div>

			</div>
		</div>

		<pre name="courseType">${courseType}</pre>
		<pre name="batch">${batch}</pre>
		<pre name="score">${score}</pre>
		<pre name="place">${place}</pre>

		<pre name="wishesString">${wishesString}</pre>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.016ea447.js"></script><script src="/static/web/js/evaluateResultV2.9c90c1db.js"></script></body>
</html>