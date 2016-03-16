<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.5dd41735.css" rel="stylesheet"><link href="/static/web/css/major.19266710.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<div class="container dbWrapper db">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						专业数据库
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
						
						<div class="m-nav clearfix">
							<div class="crumb clearfix">
								<a href="javascript:;" class="fr btn btn-default" data-action="clearAll">清空所有</a>
								<span class="cat-text fl">已选择：</span>
								<span class="tagsWrap">
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
									<a class="fl item" href="javascript:;" data-action="add" data-value="bachelor:">不限</a>
									<div class="media-body">
										<div class="itemLists">

										<c:forEach var="list" items="${Undergraduate}">
										<a href="javascript:;" class="item" data-action="add" data-value="bachelor:${list.code}">${list.name}</a>
										</c:forEach>

										<a href="javascript:;" class="item" data-action="add" data-value="bachelor:0">不选本科</a>
										</div>
									</div>
								</div>
								<span class="head g9">
									本科类别：
								</span>
							</div>

							<div class="row expand-mode last">
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
									<a class="fl item" href="javascript:;" data-action="add" data-value="junior:">不限</a>
									<div class="media-body">
										<div class="itemLists">
										
										<c:forEach var="list" items="${speciality}">
										<a href="javascript:;" class="item" data-action="add" data-value="junior:${list.code}">${list.name}</a>
										</c:forEach>
										
										<a href="javascript:;" class="item" data-action="add" data-value="junior:0">不选专科</a>
										</div>
									</div>
								</div>
								<span class="head g9">
									专科类别：
								</span>
							</div>

						</div>

						<div class="majorListWrap">
							<ul class="majorList">
							</ul>
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
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/major.js"></script></body>
</html>