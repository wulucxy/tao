<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.68780be9.css" rel="stylesheet"><link href="/static/web/css/infoDetail.e8db09d2.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<!-- 保存province属性 -->
		<input type="hidden" name="newsId" value="${newsId}">

		<!-- favorId,如果有的话 -->
		<input type="hidden" name="favorId" value="${favorId}">

		<div class="container ovh">
			<div class="f-layout clearfix">
				<div class="column c-66 fl">
					<div class="colPad">
						<div class="articleWrap">
							<%@ include file = "/partials/_article.jsp" %>
							<div class="thirdParts">
								<div class="procons tc">
									<a href="javascript:;" class="btn btn-primary up" btn-type="${up}">
										<i class="taoIcon icon-pro"></i>
										<em class="vm">支持(<span id="upCount">${upCount}</span>)</em>
									</a>
									<a href="javascript:;" class="btn btn-negative down" btn-type="${down}">
										<i class="taoIcon icon-con"></i>
										<em class="vm">反对(<span id="downCount">${downCount}</span>)</em>
									</a>
									<!-- <a href="javascript:;" class="btn btn-negative last" data-favtype="1">
										<i class="taoIcon icon-fav"></i>
										<em class="vm">收藏(<span id="likeCount">${likeCount}</span>)</em>
									</a> -->

									<a href="javascript:;" class="btn btn-negative btn-fav last" data-favtype="3">
										<i class="taoIcon favIcon"></i>
										<em class="vm unfavedTxt">收藏(<span id="likeCount">${likeCount}</span>)</em>
									</a>
								</div>
								
								<div class="shareComponents tc">
									<%@ include file = "/partials/_share.jsp" %>
								</div>
								
							</div>							
						</div>
					</div>
				</div>
				<div class="column c-33 fl">
					<div class="colPad r-content">
						<section class="hot">
							<div class="content">
								<h3 class="clearfix title">
									<span class="fl s-title">
										热门资讯
										<em class="underLine"></em>	
									</span>
								</h3>
								
								<ul class="timelineList">
									<li class="timeline media">
										<span class="label fl">
											12-31
										</span>
										<div class="media-body"><a href="#" target="_blank">
											关于新学考、选考25个问题的权威解答都在这 里了！你的升学方向...
										</a></div>
									</li>
									<li class="timeline media">
										<span class="label fl">
											12-31
										</span>
										<div class="media-body"><a href="#" target="_blank">
											关于新学考、选考25个问题的权威解答都在这 里了！你的升学方向...
										</a></div>
									</li>
									<li class="timeline media">
										<span class="label fl">
											12-31
										</span>
										<div class="media-body"><a href="#" target="_blank">
											关于新学考、选考25个问题的权威解答都在这 里了！你的升学方向...
										</a></div>
									</li>
									<li class="timeline media">
										<span class="label fl">
											12-31
										</span>
										<div class="media-body"><a href="#" target="_blank">
											关于新学考、选考25个问题的权威解答都在这 里了！你的升学方向...
										</a></div>
									</li>

								</ul>
							</div>
						</section>

						<section class="hot">
							<div class="content">
								<h3 class="clearfix title">
									<span class="fl s-title">
										热门资讯
										<em class="underLine"></em>	
									</span>
								</h3>
								
								<ul class="timelineList">
									<li class="timeline media">
										<span class="label fl">
											12-31
										</span>
										<div class="media-body"><a href="#" target="_blank">
											关于新学考、选考25个问题的权威解答都在这 里了！你的升学方向...
										</a></div>
									</li>
									<li class="timeline media">
										<span class="label fl">
											12-31
										</span>
										<div class="media-body"><a href="#" target="_blank">
											关于新学考、选考25个问题的权威解答都在这 里了！你的升学方向...
										</a></div>
									</li>
									<li class="timeline media">
										<span class="label fl">
											12-31
										</span>
										<div class="media-body"><a href="#" target="_blank">
											关于新学考、选考25个问题的权威解答都在这 里了！你的升学方向...
										</a></div>
									</li>
									<li class="timeline media">
										<span class="label fl">
											12-31
										</span>
										<div class="media-body"><a href="#" target="_blank">
											关于新学考、选考25个问题的权威解答都在这 里了！你的升学方向...
										</a></div>
									</li>

								</ul>
							</div>
						</section>

						<section class="directs mt20 mb20">
							<div class="">
								<ul>
									
									<li><a href="#5" target="_blank">
										<img src="http://placehold.it/300x260">
									</a></li>
									
								</ul>
							</div>
						</section>

					</div>
				</div>
			</div>
		</div>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>
	
	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>

	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/infoDetail.js"></script></body>
</html>