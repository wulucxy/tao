module.exports = {
	// 页面路由
	'/': 'home.jsp',
	'/default': 'homeV2.jsp',
	'/box/plan/evaluate_step1': 'evaluateStep1.jsp',
	'/box/plan/es2': 'evaluateStep2Back.jsp',
	'/box/plan/evaluate_step2': 'evaluateStep2.jsp',
	'/box/plan/evaluate_step3': 'evaluateStep3.jsp',
	"/box/plan/major_exam1"   : 'majorExam1.jsp',
	"/box/plan/major_exam2"   : 'majorExam2.jsp',
	"/box/plan/major_exam3"   : 'majorExam3.jsp',
	'/user'   : 'user.jsp',
	"/box/plan/book_step2"   : 'bookStep2.jsp',
	"/box/plan/book_step1"   : 'bookStep1.jsp',
	"/box/plan/book_step3"   : 'bookStep3.jsp',
	"/box/plan/book_step4"   : 'bookStep4.jsp',
	"/box/plan/result"   : 'bookResultV2.jsp',
	"/box/plan/result2"   : 'evaluateResult.jsp',
	"/library/college"   : 'college.jsp',
	"/library/college/1"   : 'collegeDetail.jsp',
	'/404'   : 'error.jsp',
	'/infoV2'   : 'infoV2.jsp',
	'/info'   : 'info.jsp',
	'/infoDetail'   : 'infoDetail.jsp',
	"/library/major"   : 'major.jsp',
	"/library/major/1"   : 'major_2.jsp',
	"/box/score_management": "score.jsp",
	"/box/plan/aboard": "aboard.jsp",
	"/box/plan/aboardSuccess": "aboardSuccess.jsp",
	"/expertOrder" :"expertOrder.jsp",
	"/expertOrderSuccess" : "expertOrderSuccess.jsp",
	"/box/college_faq" :"collegeFaq.jsp",
	"/box/college_faq/1" :"collegeFaqDetail.jsp",
	"/box/college_faq/success" :"collegeFaqSuccess.jsp",
	"/box/college_faq/history" :"collegeFaqHistory.jsp",
	"/library/subject" : "subject.jsp",
	"/library/score_line": "scoreLine.jsp",
	"/library/score_line/result": "scoreLineResult.jsp",
	"/library/aboard_data": "aboardData.jsp",
	"/home/signin": "login.jsp",
	"/uploader": "uploader.jsp",
	"/pay/wishes": "pay/book.jsp",
	"/pay/assessment": "pay/assessment.jsp",
	"/sampleEvaluate" : "sampleEvaluate.jsp",
	"/sampleWishes" : "sampleWishes.jsp",
	"/recommendUni" : "recommendUni.jsp",
	"/coupon/share" : "share.jsp",
	"/coupon/receive" : "couponReceive.jsp",
	"/appointment/create" : "createAppointment.jsp",
	'/moduleSiteList'   : 'moduleSiteList.jsp',
	'/bangMobile'   : 'bangMobile.jsp',
	'/completeInfo'   : 'completeInfo.jsp',
	'/scoreTransformer'   : 'scoreTransformer.jsp',
	//异步加载
	'/v2_1/client/1/tzy/mtest/all' : 'mock::api/test.json',
	'/v2_1/client/1/profile/plan/list' : 'mock::api/history.json',
	'post::/v2_1/client/loadmore/question' : 'mock::api/question.json',
	'post::/system/city' : 'mock::api/city.json',
	'post::/v2_1/client/1/data/college' : 'mock::api/college.json',
	'post::/v2_1/client/1/data/college/search' : 'mock::api/college.json',
	'post::/v2_1/client/1/data/college/1/majors' : 'mock::api/majorDetailList.json',
	'/v2_1/client/1/data/major/1872/category/28' : 'mock::api/major.json',
	'post::/v2_1/client/1/profile/favor/college/add' : 'mock::api/addFav.json',
	'post::/v2_1/client/1/profile/favor/major/add' : 'mock::api/addFav.json',
	'post::/v2_1/client/1/profile/favor/delete' : 'mock::api/delFav.json',
	'post::/v2_1/client/auth/signin' : 'mock::api/siginin.json',
	'post::/v2_1/client/auth/requestCode' : 'mock::api/profile/favor/major/addi/code.json',
	'post::/v2_1/client/auth/signup' : 'mock::api/signup.json',
	'get::/v2_1/client/1/data/major/all'  : 'mock::api/majorList.json',
	'get::/v2_1/client/1/data/major/categoryList'  : 'mock::api/categoryList.json',
	'post::/v2_1/client/1/data/major' :  'mock::api/majors.json',
	'post::/v2_1/client/1/news/down':  'mock::api/down.json',
	'post::/v2_1/client/1/news/up':  'mock::api/up.json',
	'post::/v2_1/client/1/profile/favor/news/add' : 'mock::api/addInfoFav.json',
	'post::/v2_1/client/1/tzy/mtest/code' : 'mock::api/verifyCode.json',
	'/system/area' : 'mock::api/cityList.json',
	'/system/city' : 'mock::api/cityList2.json',
	'post::/v2_1/client/1/data/college/search' : 'mock::api/collegeJSON.json',
	'post::/v2_1/client/1/highSchool/search' : 'mock::api/highschoolJSON.json',
	'/v2_1/client/1/news': 'mock::api/news.json',
	'post::/v2_1/client/1/tzy/plan/wishes/step1' :  'mock::api/step1.json',
	'post::/v2_1/client/1/tzy/plan/wishes/step2' : 'mock::api/step2.json',
	'post::/v2_1/client/1/tzy/plan/wishes/step3' : 'mock::api/step3.json',
	'post::/v2_1/client/1/tzy/plan/wishes/step4': 'mock::api/step4.json',
	'post::/v2_1/client/1/pay' : 'mock::api/pay.json',
	'/v2_1/client/1/profile/score/detail' : 'mock::api/scoreDetail.json',
	'post::/v2_1/client/1/profile/score/edit': 'mock::api/scoreEdit.json',
	'post::/v2_1/client/getStateUrl' : "mock::api/state.json",
	'post::/v2_1/client/1/tzy/plan/abroad/create': "mock::api/abroad.json",
	'post::/v2_1/client/1/tzy/qa/1/ask' : "mock::api/ask.json",
	'/v2_1/client/1/tzy/qa/1' : "mock::api/qaList.json",
	'post::/v2_1/client/1/tzy/plan/assessment/step1':"mock::api/assessStep1.json",
	'post::/v2_1/client/1/tzy/plan/assessment/step2':"mock::api/assessStep2.json",
	'post::/v2_1/client/1/tzy/plan/assessment/create':"mock::api/assessStep3.json",
	'/v2_1/client/1/profile/favor/college' : "mock::api/favCollege.json",
	'/v2_1/client/1/profile/favor/major' : "mock::api/favMajor.json",
	'/v2_1/client/1/profile/favor/news' : "mock::api/favNews.json",
	'/v2_1/client/1/profile/qa': "mock::api/favQaList.json",
	'/v2_1/client/1/tzy/appointment/all': "mock::api/appointment.json",
	'/v2_1/client/1/tzy/appointment/types': "mock::api/appointmentType.json",
	'/v2_1/client/1/data/major/category/3': "mock::api/major.json",
	'post::/v2_1/client/1/data/major/search':"mock::api/major.json",
	'/v2_1/client/1/data/college/threshold/compare':"mock::api/compare.json",
	'/v2_1/client/1/data/major/college':"mock::api/collegeDetailList.json",
	'post::/v2_1/client/1/tzy/plan/abroad/assessment':"mock::api/abordDataList.json",
	'post::/v2_1/client/1/data/subject/search':"mock::api/subjectList.json",
	'post::/v2_1/client/1/data/subject/2482':"mock::api/subjectDetailList.json",
	'post::/v2_1/client/1/tzy/qa/history':"mock::api/historyList.json",
	'post::/v2_1/client/1/data/college/1872/category':"mock::api/collegeMajorList.json",

	'post::/v2_1/client/1/tzy/appointment/create':"mock::api/appointmentCreation.json",
	'post::/v2_1/client/1/profile/couponListWeb':"mock::api/couponList.json",
	'post::/v2_1/client/1/coupon/dole':"mock::api/couponDole.json",
	'post::/v2_1/client/1/tzy/plan/scoreChange':"mock::api/scoreChange.json"

};