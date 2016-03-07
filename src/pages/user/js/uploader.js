var $ = window.$ || require("jquery");
var extend = require("extend");
var BASE_URL = "//localhost:9999/";
var uploader = {
	init : function(settings){
		this.settings = settings;
		this.bindEvt();
	},

	bindEvt : function(){
		var that = this,o = that.settings;

		that.uploader = WebUploader.create({
		    // swf文件路径
		    swf: BASE_URL + 'js/Uploader.swf',

		    // 文件接收服务端。
		    server: 'http://webuploader.duapp.com/server/fileupload.php',

		    // 选择文件的按钮。可选。
		    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
		    pick: o.el,

		    // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
		    resize: false
		});

		console.log(that.uploader);

	}


};

module.exports = uploader;