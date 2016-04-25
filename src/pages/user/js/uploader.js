var $ = window.$ || require("jquery");
var extend = require("extend");

var provinceId = $("[name=province]").val();
var browser = require("../../../assets/components/browser");

var uploader = {
	init : function(settings){
		this.settings = settings;
		this.bindEvt();
	},

	bindEvt : function(){
		var that = this,o = that.settings;

		var uploader = WebUploader.create({

            auto : true,
            // swf文件路径
            swf: 'http://www.tzhiyuan.net/data/upload/swfupload.swf',

            // 文件接收服务端。
            server: preServer+provinceId+"/attach/uploadAttach",

            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: '#picker',

            // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
            resize: false,
            // 只允许选择图片文件。
            accept: {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            },
            formData: {
                avatar: ""
            },
            fileVal : "avatar"
        });

        // ie8 bug
        if(browser.isIE() == "8"){
            $(".webuploader-container div:last-child").css({width: '82px', height: '24px'});
        }
        

        uploader.on( 'uploadProgress', function( file,percentage) {
            that.loadingStart();
        });

        // 文件上传成功，给item添加成功class, 用样式标记上传成功。
        uploader.on( 'uploadSuccess', function( file,response) {
           that.setAvatar(file,response);
    
        });

        uploader.on( 'uploadError', function( file,reason) {
            console.log(reason);
            alert(reason);
        });

        // 完成上传完了，成功或者失败，先删除进度条。
        uploader.on( 'uploadComplete', function( file ) {
            that.loadingStop();
        });

        uploader.on('error', function(error){
            console.log(error);
        })
	},

    loadingStart : function(){
        document.getElementById("loading").style.display = "inline";
    },

    loadingStop : function() {
        document.getElementById("loading").style.display = "none";
    },

    setAvatar : function(file,serveData){
        var that = this;

        if(typeof serveData == "string"){
            var serveData = $.parseJSON(serveData);
        }

        if(serveData.code != 1){
            warn(serveData.msg);
            return;
        }

        $.ajax({
            url : preServer+provinceId+'/profile/avatar',
            type : "post",
            data : JSON.stringify({avatar:serveData.result.avatar}),
            success : function(res){
                if(typeof res == "string"){
                    var res = $.parseJSON(res);
                }

                if(res.code !=1){
                    warn(res.msg);
                    return;
                }

                warn("头像上传成功",function(){
                    window.location.href='/user';
                });

            }

        })
    }


};

module.exports = uploader;