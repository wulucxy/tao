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
<link href="/static/web/css/vendors.0cd2f40b.css" rel="stylesheet"><link href="/static/web/css/bookResultV2.ee916c89.css" rel="stylesheet"></head>
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
						
						<div class="content-wrap">
							<section class="tab-box rushWrap current detailContent">
								<c:choose>	
									<c:when test="${fn:length(radical) > 0 }">
										<c:forEach var="list" items="${radical}" varStatus="loop">
										<div class="caseSection">
											<h3>${list.majorName} <small class="g9">
												${list.batch}</small></h3>
											<h4 class="name badgeRow">
												<em class="badgetitle vm">${list.collegeName}</em>
												<c:forEach var="featurelist" items="${list.feature}">
													<span class="badge">${featurelist.name}</span>
												</c:forEach>
											</h4>
		<div class="detail">
		<i class="icon icon-city"></i><span class="field">${list.city}</span>
		<span class="label">院校分类：</span><span class="field">${list.type}</span>
		<span class="label">院校性质：</span><span class="field">${list.ownerType}</span>
		<span class="label">院校层次：</span><span class="field">${list.level}</span>
		</div>
		
	<c:choose>
		<c:when test="${fn:length(list.scoreList) > 0}">
		<div class="tableWrap">
			<div class="orange tc f24 mt10 mb10">2016年录取情况</div>
			<table class="table table-bordered text-center">
				<thead>
					<tr>
						<td width="240"></td>
						<td width="240">平均分</td>
						<td width="140">分差</td>
						<td width="140">学制</td>
						<td width="140">人数</td>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="score" items="${list.scoreList}">
					<tr>
						<td>
							<c:choose>
							 	<c:when test="${score.courseType == 1}">
							   		文科
								</c:when>
								<c:when test="${score.courseType == 0}">
							   		理科
								</c:when>
							 	<c:otherwise>
									
								</c:otherwise>
							</c:choose>
						</td>
						<td>${score.admittedScore}分</td>
						<td>${score.diffScore}分</td>
						<td>${score.eductionalSystme}年</td>
						<td>${score.recruitCount}人</td>
					</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
		</c:when>
	 	<c:otherwise>
			<div class="f16 g3 empty">暂无历史数据</div>
		</c:otherwise>
	</c:choose>


										</div>
										</c:forEach>
									</c:when>
									<c:otherwise>
										<div class="f16 g3">暂无数据</div>
									</c:otherwise>
								</c:choose>
							</section>

							<section class="tab-box normalWrap detailContent">
								<c:choose>	
									<c:when test="${fn:length(normal) > 0 }">
										<c:forEach var="list" items="${normal}" varStatus="loop">
										<div class="caseSection">
											<h3>${list.majorName} <small class="g9">
												${list.batch}</small></h3>
											<h4 class="name badgeRow">
												<em class="badgetitle vm">${list.collegeName}</em>
												<c:forEach var="featurelist" items="${list.feature}">
													<span class="badge">${featurelist.name}</span>
												</c:forEach>
											</h4>
		<div class="detail">
		<i class="icon icon-city"></i><span class="field">${list.city}</span>
		<span class="label">院校分类：</span><span class="field">${list.type}</span>
		<span class="label">院校性质：</span><span class="field">${list.ownerType}</span>
		<span class="label">院校层次：</span><span class="field">${list.level}</span>
		</div>
		
	<c:choose>
		<c:when test="${fn:length(list.scoreList) > 0}">
		<div class="tableWrap">
			<div class="orange tc f24 mt10 mb10">2016年录取情况</div>
			<table class="table table-bordered text-center">
				<thead>
					<tr>
						<td width="240"></td>
						<td width="240">平均分</td>
						<td width="140">分差</td>
						<td width="140">学制</td>
						<td width="140">人数</td>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="score" items="${list.scoreList}">
					<tr>
						<td>
							<c:choose>
							 	<c:when test="${score.courseType == 1}">
							   		文科
								</c:when>
								<c:when test="${score.courseType == 0}">
							   		理科
								</c:when>
							 	<c:otherwise>
									
								</c:otherwise>
							</c:choose>
						</td>
						<td>${score.admittedScore}分</td>
						<td>${score.diffScore}分</td>
						<td>${score.eductionalSystme}年</td>
						<td>${score.recruitCount}人</td>
					</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
		</c:when>
	 	<c:otherwise>
			<div class="f16 g3 empty">暂无历史数据</div>
		</c:otherwise>
	</c:choose>


										</div>
										</c:forEach>
									</c:when>
									<c:otherwise>
										<div class="f16 g3">暂无数据</div>
									</c:otherwise>
								</c:choose>
							</section>

							<section class="tab-box conserve detailContent">
								<c:choose>	
									<c:when test="${fn:length(conservative) > 0 }">
										<c:forEach var="list" items="${conservative}" varStatus="loop">
										<div class="caseSection">
											<h3>${list.majorName} <small class="g9">
												${list.batch}</small></h3>
											<h4 class="name badgeRow">
												<em class="badgetitle vm">${list.collegeName}</em>
												<c:forEach var="featurelist" items="${list.feature}">
													<span class="badge">${featurelist.name}</span>
												</c:forEach>
											</h4>
		<div class="detail">
		<i class="icon icon-city"></i><span class="field">${list.city}</span>
		<span class="label">院校分类：</span><span class="field">${list.type}</span>
		<span class="label">院校性质：</span><span class="field">${list.ownerType}</span>
		<span class="label">院校层次：</span><span class="field">${list.level}</span>
		</div>
		
	<c:choose>
		<c:when test="${fn:length(list.scoreList) > 0}">
		<div class="tableWrap">
			<div class="orange tc f24 mt10 mb10">2016年录取情况</div>
			<table class="table table-bordered text-center">
				<thead>
					<tr>
						<td width="240"></td>
						<td width="240">平均分</td>
						<td width="140">分差</td>
						<td width="140">学制</td>
						<td width="140">人数</td>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="score" items="${list.scoreList}">
					<tr>
						<td>
							<c:choose>
							 	<c:when test="${score.courseType == 1}">
							   		文科
								</c:when>
								<c:when test="${score.courseType == 0}">
							   		理科
								</c:when>
							 	<c:otherwise>
									
								</c:otherwise>
							</c:choose>
						</td>
						<td>${score.admittedScore}分</td>
						<td>${score.diffScore}分</td>
						<td>${score.eductionalSystme}年</td>
						<td>${score.recruitCount}人</td>
					</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
		</c:when>
	 	<c:otherwise>
			<div class="f16 g3 empty">暂无历史数据</div>
		</c:otherwise>
	</c:choose>


										</div>
										</c:forEach>
									</c:when>
									<c:otherwise>
										<div class="f16 g3">暂无数据</div>
									</c:otherwise>
								</c:choose>
							</section>
						</div>
					</div>
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
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/bookResultV2.js"></script></body>
</html>