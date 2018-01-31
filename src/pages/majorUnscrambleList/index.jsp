<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>淘志愿</title>
</head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<div class="container majorListContainer db">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						专业解读
						<em class="underLine"></em>	
					</span>
				</h3>

				<div class="majorListWrap f-layout clearfix">
					<div class="column col1 fl">
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
									<a class="fl item" href="javascript:;" data-action="add" data-value="major:">不限</a>
									<div class="media-body">
										<div class="itemLists">
										<c:forEach var="list" items="${majorList}">
										<a href="javascript:;" class="item" data-action="add" data-value="major:${list.id}">${list.name}</a>
										</c:forEach>
										</div>
									</div>
								</div>
								<span class="head g9">
									关联专业：
								</span>
							</div>
							<div class="row">
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
									<a class="fl item" href="javascript:;" data-action="add" data-value="university:">不限</a>
									<div class="media-body">
										<div class="itemLists">
										<c:forEach var="list" items="${universityList}">
										<a href="javascript:;" class="item" data-action="add" data-value="university:${list.universityId}">${list.universityName}</a>
										</c:forEach>
										</div>
									</div>
								</div>
								<span class="head g9">
									关联院校：
								</span>
							</div>

							<div class="row last">
								<div class="body media">
									<a class="fl item" href="javascript:;" data-action="add" data-value="universityLevel:">不限</a>
									<div class="media-body">
										<div class="itemLists">
										<c:forEach var="list" items="${universityLevelList}">
										<a href="javascript:;" class="item" data-action="add" data-value="universityLevel:${list}">
											<c:if test="${list == 1}">
											 本科
											</c:if>
											<c:if test="${list == 2}">
											 专科
											</c:if>
										</a>
										</c:forEach>
										</div>
									</div>
								</div>
								<span class="head g9">
									院校层次：
								</span>
							</div>
						</div>
						<div class="majorList-inner">
							<ul class="majorList load-more-list">
								
							</ul>
							
							<!-- 加载更多模块 -->
							<%@ include file = "/partials/_loadMore.jsp" %>

						</div>

					</div>
					<div class="column col2 fr">
						<div class="colPad r-content">
							<section class="r-lists">
							<div class="content">
								<h3 class="clearfix title">
									<span class="fl s-title">
										热门资讯
										<em class="underLine"></em>	
									</span>
								</h3>
								
								<ul class="timelineList">
									<c:forEach var="list" items="${hotList}">
									   <li class="timeline media">
									   <span class="label fl">
											${list.time}
										</span>
										<div class="media-body"><a href="${list.href}" target="_blank">
											${list.fullTitle}
										</a></div>
									   </li>
									</c:forEach>
								</ul>
							</div>
						</section>
						<section class="r-list mt20 mb20">
							<%@ include file = "/partials/_direct.jsp" %>
						</section>
						<section class="mt20 mb20">
							<%@ include file = "/partials/_sidebar.jsp" %>
						</section>
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