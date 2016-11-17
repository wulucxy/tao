<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

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