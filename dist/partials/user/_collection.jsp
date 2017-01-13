<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<section class="contentInner collection">
<div class="topWell">
	<em class="square vm"></em><span class="vm">我的收藏</span>
</div>
<div class="content">

	<div class="wellWrapper tabs" id="collectionWrapper">
		<nav>                
            <a class="tab-item current" href="javascript:;">院校</a>
            <a class="tab-item" href="javascript:;">专业</a>
            <a class="tab-item" href="javascript:;">资讯</a>
        </nav>
		
		<div class="content-wrap">
			<section class="tab-box schoolWrap current">
				
				<div class="schoolListWrap">
					<ul class="schoolList">
						
					</ul>
					
				</div>

			</section>
			<section class="tab-box majorWrap">
				
				<div class="majorListWrap">
					<ul class="majorList">
						
					</ul>

				</div>

			</section>
			<section class="tab-box infoWrap">
				<div class="infoListWrap">
					<ul class="favorInfoList">
						
					</ul>
				</div>
			</section>
		</div>
	</div>
</div>
</section>