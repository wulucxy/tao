<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>专业选择测试</title>
<link href="/static/web/css/vendors.dea3f0db.css" rel="stylesheet"><link href="/static/web/css/majorExam1.d3367ccd.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
	<!-- 保存province属性 -->
	<input type="hidden" name="province" value="${user.province.code}">

	 <div class="container proTestWrapper">
		<section class="s-proTest">
			<div class="content">
				<h3 class="clearfix title neeRow">
					<span class="fl s-title">
						<span class="vm">专业选择测试</span>
						<span class="badge"><i class="icon-nee"></i>
						<em class="vm">教育部考试中心独家授权</em></span>
						<em class="underLine"></em>	
					</span>
				</h3>
				
				<div class="contentWrap">
					<div class="media">
						<span class="fl imgWrap"><img src="/static/web/img/test.png" class="responsive"></span>
						<div class="media-body lh2">
							<div class="g3">我们都知道人与人在很多方面是不同的 ，每个人既有与他人相似的一面，也有自己独特的一面。 例如，有的人喜欢与很多人聚在一起，聊一些关于哲学、生命等比较深入的话题，或者谈谈娱乐新闻、茶米油盐等日常生活的话题； 有的人则比较喜欢独处，面对很多人的时候则显得沉默寡言，甚至是无所适从， 但如果让他们组装电脑或是修理家用电器时，他们那种专注投入、 乐享其中的状态简直让人吃惊。由此可知，无论哪种类型的人，都既有自身独特的优势， 也有不容忽视的劣势，只有扬长避短，才能最大限度地发挥自己的优势。</div>
						</div>
					</div>
					
					<div class="footerCnt">
						<div class="row btnRow">
		                    <a href="javascript:;" class="btn btn-positive btn-form" id="goProTest">
		                        <em class="subTxt">填写授权码，并开始测试</em>
		                    </a>
		      			</div>
					</div>
				</div>
			</div>	
		</section>
	</div>
	
	
	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/majorExam1.js"></script></body>
</html>