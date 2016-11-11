webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(14);
	__webpack_require__(108);
	var $ = window.$ || __webpack_require__(36);
	
	//工具类方法
	var util = __webpack_require__(37);
	
	//公共方法
	var common = __webpack_require__(38);
	
	//自定义功能写下面
	//切换顶部nav高亮
	common.switchNav(2);
	
	//数据绑定
	var dataSet = __webpack_require__(110);
	
	dataSet.init({
		completeCallback : function(){
			$(".toggle").on("click",function(e){
				e.preventDefault();
				var oRow = $(this).closest(".detailContent");
				oRow.toggleClass("open");
			});
		}
	});

/***/ },

/***/ 104:
/***/ function(module, exports) {

	module.exports = [
	    {
	        "code": "AT",
	        "name": "奥地利"
	    },
	    {
	        "code": "AU",
	        "name": "澳大利亚",
	        "states": [
	            {
	                "code": "AU0001",
	                "name": "南澳大利亚"
	            },
	            {
	                "code": "AU0002",
	                "name": "塔斯马尼亚"
	            },
	            {
	                "code": "AU0003",
	                "name": "新南威尔士"
	            },
	            {
	                "code": "AU0004",
	                "name": "维多利亚"
	            },
	            {
	                "code": "AU0005",
	                "name": "西澳大利亚"
	            },
	            {
	                "code": "AU0006",
	                "name": "昆士兰"
	            },
	            {
	                "code": "AU0007",
	                "name": "首都领地"
	            },
	            {
	                "code": "AU0008",
	                "name": "北领地"
	            }
	        ]
	    },
	    {
	        "code": "CA",
	        "name": "加拿大",
	        "states": [
	            {
	                "code": "CA0001",
	                "name": "安大略省"
	            },
	            {
	                "code": "CA0002",
	                "name": "魁北克省"
	            },
	            {
	                "code": "CA0003",
	                "name": "新斯科舍省"
	            },
	            {
	                "code": "CA0004",
	                "name": "新不伦瑞克省"
	            },
	            {
	                "code": "CA0005",
	                "name": "曼尼托巴省"
	            },
	            {
	                "code": "CA0006",
	                "name": "不列颠哥伦比亚省"
	            },
	            {
	                "code": "CA0007",
	                "name": "爱德华王子岛"
	            },
	            {
	                "code": "CA0008",
	                "name": "阿尔伯塔省"
	            },
	            {
	                "code": "CA0009",
	                "name": "萨斯喀彻温"
	            },
	            {
	                "code": "CA0010",
	                "name": "纽芬兰-拉布拉多"
	            }
	        ]
	    },
	    {
	        "code": "CH",
	        "name": "瑞士",
	        "states": [
	            {
	                "code": "CH0001",
	                "name": "苏黎世州"
	            },
	            {
	                "code": "CH0002",
	                "name": "伯恩州"
	            },
	            {
	                "code": "CH0003",
	                "name": "卢塞恩州"
	            },
	            {
	                "code": "CH0004",
	                "name": "乌里州"
	            },
	            {
	                "code": "CH0005",
	                "name": "施维茨州"
	            },
	            {
	                "code": "CH0006",
	                "name": "上瓦尔登半州"
	            },
	            {
	                "code": "CH0007",
	                "name": "格拉鲁斯州"
	            },
	            {
	                "code": "CH0008",
	                "name": "楚格州"
	            },
	            {
	                "code": "CH0009",
	                "name": "弗里堡州"
	            },
	            {
	                "code": "CH0010",
	                "name": "索洛图恩州"
	            },
	            {
	                "code": "CH0011",
	                "name": "巴泽尔城市半州"
	            },
	            {
	                "code": "CH0012",
	                "name": "巴泽尔乡村半州"
	            },
	            {
	                "code": "CH0013",
	                "name": "沙夫豪森州"
	            },
	            {
	                "code": "CH0014",
	                "name": "外阿彭策尔半州"
	            },
	            {
	                "code": "CH0015",
	                "name": "内阿彭策尔半州"
	            },
	            {
	                "code": "CH0016",
	                "name": "圣加仑州"
	            },
	            {
	                "code": "CH0017",
	                "name": "格劳宾登州"
	            },
	            {
	                "code": "CH0018",
	                "name": "阿尔高州"
	            },
	            {
	                "code": "CH0019",
	                "name": "图尔高州"
	            },
	            {
	                "code": "CH0020",
	                "name": "提契诺州"
	            },
	            {
	                "code": "CH0021",
	                "name": "沃州"
	            },
	            {
	                "code": "CH0022",
	                "name": "瓦莱州"
	            },
	            {
	                "code": "CH0023",
	                "name": "纳沙泰尔州"
	            },
	            {
	                "code": "CH0024",
	                "name": "日内瓦州"
	            },
	            {
	                "code": "CH0025",
	                "name": "汝拉州"
	            }
	        ]
	    },
	    {
	        "code": "DE",
	        "name": "德国",
	        "states": [
	            {
	                "code": "DE0001",
	                "name": "科隆州"
	            },
	            {
	                "code": "DE0002",
	                "name": "中弗兰肯州"
	            },
	            {
	                "code": "DE0003",
	                "name": "弗赖堡州"
	            },
	            {
	                "code": "DE0004",
	                "name": "上弗兰肯州"
	            },
	            {
	                "code": "DE0005",
	                "name": "巴登-符腾堡州"
	            },
	            {
	                "code": "DE0006",
	                "name": "斯图加特州"
	            },
	            {
	                "code": "DE0007",
	                "name": "拜恩州"
	            },
	            {
	                "code": "DE0008",
	                "name": "施瓦本州"
	            },
	            {
	                "code": "DE0009",
	                "name": "柏林州"
	            },
	            {
	                "code": "DE0010",
	                "name": "勃兰登堡州"
	            },
	            {
	                "code": "DE0011",
	                "name": "汉堡州"
	            },
	            {
	                "code": "DE0012",
	                "name": "开姆尼斯州"
	            },
	            {
	                "code": "DE0013",
	                "name": "黑森州"
	            },
	            {
	                "code": "DE0014",
	                "name": "达姆施塔特州"
	            },
	            {
	                "code": "DE0015",
	                "name": "北莱茵-威斯特法伦州"
	            },
	            {
	                "code": "DE0016",
	                "name": "德累斯顿州"
	            },
	            {
	                "code": "DE0017",
	                "name": "莱比锡州"
	            },
	            {
	                "code": "DE0018",
	                "name": "萨克森-安哈尔特州"
	            },
	            {
	                "code": "DE0019",
	                "name": "萨克森州"
	            },
	            {
	                "code": "DE0020",
	                "name": "图林根州"
	            },
	            {
	                "code": "DE0021",
	                "name": "布莱梅州"
	            }
	        ]
	    },
	    {
	        "code": "ES",
	        "name": "西班牙"
	    },
	    {
	        "code": "FR",
	        "name": "法国",
	        "states": [
	            {
	                "code": "FR0001",
	                "name": "安省"
	            },
	            {
	                "code": "FR0002",
	                "name": "埃纳省"
	            },
	            {
	                "code": "FR0003",
	                "name": "阿列省"
	            },
	            {
	                "code": "FR0004",
	                "name": "上普罗旺斯阿尔卑斯省"
	            },
	            {
	                "code": "FR0005",
	                "name": "上阿尔卑斯省"
	            },
	            {
	                "code": "FR0006",
	                "name": "滨海阿尔卑斯省 "
	            },
	            {
	                "code": "FR0007",
	                "name": "阿尔代什省"
	            },
	            {
	                "code": "FR0008",
	                "name": "阿登省"
	            },
	            {
	                "code": "FR0009",
	                "name": "阿列日省"
	            },
	            {
	                "code": "FR0010",
	                "name": "普罗旺斯省"
	            },
	            {
	                "code": "FR0011",
	                "name": "奥布省 "
	            },
	            {
	                "code": "FR0012",
	                "name": "奥德省"
	            },
	            {
	                "code": "FR0013",
	                "name": "阿韦龙省"
	            },
	            {
	                "code": "FR0014",
	                "name": "罗讷河口省"
	            },
	            {
	                "code": "FR0015",
	                "name": "卡尔瓦多斯省"
	            },
	            {
	                "code": "FR0016",
	                "name": "康塔尔省"
	            },
	            {
	                "code": "FR0017",
	                "name": "夏朗德省"
	            },
	            {
	                "code": "FR0018",
	                "name": "滨海夏朗德省"
	            },
	            {
	                "code": "FR0019",
	                "name": "谢尔省"
	            },
	            {
	                "code": "FR0020",
	                "name": "科雷兹省"
	            },
	            {
	                "code": "FR0021",
	                "name": "南科西嘉"
	            },
	            {
	                "code": "FR0022",
	                "name": "上科西嘉"
	            },
	            {
	                "code": "FR0023",
	                "name": "科多尔省"
	            },
	            {
	                "code": "FR0024",
	                "name": "阿摩尔滨海省"
	            },
	            {
	                "code": "FR0025",
	                "name": "克勒兹省"
	            },
	            {
	                "code": "FR0026",
	                "name": "多尔多涅省 "
	            },
	            {
	                "code": "FR0027",
	                "name": "杜省"
	            },
	            {
	                "code": "FR0028",
	                "name": "德龙省"
	            },
	            {
	                "code": "FR0029",
	                "name": "厄尔省"
	            },
	            {
	                "code": "FR0030",
	                "name": "厄尔-卢瓦尔省"
	            },
	            {
	                "code": "FR0031",
	                "name": "菲尼斯泰尔省"
	            },
	            {
	                "code": "FR0032",
	                "name": "加尔省"
	            },
	            {
	                "code": "FR0033",
	                "name": "上加龙省"
	            },
	            {
	                "code": "FR0034",
	                "name": "热尔省"
	            },
	            {
	                "code": "FR0035",
	                "name": "吉伦特省"
	            },
	            {
	                "code": "FR0036",
	                "name": "埃罗省"
	            },
	            {
	                "code": "FR0037",
	                "name": "伊勒-维莱讷省"
	            },
	            {
	                "code": "FR0038",
	                "name": "安德尔省"
	            },
	            {
	                "code": "FR0039",
	                "name": "安德尔-卢瓦尔省"
	            },
	            {
	                "code": "FR0040",
	                "name": "伊泽尔省"
	            },
	            {
	                "code": "FR0041",
	                "name": "汝拉省"
	            },
	            {
	                "code": "FR0042",
	                "name": "朗德省"
	            },
	            {
	                "code": "FR0043",
	                "name": "卢瓦尔-谢尔省"
	            },
	            {
	                "code": "FR0044",
	                "name": "卢瓦尔省"
	            },
	            {
	                "code": "FR0045",
	                "name": "上卢瓦尔省"
	            },
	            {
	                "code": "FR0046",
	                "name": "大西洋卢瓦尔省"
	            },
	            {
	                "code": "FR0047",
	                "name": "卢瓦雷省"
	            },
	            {
	                "code": "FR0048",
	                "name": "洛特省"
	            },
	            {
	                "code": "FR0049",
	                "name": "洛特-加龙省"
	            },
	            {
	                "code": "FR0050",
	                "name": "洛泽尔省"
	            },
	            {
	                "code": "FR0051",
	                "name": "曼恩-卢瓦尔省"
	            },
	            {
	                "code": "FR0052",
	                "name": "芒什省"
	            },
	            {
	                "code": "FR0053",
	                "name": "马恩省"
	            },
	            {
	                "code": "FR0054",
	                "name": "上马恩省"
	            },
	            {
	                "code": "FR0055",
	                "name": "马耶讷省"
	            },
	            {
	                "code": "FR0056",
	                "name": "默尔特-摩泽尔省"
	            },
	            {
	                "code": "FR0057",
	                "name": "默兹省"
	            },
	            {
	                "code": "FR0058",
	                "name": "莫尔比昂省"
	            },
	            {
	                "code": "FR0059",
	                "name": "摩泽尔省 "
	            },
	            {
	                "code": "FR0060",
	                "name": "涅夫勒省"
	            },
	            {
	                "code": "FR0061",
	                "name": "诺尔省"
	            },
	            {
	                "code": "FR0062",
	                "name": "瓦兹省"
	            },
	            {
	                "code": "FR0063",
	                "name": "奥恩省"
	            },
	            {
	                "code": "FR0064",
	                "name": "加来海峡省"
	            },
	            {
	                "code": "FR0065",
	                "name": "多姆山省"
	            },
	            {
	                "code": "FR0066",
	                "name": "比利牛斯-大西洋省"
	            },
	            {
	                "code": "FR0067",
	                "name": "上比利尼斯省"
	            },
	            {
	                "code": "FR0068",
	                "name": "东比利尼斯省"
	            },
	            {
	                "code": "FR0069",
	                "name": "下莱茵省"
	            },
	            {
	                "code": "FR0070",
	                "name": "上莱茵省"
	            },
	            {
	                "code": "FR0071",
	                "name": "罗讷省"
	            },
	            {
	                "code": "FR0072",
	                "name": "上索恩省"
	            },
	            {
	                "code": "FR0073",
	                "name": "索恩-卢瓦尔省"
	            },
	            {
	                "code": "FR0074",
	                "name": "萨尔特省"
	            },
	            {
	                "code": "FR0075",
	                "name": "萨瓦省"
	            },
	            {
	                "code": "FR0076",
	                "name": "上萨瓦省"
	            },
	            {
	                "code": "FR0077",
	                "name": "巴黎省"
	            },
	            {
	                "code": "FR0078",
	                "name": "滨海塞纳省"
	            },
	            {
	                "code": "FR0079",
	                "name": "塞纳-马恩省"
	            },
	            {
	                "code": "FR0080",
	                "name": "伊夫林省 "
	            },
	            {
	                "code": "FR0081",
	                "name": "德塞夫勒省"
	            },
	            {
	                "code": "FR0082",
	                "name": "索姆省"
	            },
	            {
	                "code": "FR0083",
	                "name": "塔恩省"
	            },
	            {
	                "code": "FR0084",
	                "name": "塔恩-加龙省"
	            },
	            {
	                "code": "FR0085",
	                "name": "瓦尔省"
	            },
	            {
	                "code": "FR0086",
	                "name": "沃克吕兹省"
	            },
	            {
	                "code": "FR0087",
	                "name": "旺代省"
	            },
	            {
	                "code": "FR0088",
	                "name": "维埃纳省"
	            },
	            {
	                "code": "FR0089",
	                "name": "上维埃纳省"
	            },
	            {
	                "code": "FR0090",
	                "name": "孚日省"
	            },
	            {
	                "code": "FR0091",
	                "name": "约讷省"
	            },
	            {
	                "code": "FR0092",
	                "name": "贝尔福地区"
	            },
	            {
	                "code": "FR0093",
	                "name": "埃松省"
	            },
	            {
	                "code": "FR0094",
	                "name": "上塞纳省"
	            },
	            {
	                "code": "FR0095",
	                "name": "塞纳-圣但尼省"
	            },
	            {
	                "code": "FR0096",
	                "name": "瓦勒德马恩省"
	            },
	            {
	                "code": "FR0097",
	                "name": "瓦勒德瓦兹省"
	            }
	        ]
	    },
	    {
	        "code": "GB",
	        "name": "英国",
	        "states": [
	            {
	                "code": "GB0001",
	                "name": "伦敦"
	            },
	            {
	                "code": "GB0002",
	                "name": "坎布里亚"
	            },
	            {
	                "code": "GB0003",
	                "name": "兰开夏"
	            },
	            {
	                "code": "GB0004",
	                "name": "默西塞德"
	            },
	            {
	                "code": "GB0005",
	                "name": "大曼彻斯特"
	            },
	            {
	                "code": "GB0006",
	                "name": "柴郡"
	            },
	            {
	                "code": "GB0007",
	                "name": "泰恩-威尔"
	            },
	            {
	                "code": "GB0008",
	                "name": "达勒姆 "
	            },
	            {
	                "code": "GB0009",
	                "name": "北约克郡"
	            },
	            {
	                "code": "GB0010",
	                "name": "西约克郡"
	            },
	            {
	                "code": "GB0011",
	                "name": "南约克郡"
	            },
	            {
	                "code": "GB0012",
	                "name": "林肯郡"
	            },
	            {
	                "code": "GB0013",
	                "name": "诺丁汉郡"
	            },
	            {
	                "code": "GB0014",
	                "name": "德比郡"
	            },
	            {
	                "code": "GB0015",
	                "name": "莱斯特郡"
	            },
	            {
	                "code": "GB0016",
	                "name": "北安普敦郡 "
	            },
	            {
	                "code": "GB0017",
	                "name": "斯塔福德郡"
	            },
	            {
	                "code": "GB0018",
	                "name": "西米德兰 "
	            },
	            {
	                "code": "GB0019",
	                "name": "沃里克郡"
	            },
	            {
	                "code": "GB0020",
	                "name": "什罗普郡 "
	            },
	            {
	                "code": "GB0021",
	                "name": "伍斯特郡"
	            },
	            {
	                "code": "GB0022",
	                "name": "诺福克"
	            },
	            {
	                "code": "GB0023",
	                "name": "萨福克"
	            },
	            {
	                "code": "GB0024",
	                "name": "剑桥郡"
	            },
	            {
	                "code": "GB0025",
	                "name": "埃塞克斯"
	            },
	            {
	                "code": "GB0026",
	                "name": "贝德福德郡"
	            },
	            {
	                "code": "GB0027",
	                "name": "赫特福德郡"
	            },
	            {
	                "code": "GB0028",
	                "name": "白金汉郡"
	            },
	            {
	                "code": "GB0029",
	                "name": "牛津郡 "
	            },
	            {
	                "code": "GB0030",
	                "name": "萨里"
	            },
	            {
	                "code": "GB0031",
	                "name": "肯特"
	            },
	            {
	                "code": "GB0032",
	                "name": "东萨塞克斯"
	            },
	            {
	                "code": "GB0033",
	                "name": "西萨塞克斯"
	            },
	            {
	                "code": "GB0034",
	                "name": "汉普郡"
	            },
	            {
	                "code": "GB0035",
	                "name": "洛斯特郡"
	            },
	            {
	                "code": "GB0036",
	                "name": "威尔特郡"
	            },
	            {
	                "code": "GB0037",
	                "name": "萨默塞特"
	            },
	            {
	                "code": "GB0038",
	                "name": "多塞特 "
	            },
	            {
	                "code": "GB0039",
	                "name": "德文"
	            },
	            {
	                "code": "GB0040",
	                "name": "康沃尔和锡利群岛"
	            },
	            {
	                "code": "GB0041",
	                "name": "斯旺西市"
	            },
	            {
	                "code": "GB0042",
	                "name": "加的夫市"
	            },
	            {
	                "code": "GB0043",
	                "name": "纽波特市"
	            },
	            {
	                "code": "GB0044",
	                "name": "格温内思郡"
	            },
	            {
	                "code": "GB0045",
	                "name": "阿盖尔-比特"
	            },
	            {
	                "code": "GB0046",
	                "name": "东艾尔郡"
	            },
	            {
	                "code": "GB0047",
	                "name": "南艾尔郡"
	            },
	            {
	                "code": "GB0048",
	                "name": "北艾尔郡"
	            },
	            {
	                "code": "GB0049",
	                "name": "东邓巴顿郡"
	            },
	            {
	                "code": "GB0050",
	                "name": "西邓巴顿郡"
	            },
	            {
	                "code": "GB0051",
	                "name": "伦弗鲁郡"
	            },
	            {
	                "code": "GB0052",
	                "name": "东伦弗鲁郡"
	            },
	            {
	                "code": "GB0053",
	                "name": "因弗克莱德"
	            },
	            {
	                "code": "GB0054",
	                "name": "格拉斯哥市"
	            },
	            {
	                "code": "GB0055",
	                "name": "北拉纳克郡"
	            },
	            {
	                "code": "GB0056",
	                "name": "南拉纳克郡"
	            },
	            {
	                "code": "GB0057",
	                "name": "爱丁堡市"
	            },
	            {
	                "code": "GB0058",
	                "name": "中洛锡安"
	            },
	            {
	                "code": "GB0059",
	                "name": "西洛锡安"
	            },
	            {
	                "code": "GB0060",
	                "name": "东洛锡安"
	            },
	            {
	                "code": "GB0061",
	                "name": "克拉克曼南郡"
	            },
	            {
	                "code": "GB0062",
	                "name": "福尔柯克"
	            },
	            {
	                "code": "GB0063",
	                "name": "斯特灵"
	            },
	            {
	                "code": "GB0064",
	                "name": "法夫"
	            },
	            {
	                "code": "GB0065",
	                "name": "邓迪市"
	            },
	            {
	                "code": "GB0066",
	                "name": "安格斯"
	            },
	            {
	                "code": "GB0067",
	                "name": "珀斯-金罗斯"
	            },
	            {
	                "code": "GB0068",
	                "name": "阿伯丁郡"
	            },
	            {
	                "code": "GB0069",
	                "name": "马里"
	            },
	            {
	                "code": "GB0070",
	                "name": "苏格兰边境"
	            },
	            {
	                "code": "GB0071",
	                "name": "邓弗里斯-加洛韦"
	            },
	            {
	                "code": "GB0072",
	                "name": "高地"
	            },
	            {
	                "code": "GB0073",
	                "name": "奥克尼群岛"
	            },
	            {
	                "code": "GB0074",
	                "name": "设得兰群岛"
	            },
	            {
	                "code": "GB0075",
	                "name": "埃利安-锡尔"
	            },
	            {
	                "code": "GB0076",
	                "name": "爱丁堡市"
	            },
	            {
	                "code": "GB0077",
	                "name": "奥克尼群岛"
	            },
	            {
	                "code": "GB0078",
	                "name": "贝尔法斯特 "
	            },
	            {
	                "code": "GB0079",
	                "name": "杜伦郡"
	            },
	            {
	                "code": "GB0080",
	                "name": "东米德兰兹郡"
	            },
	            {
	                "code": "GB0081",
	                "name": "布里斯托尔郡"
	            },
	            {
	                "code": "GB0082",
	                "name": "伯克郡"
	            },
	            {
	                "code": "GB0083",
	                "name": "卡迪夫市"
	            }
	        ]
	    },
	    {
	        "code": "GR",
	        "name": "希腊"
	    },
	    {
	        "code": "HG",
	        "name": "港英"
	    },
	    {
	        "code": "HK",
	        "name": "香港",
	        "states": [
	            {
	                "code": "HK0001",
	                "name": "九龙"
	            },
	            {
	                "code": "HK0002",
	                "name": "新界"
	            },
	            {
	                "code": "HK0003",
	                "name": "香港岛"
	            }
	        ]
	    },
	    {
	        "code": "IE",
	        "name": "爱尔兰",
	        "states": [
	            {
	                "code": "IE0001",
	                "name": "都柏林郡"
	            },
	            {
	                "code": "IE0002",
	                "name": "利默里克郡"
	            },
	            {
	                "code": "IE0003",
	                "name": "科克郡"
	            },
	            {
	                "code": "IE0004",
	                "name": "沃特福德郡"
	            },
	            {
	                "code": "IE0005",
	                "name": "劳斯郡"
	            }
	        ]
	    },
	    {
	        "code": "IN",
	        "name": "印度",
	        "states": [
	            {
	                "code": "IN0001",
	                "name": "西孟加拉邦"
	            }
	        ]
	    },
	    {
	        "code": "IT",
	        "name": "意大利",
	        "states": [
	            {
	                "code": "IT0001",
	                "name": "阿布鲁佐"
	            },
	            {
	                "code": "IT0002",
	                "name": "瓦莱达奥斯塔"
	            },
	            {
	                "code": "IT0003",
	                "name": "普利亚"
	            },
	            {
	                "code": "IT0004",
	                "name": "巴斯利卡塔"
	            },
	            {
	                "code": "IT0005",
	                "name": "卡拉布里亚"
	            },
	            {
	                "code": "IT0006",
	                "name": "坎帕尼亚"
	            },
	            {
	                "code": "IT0007",
	                "name": "艾米利亚-罗马涅 "
	            },
	            {
	                "code": "IT0008",
	                "name": "弗留利-威尼斯朱利亚"
	            },
	            {
	                "code": "IT0009",
	                "name": "拉齐奥"
	            },
	            {
	                "code": "IT0010",
	                "name": "利古里亚 "
	            },
	            {
	                "code": "IT0011",
	                "name": "伦巴第 "
	            },
	            {
	                "code": "IT0012",
	                "name": "马尔凯 "
	            },
	            {
	                "code": "IT0013",
	                "name": "莫利塞 "
	            },
	            {
	                "code": "IT0014",
	                "name": "皮埃蒙特 "
	            },
	            {
	                "code": "IT0015",
	                "name": "普利亚"
	            },
	            {
	                "code": "IT0016",
	                "name": "西西里"
	            },
	            {
	                "code": "IT0017",
	                "name": "托斯卡纳"
	            },
	            {
	                "code": "IT0018",
	                "name": "特伦蒂诺-上阿迪杰"
	            },
	            {
	                "code": "IT0019",
	                "name": "翁布里亚"
	            },
	            {
	                "code": "IT0020",
	                "name": "瓦莱达奥斯塔"
	            },
	            {
	                "code": "IT0021",
	                "name": "威尼托"
	            }
	        ]
	    },
	    {
	        "code": "JP",
	        "name": "日本",
	        "states": [
	            {
	                "code": "JP0001",
	                "name": "本州"
	            },
	            {
	                "code": "JP0002",
	                "name": "九州"
	            },
	            {
	                "code": "JP0003",
	                "name": "四国"
	            },
	            {
	                "code": "JP0004",
	                "name": "北海道"
	            }
	        ]
	    },
	    {
	        "code": "KR",
	        "name": "韩国",
	        "states": [
	            {
	                "code": "KR0001",
	                "name": "首爾特別市"
	            },
	            {
	                "code": "KR0002",
	                "name": "釜山廣域市"
	            },
	            {
	                "code": "KR0003",
	                "name": "大邱廣域市"
	            },
	            {
	                "code": "KR0004",
	                "name": "仁川廣域市"
	            },
	            {
	                "code": "KR0005",
	                "name": "光州廣域市"
	            },
	            {
	                "code": "KR0006",
	                "name": "大田廣域市"
	            },
	            {
	                "code": "KR0007",
	                "name": "蔚山廣域市"
	            },
	            {
	                "code": "KR0008",
	                "name": "世宗特別自治市"
	            },
	            {
	                "code": "KR0009",
	                "name": "京畿道"
	            },
	            {
	                "code": "KR0010",
	                "name": "江原道"
	            },
	            {
	                "code": "KR0011",
	                "name": "忠清北道"
	            },
	            {
	                "code": "KR0012",
	                "name": "忠清南道"
	            },
	            {
	                "code": "KR0013",
	                "name": "全羅北道"
	            },
	            {
	                "code": "KR0014",
	                "name": "全羅南道"
	            },
	            {
	                "code": "KR0015",
	                "name": "慶尚北道"
	            },
	            {
	                "code": "KR0016",
	                "name": "慶尚南道"
	            }
	        ]
	    },
	    {
	        "code": "MY",
	        "name": "马来西亚"
	    },
	    {
	        "code": "NL",
	        "name": "荷兰",
	        "states": [
	            {
	                "code": "NL0001",
	                "name": "泽兰省"
	            },
	            {
	                "code": "NL0002",
	                "name": "海尔德兰省"
	            },
	            {
	                "code": "NL0003",
	                "name": "上艾瑟尔省"
	            },
	            {
	                "code": "NL0004",
	                "name": "德伦特省"
	            },
	            {
	                "code": "NL0005",
	                "name": "弗莱福兰省"
	            },
	            {
	                "code": "NL0006",
	                "name": "弗里斯兰省"
	            },
	            {
	                "code": "NL0007",
	                "name": "格罗宁根省"
	            },
	            {
	                "code": "NL0008",
	                "name": "林堡省"
	            },
	            {
	                "code": "NL0009",
	                "name": "北荷兰省"
	            },
	            {
	                "code": "NL0010",
	                "name": "南荷兰省"
	            },
	            {
	                "code": "NL0011",
	                "name": "乌得勒支省"
	            },
	            {
	                "code": "NL0012",
	                "name": "北布拉班特省"
	            }
	        ]
	    },
	    {
	        "code": "NZ",
	        "name": "新西兰",
	        "states": [
	            {
	                "code": "NZ0001",
	                "name": "北地"
	            },
	            {
	                "code": "NZ0002",
	                "name": "奥克兰"
	            },
	            {
	                "code": "NZ0003",
	                "name": "怀卡托"
	            },
	            {
	                "code": "NZ0004",
	                "name": "普伦蒂湾"
	            },
	            {
	                "code": "NZ0005",
	                "name": "吉斯伯恩"
	            },
	            {
	                "code": "NZ0006",
	                "name": "霍克湾"
	            },
	            {
	                "code": "NZ0007",
	                "name": "塔拉那基"
	            },
	            {
	                "code": "NZ0008",
	                "name": "马纳瓦图－旺加努伊"
	            },
	            {
	                "code": "NZ0009",
	                "name": "惠灵顿"
	            },
	            {
	                "code": "NZ0010",
	                "name": "塔斯曼"
	            },
	            {
	                "code": "NZ0011",
	                "name": "纳尔逊"
	            },
	            {
	                "code": "NZ0012",
	                "name": "马尔伯勒"
	            },
	            {
	                "code": "NZ0013",
	                "name": "西岸"
	            },
	            {
	                "code": "NZ0014",
	                "name": "坎特伯雷"
	            },
	            {
	                "code": "NZ0015",
	                "name": "奥塔哥"
	            },
	            {
	                "code": "NZ0016",
	                "name": "南地"
	            },
	            {
	                "code": "NZ0017",
	                "name": "查塔姆群岛"
	            }
	        ]
	    },
	    {
	        "code": "PL",
	        "name": "波兰",
	        "states": [
	            {
	                "code": "PL0001",
	                "name": "华沙市"
	            },
	            {
	                "code": "PL0002",
	                "name": "克拉科夫省"
	            },
	            {
	                "code": "PL0003",
	                "name": "波美拉尼亚省"
	            },
	            {
	                "code": "PL0004",
	                "name": "上西里西亚省"
	            },
	            {
	                "code": "PL0005",
	                "name": "罗兹省"
	            },
	            {
	                "code": "PL0006",
	                "name": "下西里西亚省"
	            }
	        ]
	    },
	    {
	        "code": "RU",
	        "name": "俄罗斯",
	        "states": [
	            {
	                "code": "RU0001",
	                "name": "莫斯科"
	            },
	            {
	                "code": "RU0002",
	                "name": "圣彼得堡"
	            },
	            {
	                "code": "RU0003",
	                "name": "顿河畔罗斯托夫"
	            },
	            {
	                "code": "RU0004",
	                "name": "阿穆尔州"
	            },
	            {
	                "code": "RU0005",
	                "name": "阿尔汉格尔斯克州"
	            },
	            {
	                "code": "RU0006",
	                "name": "阿斯特拉罕州"
	            },
	            {
	                "code": "RU0007",
	                "name": "别尔哥罗德州"
	            },
	            {
	                "code": "RU0008",
	                "name": "布良斯克州"
	            },
	            {
	                "code": "RU0009",
	                "name": "弗拉基米尔州"
	            },
	            {
	                "code": "RU0010",
	                "name": "伏尔加格勒州"
	            },
	            {
	                "code": "RU0011",
	                "name": "沃洛格达州"
	            },
	            {
	                "code": "RU0012",
	                "name": "沃罗涅日州"
	            },
	            {
	                "code": "RU0013",
	                "name": "伊万诺沃州"
	            },
	            {
	                "code": "RU0014",
	                "name": "伊尔库茨克州"
	            },
	            {
	                "code": "RU0015",
	                "name": "加里宁格勒州"
	            },
	            {
	                "code": "RU0016",
	                "name": "卡卢加州"
	            },
	            {
	                "code": "RU0017",
	                "name": "基洛夫州"
	            },
	            {
	                "code": "RU0018",
	                "name": "科斯特罗马州"
	            },
	            {
	                "code": "RU0019",
	                "name": "库尔干州"
	            },
	            {
	                "code": "RU0020",
	                "name": "库尔斯克州"
	            },
	            {
	                "code": "RU0021",
	                "name": "列宁格勒州"
	            },
	            {
	                "code": "RU0022",
	                "name": "马加丹州"
	            },
	            {
	                "code": "RU0023",
	                "name": "莫斯科州"
	            },
	            {
	                "code": "RU0024",
	                "name": "下诺夫哥罗德州"
	            }
	        ]
	    },
	    {
	        "code": "SE",
	        "name": "瑞典"
	    },
	    {
	        "code": "SG",
	        "name": "新加坡",
	        "states": [
	            {
	                "code": "SG0001",
	                "name": "新加坡"
	            }
	        ]
	    },
	    {
	        "code": "TH",
	        "name": "泰国",
	        "states": [
	            {
	                "code": "TH0001",
	                "name": "曼谷直辖市"
	            }
	        ]
	    },
	    {
	        "code": "UA",
	        "name": "乌克兰"
	    },
	    {
	        "code": "UG",
	        "name": "乌干达",
	        "states": [
	            {
	                "code": "UG0001",
	                "name": "坎帕拉"
	            }
	        ]
	    },
	    {
	        "code": "US",
	        "name": "美国",
	        "states": [
	            {
	                "code": "US0001",
	                "name": "亚拉巴马州"
	            },
	            {
	                "code": "US0002",
	                "name": "阿拉斯加州"
	            },
	            {
	                "code": "US0003",
	                "name": "亚利桑那州"
	            },
	            {
	                "code": "US0004",
	                "name": "阿肯色州"
	            },
	            {
	                "code": "US0005",
	                "name": "加利福尼亚州"
	            },
	            {
	                "code": "US0006",
	                "name": "科罗拉多州"
	            },
	            {
	                "code": "US0007",
	                "name": "康涅狄格州"
	            },
	            {
	                "code": "US0008",
	                "name": "特拉华州"
	            },
	            {
	                "code": "US0009",
	                "name": "佛罗里达州"
	            },
	            {
	                "code": "US0010",
	                "name": "佐治亚州"
	            },
	            {
	                "code": "US0011",
	                "name": "夏威夷州"
	            },
	            {
	                "code": "US0012",
	                "name": "爱达荷州"
	            },
	            {
	                "code": "US0013",
	                "name": "伊利诺伊州"
	            },
	            {
	                "code": "US0014",
	                "name": "印第安纳州"
	            },
	            {
	                "code": "US0015",
	                "name": "艾奥瓦州"
	            },
	            {
	                "code": "US0016",
	                "name": "堪萨斯州"
	            },
	            {
	                "code": "US0017",
	                "name": "肯塔基州"
	            },
	            {
	                "code": "US0018",
	                "name": "路易斯安那州"
	            },
	            {
	                "code": "US0019",
	                "name": "缅因州"
	            },
	            {
	                "code": "US0020",
	                "name": "马里兰州"
	            },
	            {
	                "code": "US0021",
	                "name": "马萨诸塞州"
	            },
	            {
	                "code": "US0022",
	                "name": "密歇根州"
	            },
	            {
	                "code": "US0023",
	                "name": "明尼苏达州"
	            },
	            {
	                "code": "US0024",
	                "name": "密西西比州"
	            },
	            {
	                "code": "US0025",
	                "name": "密苏里州"
	            },
	            {
	                "code": "US0026",
	                "name": "蒙大拿州"
	            },
	            {
	                "code": "US0027",
	                "name": "内布拉斯加州"
	            },
	            {
	                "code": "US0028",
	                "name": "内华达州"
	            },
	            {
	                "code": "US0029",
	                "name": "新罕布什尔州"
	            },
	            {
	                "code": "US0030",
	                "name": "新泽西州"
	            },
	            {
	                "code": "US0031",
	                "name": "新墨西哥州"
	            },
	            {
	                "code": "US0032",
	                "name": "纽约州"
	            },
	            {
	                "code": "US0033",
	                "name": "北卡罗来纳州"
	            },
	            {
	                "code": "US0034",
	                "name": "北达科他州"
	            },
	            {
	                "code": "US0035",
	                "name": "俄亥俄州"
	            },
	            {
	                "code": "US0036",
	                "name": "奥克拉荷马州"
	            },
	            {
	                "code": "US0037",
	                "name": "俄勒冈州"
	            },
	            {
	                "code": "US0038",
	                "name": "宾夕法尼亚州"
	            },
	            {
	                "code": "US0039",
	                "name": "罗得岛州"
	            },
	            {
	                "code": "US0040",
	                "name": "南卡罗来纳州"
	            },
	            {
	                "code": "US0041",
	                "name": "南达科他州"
	            },
	            {
	                "code": "US0042",
	                "name": "田纳西州"
	            },
	            {
	                "code": "US0043",
	                "name": "得克萨斯州"
	            },
	            {
	                "code": "US0044",
	                "name": "犹他州"
	            },
	            {
	                "code": "US0045",
	                "name": "佛蒙特州"
	            },
	            {
	                "code": "US0046",
	                "name": "弗吉尼亚州"
	            },
	            {
	                "code": "US0047",
	                "name": "华盛顿州"
	            },
	            {
	                "code": "US0048",
	                "name": "西弗吉尼亚州"
	            },
	            {
	                "code": "US0049",
	                "name": "威斯康星州"
	            },
	            {
	                "code": "US0050",
	                "name": "怀俄明州"
	            },
	            {
	                "code": "US0051",
	                "name": "华盛顿哥伦比亚特区"
	            },
	            {
	                "code": "US0052",
	                "name": "关岛"
	            }
	        ]
	    }
	];


/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(109);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(33)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(16)();
	// imports
	
	
	// module
	exports.push([module.id, ".orange {\n  color: #f4b64f;\n}\n.dbWrapper {\n  margin-top: 12px;\n}\n.db .col1 {\n  width: 590px;\n}\n.db .col2 {\n  width: 300px;\n}\n.formWrap {\n  background-color: #fff;\n  padding: 28px 24px 36px;\n  margin-bottom: 30px;\n}\n.m-nav .btn-default > em {\n  display: inline-block;\n  margin-right: 3px;\n}\n.schoolList li {\n  padding: 20px 0;\n  border-bottom: 1px solid #e2e2e2;\n  margin-bottom: 10px;\n}\n.schoolList .detail {\n  font-size: 14px;\n  color: #555;\n  line-height: 1.5;\n}\n.schoolList .detail .field {\n  display: inline-block;\n  margin-right: 40px;\n  color: #f4b64f;\n}\n.schoolList .detail .field:last-child {\n  margin-right: 0;\n}\n.schoolList .btn {\n  margin-top: 6px;\n}\n.schoolListWrap {\n  border-top: 1px solid #e2e2e2;\n  margin-top: 24px;\n  min-height: 400px;\n}\n.schoolList h4 {\n  font-weight: normal;\n  color: #666;\n  margin-bottom: 18px;\n}\n.schoolList .row {\n  margin-bottom: 12px;\n}\n.schoolList .detailContent {\n  height: 48px;\n  overflow: hidden;\n  -webkit-transition: height 0.4s ease;\n          transition: height 0.4s ease;\n  box-sizing: content-box;\n}\n.schoolList .detailContent.open {\n  height: auto;\n}\n.schoolList .detailContent.open .toggleIcon {\n  background-position: -68px 0;\n}\n.schoolList .detailContent > .fl {\n  max-width: 100%;\n  padding-right: 40px;\n}\n.toggleIcon {\n  top: 38px;\n}\n.statesRow {\n  min-height: 44px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(36);
	var extend =  __webpack_require__(41);
	var tmpl = __webpack_require__(111);
	
	var tmpl_states = __webpack_require__(112);
	// 城市
	var countryJSON =  __webpack_require__(104);
	
	var dataSet = { 
		render : function(){
			var that = this;
	
			//省列表
	        if(this.state.tagList.length){
	            var tagLis = $.map(that.state.tagList,function(item){
	            	var _val = item.type+":"+item.value;
	                return '<a class="tags" data-action="remove" href="javascript:;" data-value="'+_val+'">'+item.text+'<span class="taoIcon btn-x"></span></a>';
	            });
	
	            var _htmlArr = [];
	            _htmlArr.push('<a href="javascript:;" class="fr btn btn-default" data-action="clear">清空所有</a>');
	            _htmlArr.push('<span class="cat-text fl">已选择：</span>');
	            _htmlArr.push(tagLis.join(""));
	            $(".crumb").html(_htmlArr.join(""));
	        }else{
	        	$(".crumb").html('<span class="cat-text fl">已选择：</span>');
	            $(".itemLists .item").removeClass("current");
	        }
	
	        //选中的地区里列表
	        if(that.state.stateList && that.state.stateList.length){
	           var  _stateTmpl = tmpl_states({
	            data : that.state.stateList
	           });
	
	            $(".statesRow .itemLists").empty().html(_stateTmpl);
	            //高亮选择项
	            $.each(that.state.stateSelectedList,function(i,l){
	                $(".statesRow .itemLists .item").each(function(k,n){
	                    if(l == $(n).data("value").split(":")[1]){
	                        $(n).addClass("current");
	                    }
	                });
	            });
	
	        }else{
	             $(".statesRow .itemLists").empty();
	        }
	
	
	        if(!$("input[name=country]").length){
	        	var inputList = [];
	        	inputList.push('<input type="hidden" name="country">');
	            inputList.push('<input type="hidden" name="states_cn">');
	        	$(".m-nav").append(inputList.join(""));
	        }
	
		},
	
	    getStateInfo : function(code){
	        var that = this;
	           
	        var stateList;
	
	        $.each(countryJSON,function(idx,ele){
	            if(ele.code == code){
	                stateList = ele.states;
	                return false;
	            }
	        });
	        
	        //选中城市列表
	        that.state.stateList = stateList;
	        // //选中的城市清空
	        // that.state.selectedState = {
	        //     code : "",
	        //     name : ""
	        // };
	
	        that.render();
	    },
	
		requestData : function(btn){
			var that = this,o = that.options;
	
			var _data = {
				country : $("[name=country]").val(),
				school_name_key : $("[name=school_name_key]").val()
			};
	
	        if($("[name=states_cn]").val()){
	            _data.states_cn  = $("[name=states_cn]").val()
	        }
	
			//var _key = _data.country + _data.school_name_key;
	
	        //如果是点击加载更多，页码++，否则重置为1
	        if(btn && $(btn).hasClass("btn-loading")){
	            that.pager++;
	        }else{
	            that.pager = 1;
	        }
	
			//_data.page = that.pager;
	        $(".schoolListWrap").addClass("preloading"); 
	
	        var provinceId = $("[name=province]").val();
	
			$.ajax({
				url : preServer+provinceId + "/tzy/plan/abroad/assessment",
				type : "post",
	            contentType: "application/json",
				data : JSON.stringify(_data),
				success : function(res){
					if(typeof res == "string"){
						var res = $.parseJSON(res);
					}
	
	                if(res.code == "1011"){
	                    window.location = "/home/signin";
	                    return false;
	                }else if(res.code != "0"){
	                    warn(res.msg);
	                    $(".schoolListWrap").removeClass("preloading");
	                    return false;
	                }
	
					that.loadList(res,that.pager);
				},
	            error : function(){
	                $(".schoolListWrap").removeClass("preloading");
	                console.log(err);
	                
	            }
			});
		},
	
		loadList : function(data,pager){
			var that = this,o = that.options;
			var _html = tmpl(data);
	
	        $(".schoolListWrap").removeClass("preloading");
			if(pager == 1){
				$(".schoolList").empty().html(_html);
			}else{
				$(".schoolList").append(_html);
			}
	
			$(".btn-loading").removeClass("loading disabled");
	
	        var pageCount = Math.ceil(data.total / that.capacity);
			//最后一页
			if(pager >= pageCount){
				$(".btn-loading").addClass("loading-all");
			}else{
	            $(".btn-loading").removeClass("loading-all");
	        };
	
	        o.completeCallback && o.completeCallback.call(that);
		},
	
		updateUI : function() {
	       this.render(); 
	    },
	
	    init : function(o){
	    	this.state = {
	            tagList:  [],
	            stateList : [],
	            stateSelectedList : []
	        };
	
	        this.options = o;
	
	        //保存分页对象
	        this.pager = 1;
	        this.capacity  = 10;
	
	        //this.updateUI();
	        this.bindEvt();
	    },
	
	    bindEvt : function(){
	    	var that = this;
	    	$(document).on("click","[data-action=add]",function(e){
	    		e.preventDefault();
	    		var link = $(e.target);
	    		
	             $("[name=school_name_key]").val("");
	
	            //reset
	            that.pager = 1;
	
	    		var type = link.data("value").split(":")[0],
	    			val =  link.data("value").split(":")[1];
	
	    		if(link.hasClass("current") || val == "" ) return;
	            link.siblings().removeClass("current");
	
	            $.each(that.state.tagList,function(idx,item){
	                if(type == item.type){
	                    that.state.tagList.splice(idx,1);
	                    return false;
	                }
	            });
	
	            if(type == "country"){
	                that.state.tagList = [];
	                $("[name=states_cn]").val("");
	            }
	
				that.state.tagList.push({
					type : type,
					value : val,
					text : link.text()
				});  
	
	            //如果是选择国家，需要做特殊处理
	            if(type == "country"){
	                link.addClass("current");
	                that.getStateInfo(val);
	
	                var _selector = "[name="+type+"]";
	                $(_selector).val(val);
	
	                that.requestData(link); 
	            }else{
	                that.state.stateSelectedList = [];
	
	                that.state.stateSelectedList.push(val);
	
	                that.updateUI();
	
	                var _selector = "[name="+type+"]";
	                $(_selector).val(val);
	
	                that.requestData(link);  
	            }
			
	    	});
	
	    	$(document).on("click","[data-action=clear]",function(e){
	    		e.preventDefault();
	    		$("[data-action=add]").removeClass("current");
				that.state.tagList = [];
				that.updateUI(); 
	            that.requestData(); 		
	    	});
	
	    	$(document).on("click","[data-action=remove]",function(e){
	    		e.preventDefault();
	
	    		var link = $(e.target).closest(".tags");
	    		var type = link.data("value").split(":")[0],
	    			value =  link.data("value").split(":")[1];
				
				 $.each(that.state.tagList,function(idx,item){
	                if(type == item.type && value == item.value){
	                    that.state.tagList.splice(idx,1);
	                    var attr = '[data-value="'+type+':'+value+'"]';
	                    $(attr).removeClass("current");
	                    return false;
	                }
	            });
	
				that.updateUI();  		
	    	});
	
	    	$(".btn-loading").on("click",function(e){
	    		e.preventDefault();
	    		var btn = $(this).closest(".btn");
	    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
	    		btn.addClass("disabled loading");
	    		that.requestData(btn);
	    	});
	
	        //点击搜索
	        $(".btn-search").on("click",function(e){
	            goSearch(e);
	        });
	
	        $("[name=school_name_key]").on("keyup",function(e){
	            e.preventDefault();
	            if(e.keyCode == 13){
	                goSearch(e);
	            }else{
	                return false;
	            }
	        })
	
	        function goSearch(e){
	            e.preventDefault();
	            var oInput = $("[name=school_name_key]");
	            if($.trim(oInput.val()) == ""){
	                warn("请输入院校名称");
	                return false;
	            }
	
	            var btn = $(e.target).closest(".btn");
	
	            that.state.tagList = [];
	            that.updateUI();  
	            that.requestData(btn);
	        }
	
	        //默认选中第一个
	        $(".countryRow .itemLists .item").eq(0).trigger("click");
	
	    }
	};
	
	module.exports = dataSet;

/***/ },

/***/ 111:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 if (data.length == 0) { ;
	__p += '\n	<li class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></li>\n';
	 }else{ ;
	__p += '	\n';
	 for (var i = 0; i < data.length; i++) { ;
	__p += '\n<li class="clearfix rel detailContent">\n	<div class="fl">\n	<h4 class="name ellipsis" title="' +
	((__t = ( data[i].school_name )) == null ? '' : __t) +
	'&nbsp;&nbsp;' +
	((__t = ( data[i].school_name_en )) == null ? '' : __t) +
	' "><em class="vm">' +
	((__t = ( data[i].school_name )) == null ? '' : __t) +
	'</em>&nbsp;<em class="vm">' +
	((__t = ( data[i].school_name_en )) == null ? '' : __t) +
	'</em>\n	</h4>\n	<div class="detail row">\n		<span class="label">所在地区：</span><span class="field">' +
	((__t = ( data[i].country )) == null ? '' : __t) +
	'&nbsp;' +
	((__t = ( data[i].city )) == null ? '' : __t) +
	'</span>\n		<span class="label">成立年份：</span><span class="field">' +
	((__t = ( data[i].builder_year )) == null ? '' : __t) +
	'</span>\n		<span class="label">院校性质：</span><span class="field">' +
	((__t = ( data[i].school_type )) == null ? '' : __t) +
	'</span>\n	</div>\n	<div class="detail row">\n		<span class="label">在该国排名：</span><span class="field">NO.' +
	((__t = ( data[i].traffic_rank )) == null ? '' : __t) +
	'</span>\n	</div>\n	<div class="detail row">\n		<span class="label">著名校友：</span><span class="field">' +
	((__t = ( data[i].fame_alumnus )) == null ? '' : __t) +
	'</span>\n	</div>\n	<div class="detail row media">\n		<span class="label fl">地理环境优势：</span>\n		<div className="media-body">\n		<p class="orange">' +
	((__t = ( data[i].geog_superiority )) == null ? '' : __t) +
	'</p>\n		</div>\n	</div>\n	</div>\n	\n	<a href="javascript:;" class="taoIcon toggleIcon toggle"></a>\n</li>\n';
	 }} ;
	
	
	}
	return __p
	}

/***/ },

/***/ 112:
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '', __j = Array.prototype.join;
	function print() { __p += __j.call(arguments, '') }
	with (obj) {
	
	 for (var i = 0; i < data.length; i++) { ;
	__p += '\n<a href="javascript:;" class="item" data-action="add" data-value="states_cn:' +
	((__t = ( data[i].code )) == null ? '' : __t) +
	'">\n	' +
	((__t = ( data[i].name )) == null ? '' : __t) +
	'\n</a>\n';
	 } ;
	
	
	}
	return __p
	}

/***/ }

});
//# sourceMappingURL=aboardData.js.map