<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>淘志愿</title>
</head>
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
						<div class="s-search">
							<div class="input-group rel clearfix">
					          <input type="text" class="form-control fl" placeholder="请输入院校名称">
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
									<a class="fl item" href="javascript:;" data-action="add" data-value="city:">不限</a>
									<div class="media-body">
										<div class="itemLists">
										<a href="javascript:;" class="item" data-action="add" data-value="city:1">北京</a>
										<a href="javascript:;" class="item" data-action="add" data-value="city:2">上海</a>
										<a href="javascript:;" class="item" data-action="add" data-value="city:3">广州</a>
										<a href="javascript:;" class="item" data-action="add" data-value="city:4">深圳</a>
										<a href="javascript:;" class="item" data-action="add" data-value="city:5">杭州</a>
										<a href="javascript:;" class="item" data-action="add" data-value="city:6">北京</a>
										<a href="javascript:;" class="item" data-action="add" data-value="city:7">北京</a>
										<a href="javascript:;" class="item" data-action="add" data-value="city:8">北京</a>
										<a href="javascript:;" class="item" data-action="add" data-value="city:9">北京</a>
										<a href="javascript:;" class="item" data-action="add" data-value="city:10">北京</a>
										<a href="javascript:;" class="item" data-action="add" data-value="city:11">北京</a>
										<a href="javascript:;" class="item" data-action="add" data-value="city:12">北京</a>
										</div>
									</div>
								</div>
								<span class="head g9">
									院校属地：
								</span>
							</div>

							<div class="row expand-mode">
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
									<a class="fl item" href="javascript:;" data-action="add" data-value="collegeType:">不限</a>
									<div class="media-body">
										<div class="itemLists">
										<a href="javascript:;" class="item" data-action="add" data-value="collegeType:1">综合类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="collegeType:1">理工类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="collegeType:1">综合类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="collegeType:1">理工类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="collegeType:1">综合类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="collegeType:1">理工类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="collegeType:1">综合类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="collegeType:1">理工类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="collegeType:1">综合类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="collegeType:1">理工类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="collegeType:1">综合类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="collegeType:1">理工类</a>
										</div>
									</div>
								</div>
								<span class="head g9">
									院校分类：
								</span>
							</div>

							<div class="row">
								<div class="body media">
									<a class="fl item" href="javascript:;" data-action="add" data-value="ownerType:">不限</a>
									<div class="media-body">
										<div class="itemLists">
										<a href="javascript:;" class="item" data-action="add" data-value="ownerType:0">公办</a>
										<a href="javascript:;" class="item" data-action="add" data-value="ownerType:1">民办</a>
										<a href="javascript:;" class="item" data-action="add" data-value="ownerType:2">中外合资</a>
										</div>
									</div>
								</div>
								<span class="head g9">
									院校性质：
								</span>
							</div>

							<div class="row">
								<div class="body media">
									<a class="fl item" href="javascript:;" data-action="add" data-value="level:">不限</a>
									<div class="media-body">
										<div class="itemLists">
										<a href="javascript:;" class="item" data-action="add" data-value="level:1">本科</a>
										<a href="javascript:;" class="item" data-action="add" data-value="level:2">专科</a>
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
										<a href="javascript:;" class="item" data-action="add" data-value="feature:1">985</a>
										<a href="javascript:;" class="item" data-action="add" data-value="feature:2">211</a>
										<a href="javascript:;" class="item" data-action="add" data-value="feature:3">研究生院</a>
										<a href="javascript:;" class="item" data-action="add" data-value="feature:3">卓越计划</a>

										</div>
									</div>
								</div>
								<span class="head g9">
									院校特色：
								</span>
							</div>

						</div>

						<div class="schoolListWrap">
							<ul class="schoolList load-more-list" data-url="/loadmore/school" data-tmpl="">
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
							</ul>
							
							<!-- 加载更多模块 -->
							<%@ include file = "/partials/_loadMore.jsp" %>

						</div>

					</div>
					<div class="col2 col2 fr">
						<div class="directs">
							<ul>
								<c:forEach var="list" items="${adList}">
								<li><a href="${list.href}" target="_blank">
									<img src="${list.imgUrl}" >
								</a></li>
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
	</body>
</html>