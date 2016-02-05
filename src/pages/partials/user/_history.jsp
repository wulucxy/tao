<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<section class="contentInner history">
<div class="topWell">
	<em class="square vm"></em><span class="vm">历史方案</span>
</div>
<div class="content">

	<div class="row clearfix">
		<label for="caseType" class="control-label column col1 fl">
			<i class="icon-location"></i>
			<em class="vm">方案类型：</em></label>
		<div class="col2 selectWrap rel">
			<div class="fieldWrap">
				<select class="form-control" name="caseType" id="caseType">
					  <option value="0">不限</option>
					  <option value="1">高考方案定制</option>
					  <option value="2">高考志愿评估</option>
					  <option value="3">专业选择测试</option>
				</select>
			</div>
		</div>
		<div class="errInfo">
		 </div>
	</div>

	<div class="wellWrapper load-more-list" id="historyWrapper">
		<c:forEach var="list" items="${historyList}">
		<div class="well clearfix" type ="${list.type}">
			<div class="media fl">
				<div class="span fl">
					<span class="btn btn-primary">${list.caseName}</span>
				</div>
				<div class="media-body g3 well_body">
					<p>
						<span class="label">订单号：</span><span class="field">${list.order}</span>
						<span class="label">生成日期：</span><span class="field">${list.createTime}</span>
					</p>
					<p>
						<span class="label">高考分数：</span><span class="field">${list.score}</span>
						<span class="label">全省排名：</span><span class="field">${list.place}</span>
					</p>
				</div>
			</div>
			<div class="detailInfo fr">
				<div class="row btnRow"><a href="#" class="btn btn-primary btn-medium" targe="_blank">付款</a></div>
				<c:choose>
				    <c:when test="${list.detailUrl != ''}">					
						<a class="detailTxt" href="${list.detailUrl}" target="_blank">查看详细信息</a>
					</c:when>
					<c:otherwise>
						<a href="javascript:;" >测试&nbsp;</a>
					</c:otherwise>
				</c:choose>
			</div>
		</div>
		</c:forEach>
	</div>

	<%@ include file = "/partials/_loadMore.jsp" %>

</div>
</section>