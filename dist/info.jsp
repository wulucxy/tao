<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.68780be9.css" rel="stylesheet"><link href="/static/web/css/info.274fd434.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
		<div class="jimu container clearfix">
			<div class="column fl col1">
				<a target="_blank"class="infoLink big">
					<span class="imgWrap">
					<img src="/static/web/img/3.png" class="responsive">
					</span>
					<div class="figbar te">
						参加2017年新高考的考生们，从现在起，规划 你的升学方向吧</div>
				</a>
			</div>
			<div class="column fr col2">
				<div class="top">
					<a target="_blank" class="infoLink mid">
						<span class="imgWrap">
							<img src="/static/web/img/2.png" class="responsive">
						</span>
						<div class="figbar">
						参加2017年新高考的考生们，从现在起，规划 你的升学方向吧</div>
					</a>
				</div>
				<div class="bot clearfix mt10">
					<div class="column fl col1 mr10">
						<a target="_blank" class="infoLink sml">
							<span class="imgWrap">
								<img src="/static/web/img/1.png" class="responsive">
							</span>
							<div class="figbar">
						<em class="vm w99 dib">参加2017年新高考的考生们，从现在起，规划 你的升学方向吧</em><em class="pixel1 vm"></em></div></a>
						
					</div>
					<div class="column fl col2">
						<a target="_blank"class="infoLink sml">
							<span class="imgWrap">
								<img src="/static/web/img/4.png" class="responsive">
							</span>
							<div class="figbar">
						<em class="vm w99 dib">参加2017年新高考</em><em class="pixel1 vm"></em></div></a>
					</div>
				</div>
			</div>
		</div>

		<div class="infoLists">
			<div class="container ovh">
				<div class="f-layout clearfix">
					<div class="column col1 fl">
						<div class="colPad">
							<div class="content">
								<h3 class="clearfix title">
									<span class="fl s-title">
										全部资讯
										<em class="underLine"></em>	
									</span>
								</h3>
								<ul class="infoList">
									<c:forEach var="list" items="${infoList}">
									   <li>
									   	 <div class="media">
											<span class="fl imgWrap">
												<img src="${list.imgUrl}">
											</span>
											<div class="media-body">
													<div class="detailTitle">
														${list.title}
													</div>
													<div class="clearfix detailSub g6">
													<c:forEach var="tag" items="${tagList}">
														<span class="fl article-tag mr10">${tag}</span>
													</c:forEach>
													<span class="fr moment">${list.time}</span>
													</div>
													<a class="db detailCnt" href="${list.url}" target="_blank">
														${list.context}
													</a>
											</div>
										</div>
									   </li>
									</c:forEach>
									<li>
										<div class="media">
											<span class="fl imgWrap">
												<img src="http://placehold.it/130X130" class="responsive">
											</span>
											<div class="media-body">
													<div class="detailTitle">
														参加2017年新高考的考生们，从现在起，规划你的升学方向吧！
													</div>
													<div class="clearfix detailSub g6">
														<span class="fl article-tag">2017高考</span>
														<span class="fr moment">1小时前</span>
													</div>
													<a class="db detailCnt" target="_blank">
														根据考生输入志愿一项，按照志愿填报专家团队设计多公式运算后进行精准匹配，对考生志愿的学校和专业分别给予风险等级评估，以帮助考生规避志愿填报风险。
													</a>
											</div>
										</div>
									</li>

									<li>
										<div class="media">
											<span class="fl imgWrap">
												<img src="http://placehold.it/130X130" class="responsive">
											</span>
											<div class="media-body">
													<div class="detailTitle">
														参加2017年新高考的考生们，从现在起，规划你的升学方向吧！
													</div>
													<div class="clearfix detailSub g6">
														<span class="fl article-tag">2017高考</span>
														<span class="fr moment">1小时前</span>
													</div>
													<a class="db detailCnt" target="_blank">
														根据考生输入志愿一项，按照志愿填报专家团队设计多公式运算后进行精准匹配，对考生志愿的学校和专业分别给予风险等级评估，以帮助考生规避志愿填报风险。
													</a>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="column col2 fl">
						<div class="colPad r-content">
							<section class="r-lists">
								<div class="content">
									<h3 class="clearfix title">
										<span class="fl s-title">
											标签分类
											<em class="underLine"></em>	
										</span>
									</h3>
								</div>
								<div class="tagsWrap ovh">
									<div class="tagsList">
									<span class="btn btn-primary">全部资讯</span>
									<span class="btn btn-primary">报考学堂</span>
									<span class="btn btn-primary">专家讲座</span>
									<span class="btn btn-primary">咨询会报告</span>
									<span class="btn btn-primary">海外留学</span>
									<span class="btn btn-primary">高考指南</span>
									</div>
								</div>
							</section>
							<section class="r-lists">
							<div class="content">
								<h3 class="clearfix title">
									<span class="fl s-title">
										热门资讯
										<em class="underLine"></em>	
									</span>
								</h3>
								
								<ul class="timelineList">
									<c:forEach var="list" items="${hotList1}">
									   <li class="timeline media">
									   <span class="label fl">
											${list.time}
										</span>
										<div class="media-body"><a href="${list.url}" target="_blank">
											${list.title}
										</a></div>
									   </li>
									</c:forEach>
								</ul>
							</div>
						</section>
						<section class="directs mt20 mb20">
							<div class="">
								<ul>	
									<c:forEach var="list" items="${adList}">
									<li><a href="${list.href}" target="_blank">
										<img src="${list.imgUrl}" >
									</a></li>
									</c:forEach>
								</ul>
							</div>
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
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/info.js"></script></body>
</html>