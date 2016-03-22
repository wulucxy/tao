var $ = window.$ || require("jquery");
var extend =  require('object-assign');

var Placeholder=function(t,o){
    this.target=t;
    this.settings=o;
    this.init();
}
Placeholder.prototype.init=function(){
    var that=this,$this=this.target;
    if ($this && !("placeholder" in document.createElement("input"))) {
        if(that.settings.placeholder){
            var placeholder=that.settings.placeholder;
        }
        else
        var placeholder=$this.attr('placeholder');
        
        if($this.val()==''){
            
            $this.val(placeholder);
            }
            $this.css({color:'#ccc'});
            
            $this.focus(function(){
                if($(this).val()==placeholder){
                    $(this).val('');
                }
            })
        
        
            $this.blur(function(){
                if($(this).val()==''){
                    $(this).val(placeholder);
                }
            })
        
        }
}

var placeholder = function(target,o) {
    var settings=extend({placeholder:''},o)
    return $(target).each(function(index) {
        var me = $(this);
        
        return new Placeholder(me,settings);
    });
};
    


$(document).ready(function(){
    placeholder($('input[placeholder],textarea[placeholder]'));    
});

module.exports = placeholder;