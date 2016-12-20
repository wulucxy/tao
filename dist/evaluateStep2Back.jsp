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
	<link href="/static/web/css/vendors.da0ee6f1.css" rel="stylesheet"><link href="/static/web/css/evaluateStep2Back.f5d17fd4.css" rel="stylesheet"></head>
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
						<li><a href="javascript:;"><em>输入基本信息</em></a></li>
						<li class="current"><a href="javascript:;"><em>选择志愿信息</em></a></li>
						<li><a href="javascript:;"><em>确认提交信息</em></a></li>
					</ul>
				</div>

				<div class="formWrap">
					<form action="#" onsubmit="return false" autocomplete="off" id="assessForm_2" class="rel">
						
						<div class="m-select">
							<div class="bg bg-f1">志愿学校1</div>
							<div class="row inline">
							   <span class="inputWrap rel">
								<input type="text" class="addSchool form-control input dib" placeholder="请选择大学" major="1">
								<a href="javascript:;" class="clear">X</a>
							   </span>
								<a href="javascript:;" class="addMajor btn btn-primary" data-rel="1">
									<em class="vm">添加专业</em>
									<span class="vm">(<em class="count">0</em>/<em class="all">6</em>)</span>
								</a>
							</div>
							<ul class="tagsWrap clearfix showTagList">
							</ul>
							<input type="hidden" name="major1">
						</div>

						<div class="m-select">
							<div class="bg bg-f1">志愿学校2</div>
							<div class="row inline">
							<span class="inputWrap rel">
								<input type="text" class="addSchool form-control input dib" placeholder="请选择大学" major="2">
								<a href="javascript:;" class="clear">X</a>
							</span>
								<a href="javascript:;" class="addMajor btn btn-primary" data-rel="2">
									<em class="vm">添加专业</em>
									<span class="vm">(<em class="count">0</em>/<em class="all">6</em>)</span>
								</a>
							</div>
							<ul class="tagsWrap clearfix showTagList">
								
							</ul>

						</div>

						<div class="m-select">
							<div class="bg bg-f1">志愿学校3</div>
							<div class="row inline">
							<span class="inputWrap rel">
								<input type="text" class="addSchool form-control input dib" placeholder="请选择大学" major="3">
								<a href="javascript:;" class="clear">X</a>
							</span>
								<a href="javascript:;" class="addMajor btn btn-primary" data-rel="3">
									<em class="vm">添加专业</em>
									<span class="vm">(<em class="count">0</em>/<em class="all">6</em>)</span>
								</a>
							</div>
							<ul class="tagsWrap clearfix showTagList">
							</ul>
							<input type="hidden" name="major3">
						</div>

						<div class="m-select">
							<div class="bg bg-f1">志愿学校4</div>
							<div class="row inline">
							<span class="inputWrap rel">
								<input type="text" class="addSchool form-control input dib" placeholder="请选择大学" major="4">
								<a href="javascript:;" class="clear">X</a>
							</span>
								<a href="javascript:;" class="addMajor btn btn-primary" data-rel="4">
									<em class="vm">添加专业</em>
									<span class="vm">(<em class="count">0</em>/<em class="all">6</em>)</span>
								</a>
							</div>
							<ul class="tagsWrap clearfix showTagList">
								
							</ul>
							<input type="hidden" name="major4">
						</div>

						<div class="m-select">
							<div class="bg bg-f1">志愿学校5</div>
							<div class="row inline">
							<span class="inputWrap rel">
								<input type="text" class="addSchool form-control input dib" placeholder="请选择大学" major="5">
								<a href="javascript:;" class="clear">X</a>
							</span>
								<a href="javascript:;" class="addMajor btn btn-primary" data-rel="5">
									<em class="vm">添加专业</em>
									<span class="vm">(<em class="count">0</em>/<em class="all">6</em>)</span>
								</a>
							</div>
							<ul class="tagsWrap clearfix showTagList">
							</ul>
							<input type="hidden" name="major5">
						</div>
						
						<div class="footerCnt">
							<p id="errTxt" class="errTxt"></p>
							<div class="row btnRow">
								<a class="btn btn-primary btn-form" href="/box/plan/evaluate_step1">
			                        <em class="subTxt">上一步</em>
			                    </a>
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
		
		<pre name="zhiyuanList">${zhiyuanList}</pre>
		<pre name="zhiyuanList_blank">[{"code":"","name":"","type":1},{"code":"","name":"","type":2},{"code":"","name":"","type":3},{"code":"","name":"","type":4},{"code":"","name":"","type":5}]</pre>
		<pre name="selected">${selected}</pre>
	<pre name="selected_blank">[{"type" : 1,"list" : []},{ "type" : 2,"list" : []},{"type" : 3,"list" : []},{ "type" : 4,"list" : []},{"type" : 5,"list" : []}]</pre>

	<script src="/static/web/js/vendors.b543b1f9.js"></script><script src="/static/web/js/evaluateStep2Back.290b3651.js"></script></body>
</html>