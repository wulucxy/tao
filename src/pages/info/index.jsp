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

		<div class="jimu container clearfix">
			<div class="column fl col1">
				<a target="_blank"class="infoLink big" href="${bannerList.big.url}">
					<span class="imgWrap">
					<img src="${bannerList.big.imgUrl}" class="responsive">
					</span>
					<div class="figbar te">
						${bannerList.big.title}</div>
				</a>
			</div>
			<div class="column fr col2">
				<div class="top">
					<a target="_blank" class="infoLink mid" href="${bannerList.middle.url}">
						<span class="imgWrap">
							<img src="${bannerList.middle.imgUrl}" class="responsive">
						</span>
						<div class="figbar">
						${bannerList.middle.title}</div>
					</a>
				</div>

				<div class="bot clearfix mt10">
					<c:forEach var="list" items="${bannerList.smallList}">
					<div class="column fl col">
						<a target="_blank" class="infoLink sml" href="${list.url}">
							<span class="imgWrap">
								<img src="${list.imgUrl}" class="responsive">
							</span>
							<div class="figbar">
						<em class="vm w99 dib">${list.title}</em><em class="pixel1 vm"></em></div></a>	
					</div>
					</c:forEach>	

					<!-- <div class="column fl col">
						<a target="_blank"class="infoLink sml">
							<span class="imgWrap">
								<img src="./img/4.png" class="responsive">
							</span>
							<div class="figbar">
						<em class="vm w99 dib">参加2017年新高考</em><em class="pixel1 vm"></em></div></a>
					</div> -->
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
								<ul class="infoList load-more-list">
									<c:forEach var="list" items="${infoList}">
									   <li class="">
									   	 <div class="media">
											<span class="fl imgWrap">
												<img src="${list.imgUrl}">
											</span>
											<div class="media-body">
													<a class="detailTitle ellipsis" href="${list.url}" target="_blank">
														${list.title}
													</a>
													<div class="clearfix detailSub g6">
													<c:forEach var="tag" items="${list.tagList}">
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
								</ul>
								<!-- 加载更多模块 -->
								<%@ include file = "/partials/_loadMore.jsp" %>
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
									<c:forEach var="list" items="${tagList}">
									<span class="btn btn-primary infoTag" code="${list.code}">${list.name}</span>
									</c:forEach>
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
									<c:forEach var="list" items="${hotList}">
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
							<div>
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
	</body>
</html>