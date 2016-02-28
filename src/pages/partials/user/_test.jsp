<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<section class="contentInner test">
	<div class="topWell">
		<em class="square vm"></em><span class="vm">历史方案</span>
	</div>
	<div class="content">
		<div class="wellWrapper load-more-list" id="testWrapper" data-url="${param.loadMoreUrl}" data-tmpl="${param.loadMoreTmpl}">
		</div>

		<!-- 加载更多模块 -->
		<%@ include file = "/partials/_loadMore.jsp" %>
	
	</div>
</section>