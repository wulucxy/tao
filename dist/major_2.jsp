<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.89d2599b.css" rel="stylesheet"><link href="/static/web/css/major_2.35167f38.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">
		<!-- 学校id -->
		<input type="hidden" name="majorId" value="${majorId}">

		<!-- favorId,如果有的话 -->
		<input type="hidden" name="favorId" value="${favorId}">

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
						<div class="contentWrap db-major">
							<h4 class="clearfix">
								<em class="vm">哲学</em>
								<a href="javascript:;" class="btn btn-primary btn-mid fr btn-fav" data-favtype="2"><i class="taoIcon favIcon"></i><em class="vm unfavedTxt">收藏</em><em class="vm favedTxt">已收藏</em></a>
							</h4>

							<div class="wellWrapper tabs" id="collegeWrapper">
								<nav class="clearfix">                
						                 <ul>
											<li  class="tab-item current"><a href="javascript:;">专业简介</a></li>
											<li  class="tab-item"><a href="javascript:;">开设院校</a></li>
										</ul>
						        </nav>
								
								<div class="content-wrap">
									<section class="tab-box detailWrap current">
										<div class="detailTxt">
											<div class="inline row">
												<span class="label">所属门类：</span><span class="field orange">哲学</span>
												<span class="label">专业代码：</span><span class="field orange">11111</span>
											</div>
											<div class="media row">
												<span class="fl label">所属门类：</span>
												<div class="media-body orange">
													哲学概论、马克思主义哲学原理、中国哲学史、西方哲学史、科学技术哲学、伦理
		学、宗教学、美学、逻辑学、心理学、中外哲学原著导读等。
												</div>
											</div>
											<div class="media row">
												<span class="fl label">培养目标：</span>
												<div class="media-body orange">
													本专业培养具有一定马克思主义哲学理论素养和系统的专业基础知识，有进一步培
		养潜质的哲学专门人才，以及能在国家机关、文教事业、新闻出版、企业等部门从
		事实际工作的应用型、复合型高级专门人才。
												</div>
											</div>
										</div>
										
									</section>
									<section class="tab-box majorWrap">
										<div class="schoolListWrap">
											<ul class="schoolList load-more-list" data-url="/loadmore/school" data-tmpl="">	
												<li class="clearfix">
													<div class="fl">
													<h4 class="name badgeRow"><em class="badgetitle vm">北京大学</em>
														
															
																<span class="badge green">985</span>
															
														
															
																<span class="badge red">211</span>
															
														
															
																<span class="badge">研究生院</span>
															
														
															
																<span class="badge">卓越计划</span>
															
														
													</h4>
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
													<h4 class="name badgeRow"><em class="badgetitle vm"></em>
														
															
																<span class="badge green">985</span>
															
														
															
																<span class="badge red">211</span>
															
														
															
																<span class="badge">研究生院</span>
															
														
															
																<span class="badge">卓越计划</span>
															
														
													</h4>
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

									</section>
									<section class="tab-box infoWrap">
										
									</section>
								</div>
							</div>

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
	<script src="http://api.map.baidu.com/api?v=2.0&ak=4c31cec0e556dbd9f7755c6f3aa62d09" type="text/javascript"></script>
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/major_2.js"></script></body>
</html>