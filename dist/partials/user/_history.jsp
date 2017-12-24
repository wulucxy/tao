<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
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
					  <option value="1">高考志愿定制</option>
					  <option value="2">高考志愿评估</option>
				</select>
			</div>
		</div>
		<div class="errInfo">
		 </div>
	</div>

	<div class="wellWrapper load-more-list" id="historyWrapper">
	</div>
	
</div>
</section><script type="text/javascript" src="/static/web/js/vendors.js"></script>