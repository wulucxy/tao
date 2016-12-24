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
<link href="/static/web/css/vendors.da0ee6f1.css" rel="stylesheet"><link href="/static/web/css/aboardData.560ea420.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<!-- 保存userId属性 -->
		<input type="hidden" name="userId" value="${user.userId}">

		<div class="container dbWrapper db">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						海外院校库
						<em class="underLine"></em>	
					</span>
				</h3>

				<div class="formWrap clearfix">
					<div class="column col1 fl">
						<div class="s-search">
							<div class="input-group rel clearfix">

					          <input type="text" class="form-control fl" placeholder="请输入院校名称" name="school_name_key">
					          <span class="input-group-btn">
					            <button class="btn btn-default btn-search" type="button">
					            	<i class="iconList icon-search"></i>
					            </button>
					          </span>
					        </div>
				        </div>
						
						<div class="m-nav clearfix college">
							<div class="crumb clearfix">
								<a href="javascript:;" class="fr btn btn-default" data-action="clearAll">清空所有</a>
								<span class="cat-text fl">已选择：</span>
								<span class="tagsWrap">
								</span>
							</div>
							
							<div class="row first expand-mode countryRow">
								<div class="foot">
									<a href="javascript:;" class="btn btn-default show-less" data-action="toggle">
										<em class="vm">收起</em>
										<span class="taoIcon btn-arrow-up vm"></span>
									</a>
									<a href="javascript:;" class="btn btn-default show-more" data-action="toggle">
										<em class="vm">更多</em>
										<span class="taoIcon btn-arrow-down vm"></span>
									</a>
								</div>
								
								<div class="body media">
									<!-- <a class="fl item" href="javascript:;" data-action="add" data-value="city:">不限</a> -->
									<div class="media-body">
										<div class="itemLists">
										<a href="javascript:;" class="item" data-action="add" data-value="country:US">美国</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:AT">奥地利</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:AU">澳大利亚</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:CA">加拿大</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:CH">瑞士</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:DE">德国</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:ES">西班牙</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:FR">法国</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:GB">英国</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:GR">希腊</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:HG">港英</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:HK">香港</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:IE">爱尔兰</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:IN">印度</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:IT">意大利</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:JP">日本</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:KR">韩国</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:MY">马来西亚</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:NL">荷兰</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:NZ">新西兰</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:PL">波兰</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:RU">俄罗斯</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:SE">瑞典</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:SG">新加坡</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:TH">泰国</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:UA">乌克兰</a>
										<a href="javascript:;" class="item" data-action="add" data-value="country:UG">乌干达</a>
										
										</div>
									</div>
								</div>
								<span class="head g9">
									国家：
								</span>
							</div>

							<div class="row first last expand-mode statesRow">
								<div class="foot">
									<a href="javascript:;" class="btn btn-default show-less" data-action="toggle">
										<em class="vm">收起</em>
										<span class="taoIcon btn-arrow-up vm"></span>
									</a>
									<a href="javascript:;" class="btn btn-default show-more" data-action="toggle">
										<em class="vm">更多</em>
										<span class="taoIcon btn-arrow-down vm"></span>
									</a>
								</div>
								
								<div class="body media">
									<div class="media-body">
										<div class="itemLists">
										
										</div>
									</div>
								</div>
								<span class="head g9">
									地区：
								</span>
							</div>
						</div>

						<div class="schoolListWrap preloading">
							<ul class="schoolList contentWrap">
								
							</ul>
					
						</div>

					</div>
					<div class="col2 col2 fr">
						<%@ include file = "/partials/_direct.jsp" %>
					</div>

				</div>

			</div>

		</div>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.a4fc0a52.js"></script><script src="/static/web/js/aboardData.10c49f5a.js"></script></body>
</html>