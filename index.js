$(document ).ready(()=>{
    var botones=document.querySelectorAll('.push');
    for(var i=0;i<botones.length;i++){
        $(botones[i]).click(push);
    }
    
    var carBtn = document.querySelectorAll('input[type=button]');
    for(var v=0;v<carBtn.length;v++){
        $(carBtn[v]).click(push);
    }
});
function push(e){
    
    var i = e.target.id;
    var p = i.charAt(i.length-1);
    var n = '#door'+p;
    var posOut = $(n).offset().top;
    
    $(n).stop().delay(1500).animate(
        {
            marginLeft:'+=80px'
        }
    ).delay(1500).animate(
        {
            marginLeft:'-=80px'
        }
    ).delay(1500);
   
    $('html, body').animate({
        scrollTop:posOut-100
    },2000, 'easeInOutQuint');
    $('#floor-dis').val(p);
    
}