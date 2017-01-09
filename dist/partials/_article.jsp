<head><link href="/static/web/css/vendors.95838b90.css" rel="stylesheet"></head><%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<article>
	<div class="head">
		<h4>${title}</h4>
		<div class="subTitle clearfix">
			<c:forEach var="tag" items="${tagList}">
			  <span class="fl tag mr10">${tag}</span>
			</c:forEach>
			<span class="fr moment">${moment}</span>
		</div>
	</div>
	
	<div class="body">
		${context}
	</div>
	
</article><script type="text/javascript" src="/static/web/js/vendors.4f264994.js"></script>