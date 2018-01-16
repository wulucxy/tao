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
</head>
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
								<em class="vm">${majorName}</em>
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
												<span class="label">所属门类：</span><span class="field g9">${category}</span>
												<span class="label">专业代码：</span><span class="field g9">${majorId}</span>
											</div>
											<div class="media row">
												<span class="fl label">主要课程：</span>
												<div class="media-body g9">
													${mainCourse}
												</div>
											</div>
											<div class="media row">
												<span class="fl label">培养目标：</span>
												<div class="media-body g9">
													${target}
												</div>
											</div>
										</div>
										
							<c:if test="${majorAd != null and majorAd != ''}">
								<div class="majorAdWrap mt40">
									<a href="${majorAd.href}" target="_blank" class="db">
										<img src="${majorAd.imgUrl}" class="responsive">
									</a>
								</div>				   
							</c:if>

										
									</section>
									<section class="tab-box majorWrap dn">
										<div class="schoolListWrap">
											
										<div class="bg bg-f5">
											<div class="pad clearfix">
												<div class="row clearfix inline fl">
													<label for="studentProvince" class="control-label">
														<em class="vm">院校属地：</em></label>
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
												<!-- <div class="row clearfix inline fl">
													<label for="batch" class="control-label">
														<em class="vm">批&emsp;&emsp;次：</em></label>
													<div class="selectWrap rel">
														<select class="form-control trigger" name="batch">
															  <option value="1">第一批</option>
															  <option value="2">第二批</option>
															  <option value="3">第三批</option>
														</select>	
													</div>
												</div> -->
												<div class="row clearfix inline fl">
													<label for="batch" class="control-label">
														<em class="vm">排&emsp;&emsp;序：</em></label>
													<div class="selectWrap rel">
														<select class="form-control trigger" name="orderCondition">
															  <option value="average">分数</option>
															  <option value="rank">位次号</option>
															  <option value="number">招生人数</option>
														</select>	
													</div>
												</div>
											</div>
										</div>

											<ul class="schoolList load-more-list" data-url="/loadmore/school" data-tmpl="">	
											</ul>
											<!-- 加载更多模块 -->
											<%@ include file = "/partials/_loadMore.jsp" %>
										</div>

									</section>
								</div>
							</div>

						</div>
					</div>
					<div class="col2 col2 fr">
						<%@ include file = "/partials/_direct.jsp" %>

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