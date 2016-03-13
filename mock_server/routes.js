module.exports = {
	// 页面路由
	'/': 'home.jsp',
	'/box/plan/evaluate_step1': 'evaluateStep1.jsp',
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
	"/box/plan/result"   : 'bookResult.jsp',
	"/box/plan/result2"   : 'evaluateResult.jsp',
	"/library/college"   : 'college.jsp',
	"/library/college/1"   : 'collegeDetail.jsp',
	'/404'   : 'error.jsp',
	'/info'   : 'info.jsp',
	'/infoDetail'   : 'infoDetail.jsp',
	"/library/major"   : 'major.jsp',
	"/library/major2"   : 'major_2.jsp',
	"/box/score_management": "score.jsp",
	"/box/plan/aboard": "aboard.jsp",
	"/box/plan/aboard_success": "aboardSuccess.jsp",
	"/box/expert_order" :"expertOrder.jsp",
	"/box/expert_order_success" : "expertOrderSuccess.jsp",
	"/box/college_faq" :"collegeFaq.jsp",
	"/box/college_faq_detail" :"collegeFaqDetail.jsp",
	"/box/college_faq_success" :"collegeFaqSuccess.jsp",
	"/box/college_faq_history" :"collegeFaqHistory.jsp",
	"/library/subject" : "subject.jsp",
	"/library/score_line": "scoreLine.jsp",
	"/library/aboard_data": "abordData.jsp",
	"/home/signin": "login.jsp",
	"/uploader": "uploader.jsp",
	"/pay/book": "pay/book.jsp",
	"/pay/evaluate": "pay/evaluate.jsp",
	//异步加载
	'post::/v2/client/loadmore/test' : 'mock::api/test.json',
	'post::/v2/client/loadmore/history' : 'mock::api/history.json',
	'post::/v2/client/loadmore/question' : 'mock::api/question.json',
	'post::/system/city' : 'mock::api/city.json',
	'post::/v2/client/1/data/college' : 'mock::api/college.json',
	'post::/v2/client/1/data/college/1/majors' : 'mock::api/major.json',
	'post::/v2/client/1/profile/favor/college/add' : 'mock::api/addFav.json',
	'post::/v2/client/1/profile/favor/major/add' : 'mock::api/addFav.json',
	'post::/v2/client/1/profile/favor/delete' : 'mock::api/delFav.json',
	'post::/v2/client/auth/signin' : 'mock::api/siginin.json',
	'post::/v2/client/auth/requestCode' : 'mock::ap/profile/favor/major/addi/code.json',
	'post::/v2/client/auth/signup' : 'mock::api/signup.json',
	'get::/v2/client/1/data/major/all'  : 'mock::api/majorList.json',
	'post::/v2/client/1/data/major' :  'mock::api/majors.json',
	'post::/v2/client/1/news/down':  'mock::api/down.json',
	'post::/v2/client/1/news/up':  'mock::api/up.json',
	'post::/v2/client/1/profile/favor/news/add' : 'mock::api/addInfoFav.json',
	'post::/v2/client/1/tzy/mtest/code' : 'mock::api/verifyCode.json',
	'/system/area' : 'mock::api/cityList.json',
	'/system/city' : 'mock::api/cityList2.json',
	'post::/v2/client/getCollegeList' : 'mock::api/collegeJSON.json',
	'post::/v2/client/getMajor'   : 'mock::api/majorJSON.json',
	'/v2/client/1/news': 'mock::api/news.json',
	'post::/v2/client/1/tzy/plan/wishes/step1' :  'mock::api/step1.json',
	'post::/v2/client/1/tzy/plan/wishes/step2' : 'mock::api/step2.json',
	'post::/v2/client/1/tzy/plan/wishes/step3' : 'mock::api/step3.json',
	'/v2/client/1/tzy/plan/wishes/step4': 'mock::api/step4.json',
	'post::/v2/client/1/pay' : 'mock::api/pay.json',
	'/v2/client/1/profile/score/detail' : 'mock::api/scoreDetail.json',
	'post::/v2/client/1/profile/score/edit': 'mock::api/scoreEdit.json',
	'post::/v2/client/getStateUrl' : "mock::api/state.json",
	'post::/v2/client/1/tzy/plan/abroad/create': "mock::api/abroad.json",
	'post::/v2/client/1/tzy/qa/1/ask' : "mock::api/ask.json",
	'/v2/client/1/tzy/qa/1' : "mock::api/qaList.json"

};