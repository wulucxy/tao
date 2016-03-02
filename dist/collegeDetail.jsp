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
		<!-- 学校id -->
		<input type="hidden" name="collegeId" value="${collegeId}">

		<!-- favorId,如果有的话 -->
		<input type="hidden" name="favorId" value="${favorId}">

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
						<div class="contentWrap">
							<h4 class="clearfix">
								<em class="vm">清华大学</em>
								<a href="javascript:;" class="btn btn-primary btn-mid fr btn-fav" data-favtype="1"><i class="taoIcon favIcon"></i><em class="vm unfavedTxt">收藏</em><em class="vm favedTxt">已收藏</em></a>
							</h4>

							<div class="wellWrapper tabs" id="collegeWrapper">
								<nav class="clearfix">                
						                 <ul>
											<li  class="tab-item current"><a href="javascript:;">学校简介</a></li>
											<li  class="tab-item"><a href="javascript:;">开设专业</a></li>
											<li  class="tab-item"><a href="javascript:;">分数线</a></li>
										</ul>
						        </nav>
								
								<div class="content-wrap">
									<section class="tab-box detailWrap current">
										<div class="detailContent">
											<div class="detailInfos clearfix">
												<div class="col">
													<span class="label">所在地区：</span><span class="field orange">${city.name}</span>
												</div>
												<div class="col">
													<span class="label">院校性质：</span><span class="field orange">${ownerType.name}</span>
												</div>
												<div class="col">
													<span class="label">院校分类：</span><span class="field orange">${collegeType.name}</span>
												</div>
												
												<div class="col">
													<span class="label">院校层次：</span><span class="field orange">${level.name}</span>
												</div>
												<div class="col badgeRow">
													<span class="label">院校特色：</span><span class="field">
														<c:forEach var="featurelist" items="${feature}">
															 <c:choose>
															 	<c:when test="${featurelist.type == 1}">
															   		<span class="badge green">${featurelist.name}</span>
																</c:when>
																<c:when test="${featurelist.type == 2}">
															   		<span class="badge red">${featurelist.name}</span>
																</c:when>
															 	<c:otherwise>
																	<span class="badge">${featurelist.name}</span>
																</c:otherwise>
															 </c:choose>
														</c:forEach>
													</span>
												</div>
												<div class="col">
													<span class="label">院校排名：</span><span class="field place">
														<em>排名</em><em class="orange"></em>
													</span>
													<input type="hidden" name="place" value="${place}">
												</div>
												<div class="col">
													<span class="label">联系方式：</span><span class="field orange">${phone}</span>
												</div>
												<div class="col c-6">
													<span class="label">院校网址：</span><a class="field orange" href="${site}" target="_blank">${site}</a>
												</div>
												<div class="col c-6">
													<span class="label">通讯地址：</span><span class="field orange">${location.address}</span>
												</div>
											</div>	
											
											<input type="hidden" name="location" value="${location.lat}:${location.lng}">
											<div id="baiduMap" class="baiduWrapper">
												
											</div>
											<div class="detailTxt media">
												<span class="fl">院校简介：</span>
												<div class="media-body orange">
													清华大学是中国著名的高等学府，坐落于北京西北部风景秀丽的清华园。 “自强不息、厚德载物”的校训，“行胜于言”的校风，“严谨、勤奋、求实、创新”的学风，以“爱国奉献、追求卓越”为核心的清华精神，以及“中西融会、古今贯通、
		文理渗透”的办学特色，对学校的发展产生了深远的影响。 清华大学积极开展多渠
		道、高层次、实质性的海外合作交流，与一批世界知名大学和机构建立了战略伙伴
		关系，在涉及全球性重大问题的科学研究、技术发展和决策咨询等方面发挥了越来
		越重要的作用；通过联合培养、交换生、国际会议等多种形式，不断拓展面向世界
		的人才培养和高水平的学术交流；积极参与大学国际组织和联盟，促进双边及多边
		合作；精心策划和推进重大海外文化和学术交流活动，全力提升学校的国际影响力
		和知名度。
												</div>
											</div>

										</div>
										
									</section>
									<section class="tab-box majorWrap">
										<div class="bg bg-f5">
											<div class="pad clearfix">
												<div class="row clearfix inline fl">
													<label for="province" class="control-label">
														<em class="vm">生源地：</em></label>
													<div class="selectWrap rel">
														<select class="form-control trigger" name="province">
															  <option value="1">浙江</option>
															  <option value="2">湖北</option>
														</select>	
													</div>
												</div>
												<div class="row clearfix inline fl">
													<label for="year" class="control-label">
														<em class="vm">年&emsp;份：</em></label>
													<div class="selectWrap rel">
														<select class="form-control trigger" name="year">
															  <option value="2014">2014</option>
															  <option value="2013">2013</option>
														</select>	
													</div>
												</div>
												<div class="row clearfix inline fl">
													<label for="courseType" class="control-label">
														<em class="vm">科&emsp;目：</em></label>
													<div class="selectWrap rel">
														<select class="form-control trigger" name="courseType">
															  <option value="1">理科</option>
															  <option value="0">文科</option>
														</select>	
													</div>
												</div>
											</div>
										</div>

										<ul class="majorLists">
											<li class="majorList clearfix">
												<a class="fr taoIcon next" href="#" target="_blank"></a>
												<div class="majorDetail">
													<h5 class="name badgeRow">
														<em class="badgetitle vm">机械设计制造及自动化</em>
														<span class="badge red">国家重点</span>
													</h5>
													<p class="details">
														<span>
															<i class="icon-major icon-score"></i>
															<em class="label">分数线：</em>
															<em class="field orange">444</em>
														</span>
														<span>
															<i class="icon-major icon-term"></i>
															<em class="label">学制：</em>
															<em class="field orange">4年</em>
														</span>
														<span>
															<i class="icon-major icon-human"></i>
															<em class="label">招生人数：</em>
															<em class="field orange">56人</em>
														</span>
													</p>
													<p class="foot">
														<i class="icon-major icon-hat"></i>
														<em class="label g6 vm">所需科目：</em>
														<span class="btn btn-primary btn-outlined vm">物理</span>
													</p>
												</div>
											</li>

											<li class="majorList clearfix">
												<a class="fr taoIcon next" href="#" target="_blank"></a>
												<div class="majorDetail">
													<h5 class="name badgeRow">
														<em class="badgetitle vm">机械设计制造及自动化</em>
														<span class="badge red">国家重点</span>
													</h5>
													<p class="details">
														<span>
															<i class="icon-major icon-score"></i>
															<em class="label">分数线：</em>
															<em class="field orange">444</em>
														</span>
														<span>
															<i class="icon-major icon-term"></i>
															<em class="label">学制：</em>
															<em class="field orange">4年</em>
														</span>
														<span>
															<i class="icon-major icon-human"></i>
															<em class="label">招生人数：</em>
															<em class="field orange">56人</em>
														</span>
													</p>
													<p class="foot">
														<i class="icon-major icon-hat"></i>
														<em class="label g6 vm">所需科目：</em>
														<span class="btn btn-primary btn-outlined vm">物理</span>
													</p>
												</div>
											</li>
										</ul>
										
										<!-- 加载更多模块 -->
										<%@ include file = "/partials/_loadMore.jsp" %>

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
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/collegeDetail.js"></script></body>
</html>