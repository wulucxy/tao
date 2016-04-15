var $ = window.$ || require("jquery");
var extend = require("extend");

var provinceId = $("[name=province]").val();

var uploader = {
	init : function(settings){
		this.settings = settings;
		this.bindEvt();
	},

	bindEvt : function(){
		var that = this,o = that.settings;

		 var settings = {
            flash_url : "http://i.jd.com/commons/swfupload.swf",
            upload_url: preServer+provinceId+"/attach/uploadAttach",
            post_params: {"avatar":""},
            file_post_name : "file",
            file_size_limit : "4 MB",
            file_types : "*.jpg;*.gif;*.png;*.jpeg;*.bmp",
            file_types_description : "img",
            custom_settings : {
                cancelButtonId : "btnCancel"
            },
            debug: false,
            // Button settings
            button_image_url: "http://i.jd.com/images/perfect_bg.jpg",
            button_width: "82",
            button_height: "34",
            button_placeholder_id: "spanButtonPlaceHolder",
            button_action:SWFUpload.BUTTON_ACTION.SELECT_FILE,

            file_queued_handler : fileQueued,
            file_queue_error_handler : fileQueueError,
            file_dialog_complete_handler : fileDialogComplete,
            upload_error_handler : uploadError,
            upload_success_handler : uploadSuccess

        };
        swfu = new SWFUpload(settings);

        function froward(file,serveData){
		   // warn("头像上传成功");
	    //    window.location.href='/user';
            that.setAvatar(file);   
	    }

	    window.froward = froward;

	},

    setAvatar : function(file){
        var that = this;

        $.ajax({
            url : preServer+provinceId+'/profile/avatar',
            type : "post",
            data : JSON.stringify({avatar:file}),
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