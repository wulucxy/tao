<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%> 
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<%@ include file = "/partials/_meta.jsp" %>
	<title>淘志愿</title>
<link href="/static/web/css/vendors.95838b90.css" rel="stylesheet"><link href="/static/web/css/bookResult.7320d04a.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">

		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<!-- 保存provinceName属性 -->
		<input type="hidden" name="provinceName" value="${user.province.name}">

		<!-- 保存userName属性 -->
		<input type="hidden" name="userName" value="${user.userName}">

		<div class="container p_case_4">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						高考志愿定制
						<em class="underLine"></em>	
					</span>
					<div class="fr f16 g6">
						<a class="setting trigger" data-trigger="info">
							<i class="settingIcon icon-setting"></i><em class="vm">我的信息</em>
						</a>
					</div>
				</h3>

				<div class="bg bg-blue mb20 lh42 tc">结&nbsp;&nbsp;果</div>
				<div class="formWrap">
					
					<div class="wellWrapper tabs" id="bookResultTab">
						<nav class="clearfix">                
				                 <ul>
									<li  class="tab-item current"><a href="javascript:;">冲一冲</a></li>
									<li  class="tab-item"><a href="javascript:;">平一平</a></li>
									<li  class="tab-item"><a href="javascript:;">保一保</a></li>
								</ul>
				        </nav>
					</div>

				<c:choose>	
				<c:when test="${fn:length(radical) > 0 }">
					<section class="caseSection">
						<h4 class="bg bg-f1">冲刺方案</h4>
						<c:forEach var="list" items="${radical}" varStatus="loop">
						<div class="media detailContent">
						<a href="javascript:;" class="taoIcon toggleIcon toggle"></a>
							<span class="fl index">${loop.index+1}</span>
							<div class="media-body">
								<h4 class="name badgeRow">
									<em class="badgetitle vm">${list.collegeName}</em>
									<c:forEach var="featurelist" items="${list.feature}">
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
								</h4>
								<div class="detail">
		<span class="label">院校属地：</span><span class="field">${list.city}</span>
		<span class="label">院校分类：</span><span class="field">${list.type}</span>
		<span class="label">院校性质：</span><span class="field">${list.ownerType}</span>
		<span class="label">院校层次：</span><span class="field">${list.level}</span>
								</div>
								<div class="tableWrap">
					<table class="table table-bordered text-center">
						<tr>
						<c:forEach var="toudang" items="${list.tuodangList}">
						<td>${toudang.type}</td>
						</c:forEach>
						</tr>
						<tr>
							<c:forEach var="toudang" items="${list.tuodangList}">
							<td>${toudang.name}</td>
							</c:forEach>
						</tr>

					</table>
				</div>
								<div class="tableWrap">
									<table class="table table-bordered text-center">
										<tbody>
											<tr>
												<td width="240">专业名称</td>
												<td width="140">所属科类</td>
												<c:forEach var="year" items="${list.majors[0].scoreList}">
												<td width="140">${year.year}年平均分</td>
												</c:forEach>
											</tr>
											<c:forEach var="major" items="${list.majors}">
											<tr>
												<td>${major.majorName}</td>
												<td>${major.fCategory}</td>
												<c:forEach var="score" items="${major.scoreList}">
													<td>${score.score}</td>
												</c:forEach>
											</tr>
											</c:forEach>
										</tbody>
									</table>
								</div>
							</div>
						</div>	
					</c:forEach>
					</section>
				</c:when>
				</c:choose>
				
				<c:choose>	
				<c:when test="${fn:length(normal) > 0 }">
					<section class="caseSection">
					<h4 class="bg bg-f1">正常方案</h4>
					<c:forEach var="list" items="${normal}" varStatus="loop">
						<div class="media detailContent">
						<a href="javascript:;" class="taoIcon toggleIcon toggle"></a>
							<span class="fl index">${loop.index+1}</span>
							<div class="media-body">
								<h4 class="name badgeRow">
									<em class="badgetitle vm">${list.collegeName}</em>
									<c:forEach var="featurelist" items="${list.feature}">
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
								</h4>
								<div class="detail">
		<span class="label">院校属地：</span><span class="field">${list.city}</span>
		<span class="label">院校分类：</span><span class="field">${list.type}</span>
		<span class="label">院校性质：</span><span class="field">${list.ownerType}</span>
		<span class="label">院校层次：</span><span class="field">${list.level}</span>
								</div>
								
				<div class="tableWrap">
					<table class="table table-bordered text-center">
						<tr>
						<c:forEach var="toudang" items="${list.tuodangList}">
						<td>${toudang.type}</td>
						</c:forEach>
						</tr>
						<tr>
							<c:forEach var="toudang" items="${list.tuodangList}">
							<td>${toudang.name}</td>
							</c:forEach>
						</tr>

					</table>
				</div>

								<div class="tableWrap">
									<table class="table table-bordered text-center">
										<tbody>
											<tr>
												<td width="240">专业名称</td>
												<td width="140">所属科类</td>
												<c:forEach var="year" items="${list.majors[0].scoreList}">
												<td width="140">${year.year}年平均分</td>
												</c:forEach>
											</tr>
											<c:forEach var="major" items="${list.majors}">
											<tr>
												<td>${major.majorName}</td>
												<td>${major.fCategory}</td>
												<c:forEach var="score" items="${major.scoreList}">
													<td>${score.score}</td>
												</c:forEach>
											</tr>
											</c:forEach>
										</tbody>
									</table>
								</div>
							</div>
						</div>	
					</c:forEach>
					</section>
				</c:when>
				</c:choose>
				
				<c:choose>	
				<c:when test="${fn:length(conservative) > 0 }">
					<section class="caseSection">
						<h4 class="bg bg-f1">保守方案</h4>
						<c:forEach var="list" items="${conservative}" varStatus="loop">
						<div class="media detailContent">
						<a href="javascript:;" class="taoIcon toggleIcon toggle"></a>
							<span class="fl index">${loop.index+1}</span>
							<div class="media-body">
								<h4 class="name badgeRow">
									<em class="badgetitle vm">${list.collegeName}</em>
									<c:forEach var="featurelist" items="${list.feature}">
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
								</h4>
								<div class="detail">
		<span class="label">院校属地：</span><span class="field">${list.city}</span>
		<span class="label">院校分类：</span><span class="field">${list.type}</span>
		<span class="label">院校性质：</span><span class="field">${list.ownerType}</span>
		<span class="label">院校层次：</span><span class="field">${list.level}</span>
								</div>
								<div class="tableWrap">
					<table class="table table-bordered text-center">
						<tr>
						<c:forEach var="toudang" items="${list.tuodangList}">
						<td>${toudang.type}</td>
						</c:forEach>
						</tr>
						<tr>
							<c:forEach var="toudang" items="${list.tuodangList}">
							<td>${toudang.name}</td>
							</c:forEach>
						</tr>

					</table>
				</div>
								<div class="tableWrap">
									<table class="table table-bordered text-center">
										<tbody>
											<tr>
												<td width="240">专业名称</td>
												<td width="140">所属科类</td>
												<c:forEach var="year" items="${list.majors[0].scoreList}">
												<td width="140">${year.year}年平均分</td>
												</c:forEach>
											</tr>
											<c:forEach var="major" items="${list.majors}">
											<tr>
												<td>${major.majorName}</td>
												<td>${major.fCategory}</td>
												<c:forEach var="score" items="${major.scoreList}">
													<td>${score.score}</td>
												</c:forEach>
											</tr>
											</c:forEach>
										</tbody>
									</table>
								</div>
							</div>
						</div>	
					</c:forEach>
					</section>
				</c:when>
				</c:choose>
				</div>

			</div>
		</div>

		<pre name="majorList">${majorList}</pre>
		<pre name="majorListJson">${majorListJson}</pre>
		<pre name="c">${c}</pre>
		<pre name="cJson">${cJson}</pre>
		<pre name="courseType">${courseType}</pre>
		<pre name="batch">${batch}</pre>
		<pre name="score">${score}</pre>
		<pre name="place">${place}</pre>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.bf529aa6.js"></script><script src="/static/web/js/bookResult.2b40202a.js"></script></body>
</html>