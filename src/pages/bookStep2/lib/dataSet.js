var $ = window.$ || require("jquery");
var extend =  require('object-assign');
var provList = require("./city");

var dataSet = {

    render : function () {
        var that = this;

        //省列表
        if(that.state.provList.length){
            var provLis = $.map(that.state.provList,function(item){
                return '<li data-code="'+item.code+'">'+item.name+'</li>';
            });
        }

        if(!$(".prov").children().length){
            $(".prov").html(provLis);
            that.options.startCallback && that.options.startCallback.call(that);
        }

        //城市列表
        if(that.state.cityList.length){
            var cityLis = $.map(that.state.cityList,function(city){
                if(city.status == 1){
                    return '<li><label><input type="checkbox" checked="true" name="city" n="'+city["name"]+'" value="'+city["code"]+'" ><em>'+city["name"]+'</em></label></li>';
                }else{
                    return '<li><label><input type="checkbox" name="city" n="'+city["name"]+'" value="'+city["code"]+'" ><em>'+city["name"]+'</em></label></li>';
                }
            });

            $(".city").html(cityLis);
            that.options.completeCallback && that.options.completeCallback.call(that);
        }
        
        //选中城市列表
        var lis = [];
        if(!that.state.selected.length){
            lis.push('<li class="noList">动动手指，在左边选择求学地区吧！</li>');
            $(".btn-positive").addClass("disabled");
        }else{
            lis = $.map(that.state.selected,function (item) {
                return '<li class="tagList" data-n="'+item.n+'" data-code="'+item.code+'"><span class="icon-close">X</span><span class="tagContent">' +item.n+ '</span></li>';
            });
            if($(".btn-positive").hasClass("disabled")){
                $(".btn-positive").removeClass("disabled"); 
            }
        }
        

       $('#tagsWrap').html(lis.join('')); 
    },


    updateUI : function(loading) {
        //if (!loading) saveState();
       this.render(); 
    },


     init : function(o){
        this.state = {
            provList : provList,
            cityList:  [],
            selected : []
        };

        this.options = o;
        this.prov = $( '.prov' );
        this.city = $( '.city' );
        
        //默认省索引为0
        this.provIndex = 0;
        //缓存
        this.cityDataCache = {};

        this.bindEvt();
        this.updateUI();

    },

    requestData : function(val){
        var that = this,o = that.options;

        if(that.cityDataCache[val]){
            that.state.cityList = that.cityDataCache[val];
            that.updateUI();
            return;
        }

        $.ajax({
            url : o.url,
            type : "post",
            contentType: "application/json",
            data : JSON.stringify({provinceId:val}),
            success : function(res){
                if(typeof res =="string"){
                    var res = $.parseJSON(res);
                }
                
                if(!that.cityDataCache[val]){
                    that.cityDataCache[val] = res.cityList;
                }

                $.each(res.cityList,function(idx,ele){
                    ele.status = 0;
                });

                that.state.cityList = res.cityList;
                that.updateUI();

            },
            error : function(err){
                console.log(err);
            }
        });
    },

    bindEvt : function(){
        var that = this,o = that.options;

        // 选择省份时发生事件
        this.prov.on("click","li",function(){
            that.provIndex = that.prov.find("li").index($(this));
            $(this).siblings().removeClass(o.klass);
            $(this).addClass(o.klass);

            that.city.empty();
            that.requestData.call(that,$(this).data("code"));
        });

        $(document).on('click', '.icon-close', function (e) {

            var $li = $(this).closest(".tagList");
            var val = $li.data("code"),n = $li.data("n");
                
            var ele = {
                n : n,
                code : val
            };


           $.each(that.state.selected,function(idx,item){
                if(ele.code == item.code){
                    that.state.selected.splice(idx,1);
                    return false;
                }
           });

           $.each(that.state.cityList,function(idx,item){
                if(ele.code == item.code){
                    that.state.cityList[idx].status = 0;
                     return false;
                }
            });

            
            that.updateUI();
        });

        $(document).on("change","[name=city]",function(e){
         
          var ele = this,$ele = $(this);

          if($ele.prop("checked")){
            var eleObj = {
                p : $(ele).attr("p"),
                n : $(ele).attr("n"),
                code : ele.value
            };
           
            that.state.selected.push(eleObj);

            $.each(that.state.cityList,function(idx,item){
                if(eleObj.code == item.code){
                    that.state.cityList[idx].status = 1;
                     return false;
                }
            });

          }else{
            var eleObj = {
                n : $(ele).attr("n"),
                code : ele.value
            };

            $.each(that.state.selected,function(idx,item){
                if(eleObj.code == item.code){
                    that.state.selected.splice(idx,1);
                     return false;
                }
            });


            $.each(that.state.cityList,function(idx,item){
                if(eleObj.code == item.code){
                    that.state.cityList[idx].status = 0;
                     return false;
                }
            });

          }

          that.updateUI();
        });
    }
};

module.exports = dataSet;

