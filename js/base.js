var page_controller;
var UA = navigator.userAgent.toLowerCase();//UserAgent

document.addEventListener('touchmove',function(e){
    e.preventDefault();//移除浏览器默认操作
},false);
function initPage(){   
    var objLoading = document.getElementById("loadingbox");   
    if (objLoading != null)   {   
        //setTimeout(function(){
            //$('.loadingbox').animate({'top':'2%','opacity':'0'},50);
            //setTimeout(function(){
                $('.loadingbox').hide();    
            //},50);
        //},0);
    }
}
window.onload = function(){
    FastClick.attach(document.body);//加载FastClick插件
    bindClickEvent();//绑定共用部分点击事件
    page_onload();//加载页面onload事件
}
function iScrollClick(){
    //iScroll click 兼容性问题
    if(/iPhone|iPad|iPod|Macintoch/i.test(UA)) return false;
    if(/Chrome/i.test(UA)) return true;//(/Android/i.test(UA))
    if(/Silk/i.test(UA)) return false;
    if(/Android/i.test(UA)){
        var s = UA.match(/Android [\d+.]{1,5}/)[0].replace('Android','');
        return parseFloat(s[0]+s[2]+s[4])<=442&&parseFloat(s[0]+s[2]+s[4])>430 ? true:false;
    }
}
function bindClickEvent(){
    $('.alert_close').on('click',function(){
        $(this).parent().parent().parent().fadeOut(200);
    });
}
function errorMsg(msg){
    var randomId = parseInt(Math.random()*1000000+1);
    $('body').append("<div class='error_box' id='"+randomId+"'><span>"+msg+"</span></div>");
    $('#'+randomId).fadeIn(200);
    setTimeout(function(){
        $('#'+randomId).fadeOut(200);
    },1200); 
}
var $_GET = (function(){
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        var get = {};
        for(var i in u){
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();