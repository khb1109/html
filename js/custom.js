$(document).ready(function(){
    $("input:radio[name=radio]").click(function(){
        pageNumber = window.location.href.split("#")[1];
        if(pageNumber == null) {
            location.href="/index.html#2";
        }
        if($(this).attr('id')==='o'){
            location.href="/index.html#" + (Number(pageNumber)+1);
        }else{
            alert("틀렸습니다!");
        }
    });
});
