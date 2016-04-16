<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="java.util.Map"%>
<%@ page import="java.util.ArrayList"%>
<%@ page import="org.apache.http.util.EntityUtils"%>
<%@ page import="com.moekee.base.modules.common.utils.CareerNode"%>
<%@ page import="com.moekee.base.modules.common.utils.CareerRow"%>
<%@ page import="com.moekee.base.modules.common.utils.CareerTable"%>
<%@ page import="com.moekee.base.modules.common.utils.CareerComm"%>
<%@ page contentType="text/html; charset=UTF-8" %>


<style type="text/css">


.table{width:90%;margin:auto;border-collapse:collapse;}
.table td,.table th{padding:10px 0 10px 0;color:#333333;font-size:16px;}
.table .t_head{text-align:center;border:1px solid #4dbfdf;}
.table .t_row{text-align:center;border-right:10px solid #4dbfdf;padding-right:5px;}
.testResult{
	padding-top:32px;
	background-color:#fff;
}

.testResult .content{padding:0 32px 32px;margin-bottom: 32px;border-bottom:1px solid #dddddd;}

p{margin-left:20px;margin-right:40px;font-size:1em;}
.ParaNoIndent{font-size:1em;}
/*ParaIndentBold*/
.ParaIndentBold{font-size:1em;font-family: "Microsoft YaHei!";font-weight:bold;}
/*ParaIndentBold*/
.ParaIndentBold{font-size:1em;font-family: "Microsoft YaHei!";}
/*ParaCenter*/
.ParaCenter{
		font-size:1em;
		font-weight:bold;
		margin:10px;
		margin-left:20px;
		margin-right:40px;
		text-align:center;
		font-family: "Microsoft YaHei!";
	}
	
.ParaCenter img{width:80%;margin:20px;}
</style>
<title>职业测试</title>

<link href="/static/web/css/vendors.5dd41735.css" rel="stylesheet"><link href="/static/web/css/vendors.afa491ec.css" rel="stylesheet"></head>
	<body id="zycs">
	<div class="content">
		<c:forEach items="${bjsbList}" var="unit" varStatus="status">
			<c:if test="${ unit.key == 'ParaNoIndent'}">
				<p class="ParaNoIndent">${unit.content}</p>
			</c:if>
			<c:if test="${ unit.key == 'ParaNoIndentBold'}">
				<p class="ParaNoIndentBold">${unit.content}</p>
			</c:if>
			<c:if test="${ unit.key == 'ParaIndent'}">
				<p class="ParaIndent">${unit.content}</p>
			</c:if>
			<c:if test="${ unit.key == 'ParaIndentBold'}">
				<p class="ParaIndentBold">${unit.content}</p>
			</c:if>
			<c:if test="${ unit.key == 'ParaCenter'}">
				<p class="ParaCenter">${unit.content}</p>
			</c:if>
			<c:if test="${ unit.key == 'ImageName'}">
				<img src="${unit.content}">
			</c:if>
			<c:if test="${ unit.key == 'Table'}">
				<table  class="table">
				<tr>
					<c:forEach items="${unit.content.head}" var="head" varStatus="status">
						<th class="t_head">${head}</th>
					</c:forEach>
				</tr>
				<c:forEach items="${unit.content.rows}" var="row" varStatus="status">
					<tr>
						<c:forEach items="${row}" var="node" varStatus="status">
							<c:if test="${node.type == 1}">
								<td class="t_head">${node.value}</td>
							</c:if>
							<c:if test="${node.type >1}">
								<td class="t_head" rowspan="${node.type}">${node.value}</td>
							</c:if>
						</c:forEach>
					</tr>
				</c:forEach>
				</table>
			</c:if>
		</c:forEach>
	</div>
	<script>
	var ua = navigator.userAgent.toLowerCase();	
	if (/iphone|ipad|ipod/.test(ua)) {
		    document.getElementById('ee').style.fontSize = 1.5 + "em";
		    getElementsByClassName('ParaIndentBold').style.fontSize = 1.5 +"em";
	} else if (/android/.test(ua)) {
		   
	}
	</script>