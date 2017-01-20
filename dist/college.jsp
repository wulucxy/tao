<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<%@ include file = "/partials/_meta.jsp" %>
	<title>淘志愿</title>
<link href="/static/web/css/vendors.95838b90.css" rel="stylesheet"><link href="/static/web/css/college.1b0eaae7.css" rel="stylesheet"></head>
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
						院校数据库
						<em class="underLine"></em>	
					</span>
				</h3>

				<div class="formWrap clearfix">
					<div class="column col1 fl">
						
						<%@ include file = "/partials/_scoreTransform.jsp" %>

						<div class="s-search">
							<div class="input-group rel clearfix">
					          <input type="text" class="form-control fl" placeholder="请输入院校名称" id="collegeInput">
					          <span class="input-group-btn">
					            <button class="btn btn-default btn-search" type="button" id="sBtn">
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
							
							<div class="row first expand-mode">
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
									<a class="fl item" href="javascript:;" data-action="add" data-value="city:0">不限</a>
									<div class="media-body">
										<div class="itemLists">
										<c:forEach var="list" items="${provinceList}">
										<a href="javascript:;" class="item" data-action="add" data-value="city:${list.code}">${list.name}</a>
										</c:forEach>
										</div>
									</div>
								</div>
								<span class="head g9">
									院校属地：
								</span>
							</div>

							<!-- <div class="row expand-mode">
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
									<a class="fl item" href="javascript:;" data-action="add" data-value="collegeType:0">不限</a>
									<div class="media-body">
										<div class="itemLists">
										<c:forEach var="list" items="${type}">
										<a href="javascript:;" class="item" data-action="add" data-value="collegeType:${list.code}">${list.name}</a>
										</c:forEach>
										</div>
									</div>
								</div>
								<span class="head g9">
									院校分类：
								</span>
							</div> -->

							<!-- <div class="row">
								<div class="body media">
									<a class="fl item" href="javascript:;" data-action="add" data-value="ownerType:0">不限</a>
									<div class="media-body">
										<div class="itemLists">
										<c:forEach var="list" items="${ownerType}">
										<a href="javascript:;" class="item" data-action="add" data-value="ownerType:${list.code}">${list.name}</a>
										</c:forEach>
										</div>
									</div>
								</div>
								<span class="head g9">
									院校性质：
								</span>
							</div> -->

							<div class="row">
								<div class="body media">
									<a class="fl item" href="javascript:;" data-action="add" data-value="level:0">不限</a>
									<div class="media-body">
										<div class="itemLists">
										<c:forEach var="list" items="${level}">
										<a href="javascript:;" class="item" data-action="add" data-value="level:${list.code}">${list.name}</a>
										</c:forEach>
										</div>
									</div>
								</div>
								<span class="head g9">
									院校层次：
								</span>
							</div>

							<div class="row last">
								<div class="body media">
									<a class="fl item" href="javascript:;" data-action="add" data-value="feature:0">不限</a>
									<div class="media-body">
										<div class="itemLists">
										<c:forEach var="list" items="${feature}">
										<a href="javascript:;" class="item" data-action="add" data-value="feature:${list.code}">${list.name}</a>
										</c:forEach>
										</div>
									</div>
								</div>
								<span class="head g9">
									院校特色：
								</span>
							</div>

						</div>

						<div class="schoolListWrap">
							<ul class="schoolList load-more-list">
								
							</ul>
							
							<!-- 加载更多模块 -->
							<%@ include file = "/partials/_loadMore.jsp" %>

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
	<script src="/static/web/js/vendors.5bd9bbcd.js"></script><script src="/static/web/js/college.71716fc8.js"></script></body>
</html>