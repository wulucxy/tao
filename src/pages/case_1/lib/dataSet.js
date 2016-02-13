var $ = window.$ || require("jquery");
var extend =  require('object-assign');

var dataSet = {

    render : function () {
        var that = this;
        var lis = $.map(that.state.items,function (item) {
            return '<li class="tagList" data-n="'+item.n+'" data-value="'+item.value+'"><span class="icon-close">X</span><span class="tagContent">' +item.n+ '</span></li>';
        });
       $('#tagsWrap').html(lis.join(''));
    },

    updateUI : function(loading) {
        //if (!loading) saveState();
       this.render(); 
    },


     init : function(){
        this.state = {items: []};
        this.bindEvt();
        this.updateUI();
    },

    bindEvt : function(){
        var that = this;
        $(document).on('click', '.icon-close', function () {
            var $li = $(this).closest(".tagList");
            var val = $li.data("value").toString(),n = $li.data("n");
                
            var ele = {
                n : n,
                value : val
            };

            that.state.items.splice(that.state.items.indexOf(ele), 1);
            that.updateUI();

            for(var i=0,checks = $("[name=city]");i<checks.length;i++){
                    for(var j=0,item = that.state.items;j<item.length;j++){
                        if(checks.eq(i).attr("n") == item[j].n){
                            checks.eq(i).attr("checked",true);
                            break;
                        }else{
                            checks.eq(i).attr("checked",false);
                        }
                    }
               }


       
        });

        $("[name=city]").on("change",function(){
          var ele = this,$ele = $(this);

          if($ele.prop("checked")){
            var eleObj = {
                n : $(ele).attr("n"),
                value : ele.value
            };
            that.state.items.push(eleObj);
          }else{
            var eleObj = {
                n : $(ele).attr("n"),
                value : ele.value
            };
            that.state.items.splice(that.state.items.indexOf(eleObj), 1);
          }

          that.updateUI();
        });
    }
};

module.exports = dataSet;

