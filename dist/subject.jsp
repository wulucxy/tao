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
<link href="/static/web/css/vendors.da0ee6f1.css" rel="stylesheet"><link href="/static/web/css/subject.c06e3899.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<!-- 保存userId属性 -->
		<input type="hidden" name="userId" value="${user.userId}">

		<!-- 保存courseType属性 -->
		<input type="hidden" name="userId" value="${user.userId}">

		<div class="container dbWrapper db">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						科目数据库
						<em class="underLine"></em>	
					</span>
				</h3>

				<div class="formWrap clearfix">
					<div class="column col1 fl">
						<!-- <div class="s-search">
							<div class="input-group rel clearfix">
					          <input type="text" class="form-control fl" placeholder="请输入科目名称">
					          <span class="input-group-btn">
					            <button class="btn btn-default btn-search" type="button">
					            	<i class="iconList icon-search"></i>
					            </button>
					          </span>
					        </div>
				        </div> -->
						
						<div class="m-nav clearfix college">
							<div class="crumb clearfix">
								<a href="javascript:;" class="fr btn btn-default" data-action="clearAll">清空所有</a>
								<span class="cat-text fl">已选择：</span>
								<span class="tagsWrap">
								</span>
							</div>
							
							<div class="row last">
								
								<div class="body media">
									
									<div class="media-body">
										<div class="itemLists">	
										<a href="javascript:;" class="item" data-action="add" data-value="subjects:1" subject="1">物理</a>
										<a href="javascript:;" class="item" data-action="add" data-value="subjects:2" subject="2">化学</a>
										<a href="javascript:;" class="item" data-action="add" data-value="subjects:3" subject="3">生物</a>
										<a href="javascript:;" class="item" data-action="add" data-value="subjects:4" subject="4">技术</a>
										<a href="javascript:;" class="item" data-action="add" data-value="subjects:5" subject="5">政治</a>
										<a href="javascript:;" class="item" data-action="add" data-value="subjects:6" subject="6">地理</a>
										<a href="javascript:;" class="item" data-action="add" data-value="subjects:7" subject="7">历史</a>
										</div>
									</div>
								</div>
								<span class="head g9">
									科目：
								</span>
							</div>

						</div>

						<div class="schoolListWrap">
							<ul class="schoolList load-more-list">
								<!-- <li class="clearfix">
									<div class="fl">
									<h4 class="name badgeRow"><em class="badgetitle vm">北京大学</em><span class="badge green">985</span><span class="badge red">211</span></h4>
									<div class="detail">
										<span class="label">院校属地：</span><span class="field">北京</span>
										<span class="label">院校分类：</span><span class="field">综合</span>
										<span class="label">院校性质：</span><span class="field">公办</span>
										<span class="label">院校层次：</span><span class="field">本科</span>
									</div>
									</div>
									<div class="fr">
										<a href="#" class="btn btn-primary btn-mid">查看详情</a>
									</div>
								</li>
								<li class="clearfix">
									<div class="fl">
									<h4 class="name badgeRow"><em class="badgetitle vm">北京大学</em><span class="badge green">985</span><span class="badge red">211</span></h4>
									<div class="detail">
										<span class="label">院校属地：</span><span class="field">北京</span>
										<span class="label">院校分类：</span><span class="field">综合</span>
										<span class="label">院校性质：</span><span class="field">公办</span>
										<span class="label">院校层次：</span><span class="field">本科</span>
									</div>
									</div>
									<div class="fr">
										<a href="#" class="btn btn-primary btn-mid">查看详情</a>
									</div>
									
								</li>
								<li class="clearfix">
									<div class="fl">
									<h4 class="name badgeRow"><em class="badgetitle vm">北京大学</em><span class="badge green">985</span><span class="badge red">211</span></h4>
									<div class="detail">
										<span class="label">院校属地：</span><span class="field">北京</span>
										<span class="label">院校分类：</span><span class="field">综合</span>
										<span class="label">院校性质：</span><span class="field">公办</span>
										<span class="label">院校层次：</span><span class="field">本科</span>
									</div>
									</div>
									<div class="fr">
										<a href="#" class="btn btn-primary btn-mid">查看详情</a>
									</div>
								</li>
								<li class="clearfix">
									<div class="fl">
									<h4 class="name badgeRow"><em class="badgetitle vm">北京大学</em><span class="badge green">985</span><span class="badge red">211</span></h4>
									<div class="detail">
										<span class="label">院校属地：</span><span class="field">北京</span>
										<span class="label">院校分类：</span><span class="field">综合</span>
										<span class="label">院校性质：</span><span class="field">公办</span>
										<span class="label">院校层次：</span><span class="field">本科</span>
									</div>
									</div>
									<div class="fr">
										<a href="#" class="btn btn-primary btn-mid">查看详情</a>
									</div>
									
								</li> -->
							</ul>
							
							<!-- 加载更多模块 -->
							<%@ include file = "/partials/_loadMore.jsp" %>

						</div>

					</div>
					<div class="col2 col2 fr">
						<div class="directs">
							<ul>
							<c:forEach var="list" items="${adList}">
							<li>
							<c:choose>
							    <c:when test="${list.href != null}">
							   		<a href="${list.href}" target="_blank" >
							   			<img src="${list.imgUrl}" >
							   		</a>
								</c:when>
								<c:otherwise>
									<a href="javascript:;" >
										<img src="${list.imgUrl}" >
									</a>
								</c:otherwise>
							</c:choose>
							</li>
							</c:forEach>
						</ul>
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
	<script src="/static/web/js/vendors.556fdb57.js"></script><script src="/static/web/js/subject.1ee75e1a.js"></script></body>
</html>