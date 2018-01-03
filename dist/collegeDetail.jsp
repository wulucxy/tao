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
<link href="/static/web/css/vendors.f2b77075.css" rel="stylesheet"><link href="/static/web/css/collegeDetail.c16f1b78.css" rel="stylesheet"></head>
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
								<em class="vm">${collegeName}</em>
								<a href="javascript:;" class="btn btn-primary btn-mid fr btn-fav" data-favtype="1"><i class="taoIcon favIcon"></i><em class="vm unfavedTxt">收藏</em><em class="vm favedTxt">已收藏</em></a>
							</h4>

							<div class="wellWrapper tabs" id="collegeWrapper">
								<nav class="clearfix">                
						                 <ul>
											<li  class="tab-item current"><a href="javascript:;">学校简介</a></li>
											<li  class="tab-item"><a href="javascript:;">开设专业</a></li>
											<!-- <li  class="tab-item"><a href="javascript:;">分数线</a></li> -->
										</ul>
						        </nav>
								
								<div class="content-wrap">
									<section class="tab-box detailWrap current">
										<div class="detailContent">
											<div class="detailInfos clearfix">
												<div class="col">
													<span class="label">所在地区：</span><span class="field g9">${city}</span>
												</div>
												<div class="col">
													<span class="label">院校性质：</span><span class="field g9">${ownerType}</span>
												</div>
												<div class="col">
													<span class="label">院校分类：</span><span class="field g9">${type}</span>
												</div>
												
												<div class="col">
													<span class="label">院校层次：</span><span class="field g9">${level}</span>
												</div>
												
												<div class="col">
													<span class="label">院校排名：</span><span class="field place">
														<em class="g9">NO.${place}</em>
													</span>
													<input type="hidden" name="place" value="${place}">
												</div>
												<div class="col">
													<span class="label">联系方式：</span><span class="field g9">${phone}</span>
												</div>
												<div class="col badgeRow c-10">
													<span class="label">院校特色：</span><span class="field">
														<c:forEach var="featurelist" items="${feature}">
															 <c:choose>
															 	<c:when test="${featurelist.code == 1}">
															   		<span class="badge green">${featurelist.name}</span>
																</c:when>
																<c:when test="${featurelist.code == 2}">
															   		<span class="badge red">${featurelist.name}</span>
																</c:when>
															 	<c:otherwise>
																	<span class="badge">${featurelist.name}</span>
																</c:otherwise>
															 </c:choose>
														</c:forEach>
													</span>
												</div>
												<div class="col c-10">
													<span class="label">院校网址：</span><a class="field g9" href="${site}" target="_blank">${site}</a>
												</div>
												<div class="col c-10">
													<span class="label">通讯地址：</span><span class="field g9">${location.address}</span>
												</div>
											</div>	
											
											<input type="hidden" name="location" value="${location.lng}:${location.lat}">
											<div id="baiduMap" class="baiduWrapper">
												
											</div>
											<div class="detailTxt media">
												<span class="fl">院校简介：</span>
												<div class="media-body g9">
													${description}
												</div>
											</div>

										</div>
										
									</section>
									<section class="tab-box majorWrap">
										<div class="bg bg-f5">
											<div class="pad clearfix">
												<div class="row clearfix inline fl">
													<label for="studentProvince" class="control-label">
														<em class="vm">生源地：</em></label>
													<div class="selectWrap rel">
														<select class="form-control trigger" name="studentProvince">
															
														</select>	
													</div>
												</div>
												<div class="row clearfix inline fl">
													<label for="year" class="control-label">
														<em class="vm">年&emsp;&emsp;份：</em></label>
													<div class="selectWrap rel">
														<select class="form-control trigger" name="Year">
															  
														</select>
													</div>
												</div>
												<div class="row clearfix inline fl">
													<label for="batch" class="control-label">
														<em class="vm">批&emsp;&emsp;次：</em></label>
													<div class="selectWrap rel">
														<select class="form-control trigger" name="batch">
															  <option value="1">第一批</option>
															  <option value="2">第二批</option>
															  <option value="3">第三批</option>
														</select>	
													</div>
												</div>
												<div class="row clearfix inline fl">
													<label for="batch" class="control-label">
														<em class="vm">排&emsp;&emsp;序：</em></label>
													<div class="selectWrap rel">
														<select class="form-control trigger" name="orderCondition">
															  <option value="liberal">文科平均分</option>
															  <option value="science">理科平均分</option>
															  <option value="number">录取人数</option>
														</select>	
													</div>
												</div>
											</div>
										</div>

										<ul class="majorLists">
											
										</ul>
										
										<!-- 加载更多模块 -->
										<%@ include file = "/partials/_loadMore.jsp" %>

									</section>
									<!-- <section class="tab-box infoWrap">
										
										<div class="threholdTableWrap">
											<iframe src="/v2_1/mobile/${user.province.code}/data/college/${collegeId}/thresholds" style="width:100%;height:100%;border:none;padding:0;margin:0;" scolling="no" frameBorder="0"></iframe>
										</div>

									</section> -->
								</div>
							</div>

						</div>
					</div>
					<div class="col2 fr">
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
	<script src="http://api.map.baidu.com/api?v=2.0&ak=4c31cec0e556dbd9f7755c6f3aa62d09" type="text/javascript"></script>
	<script src="/static/web/js/vendors.9fc1c82e.js"></script><script src="/static/web/js/collegeDetail.a93504a7.js"></script></body>
</html>