<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<%@ include file = "/partials/_meta.jsp" %>
	<title>专业选择测试</title>
<link href="/static/web/css/vendors.da0ee6f1.css" rel="stylesheet"><link href="/static/web/css/majorExam1.d3367ccd.css" rel="stylesheet"></head>
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
							<div class="g3">“升学指导测验——专业选择测试”由国家教育部考试中心研制，授权“淘志愿”平台供浙江考生使用。“升学指导测验——专业选择测试”系统是从中国学生职业生涯规划的角度出发，专门研发用于权威指导中国高中生大学专业选择的测试系统，为中国学生度身定制。测试结果将生成个性化的测试结果报告书，分析学生兴趣特长，推荐学生选择大学专业。</div>
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
	<script src="/static/web/js/vendors.5ef56f5a.js"></script><script src="/static/web/js/majorExam1.c0314acf.js"></script></body>
</html>