<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.ac3d5b1a.css" rel="stylesheet"><link href="/static/web/css/bookStep2.3b82619d.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
		<div class="container p_case_2">

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
						<li><a href="javascript:;"><em>输入基本信息</em></a></li>
						<li class="current"><a href="javascript:;"><em>选择志愿信息</em></a></li>
						<li><a href="javascript:;"><em>选择求学专业</em></a></li>
						<li><a href="javascript:;"><em>确认提交信息</em></a></li>
					</ul>
				</div>

				<div class="formWrap">
					<form action="javascript:;" onsubmit="return false" autocomplete="off" id="caseForm_1" class="rel">
						
						<div class="selectContent clearfix" id="citySelectContainer">
							<div class="column col1 fl">
								<h4>请选择省份</h4>
								<div class="selectWrap">
									<ul class="prov">
									</ul>
								</div>
							</div>
							<div class="column col2 fl">
								<h4>请选择城市</h4>
								<div class="selectWrap">
									<ul class="city">
								</ul>
								</div>
							</div>
							<div class="column col3 fl">
								<h4>已选</h4>
								<ul class="tagsWrap clearfix" id="tagsWrap">
									
								</ul>
							</div>

						</div>
						
						<div class="footerCnt">
							<p id="errTxt" class="errTxt"></p>
							<div class="row btnRow">
							 	<a class="btn btn-positive btn-primary btn-form">
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
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/bookStep2.js"></script></body>
</html>