<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

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
											<h3>
											<a href="/library/major/${list.majorId}" class="textLink" target="_blank">${list.majorName}</a>
											<small class="g9">
												${list.batch}
												<c:if test="${list.field != null and list.field != ''}" >(${list.field})</c:if>
											</small></h3>
											<h4 class="name badgeRow">
												<a class="badgetitle vm textLink" href="/library/college/${list.collegeId}" target="_blank" >${list.collegeName}</a>
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
			<div class="orange tc f24 mt10 mb10">2017年录取情况</div>
			<table class="table table-bordered text-center">
				<thead>
					<tr>
						<td width="240">录取分</td>
						<td width="140">专业位次号</td>
						<td width="140">学制</td>
						<td width="140">人数</td>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="score" items="${list.scoreList}">
					<tr>
						<td>${score.admittedScore}分</td>
						<td>${score.admittedRank}</td>
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
											<h3>
											<a href="/library/major/${list.majorId}" class="textLink" target="_blank">${list.majorName}</a>
											<small class="g9">
												${list.batch}<c:if test="${list.field != null and list.field != ''}" >(${list.field})</c:if></small></h3>
											<h4 class="name badgeRow">
												
												
												<a class="badgetitle vm textLink" href="/library/college/${list.collegeId}" target="_blank" >${list.collegeName}</a>

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
			<div class="orange tc f24 mt10 mb10">2017年录取情况</div>
			<table class="table table-bordered text-center">
				<thead>
					<tr>
						<td width="240">录取分</td>
						<td width="140">专业位次号</td>
						<td width="140">学制</td>
						<td width="140">人数</td>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="score" items="${list.scoreList}">
					<tr>
						<td>${score.admittedScore}分</td>
						<td>${score.admittedRank}</td>
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
											<h3>
											<a href="/library/major/${list.majorId}" class="textLink" target="_blank">${list.majorName}</a>
											<small class="g9">
												${list.batch}<c:if test="${list.field != null and list.field != ''}" >(${list.field})</c:if></small></h3>
											<h4 class="name badgeRow">
												
												<a class="badgetitle vm textLink" href="/library/college/${list.collegeId}" target="_blank" >${list.collegeName}</a>

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
			<div class="orange tc f24 mt10 mb10">2017年录取情况</div>
			<table class="table table-bordered text-center">
				<thead>
					<tr>
						<td width="240">录取分</td>
						<td width="140">专业位次号</td>
						<td width="140">学制</td>
						<td width="140">人数</td>
					</tr>
				</thead>
				<tbody>
					<c:forEach var="score" items="${list.scoreList}">
					<tr>
						<td>${score.admittedScore}分</td>
						<td>${score.admittedRank}</td>
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