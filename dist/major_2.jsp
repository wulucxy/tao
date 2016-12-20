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
<link href="/static/web/css/vendors.da0ee6f1.css" rel="stylesheet"><link href="/static/web/css/major_2.41fe7393.css" rel="stylesheet"></head>
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
												<span class="label">所属门类：</span><span class="field orange">${category}</span>
												<span class="label">专业代码：</span><span class="field orange">${majorId}</span>
											</div>
											<div class="media row">
												<span class="fl label">主要课程：</span>
												<div class="media-body orange">
													${mainCourse}
												</div>
											</div>
											<div class="media row">
												<span class="fl label">培养目标：</span>
												<div class="media-body orange">
													${target}
												</div>
											</div>
										</div>
										
									</section>
									<section class="tab-box majorWrap dn">
										<div class="schoolListWrap">
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
	<script src="/static/web/js/vendors.b543b1f9.js"></script><script src="/static/web/js/major_2.74b48885.js"></script></body>
</html>