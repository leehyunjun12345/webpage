// window.onload=function(){

//     $('.gnb>ul>li').mouseenter(function(){
//         $("ul", this).stop().slideDown(300);
//     })
//     $('.gnb>ul>li').mouseleave(function(){
//         $("ul", this).stop().slideUp(300);
//     })
// }
// -----------------------------------------------
// $(document)
// .on("mouseenter", ".gnv>ul>li", function(){
//     $("ul", this).stop().slideDown(300);
// })
// .on("mouseleave", "gnb>ul>li", function(){
//     $("ul", this).stop().slideUp(300);
// })
// ---------------------------------------------------

$(document)
.on('ready', slide)
    .on('mouseenter mouseleave', '.gnb>ul>li',menu)
    .on('click', '.notice li:eq(0), .layer__close', layerToggle)

function menu(){
    $('ul',this).stop().slideToggle(300)

    function slide(){
        var pos = 0; //현재 슬라이드 위치
        //0+1 ==> 1%3===>1
        //1+1 ==> 2%3===>2
        //2+1 ==> 3%3===>0
        pos = (pos + 1) % 3 //0,1,2 들어감
        $('.slide ul') //슬라이드 대상
        .animate({ //아래에서 위로 애니메이션
            marginTop: -300 * pos + "px" //-0px, -300px, -600px들어감
        }, 500)
    }
    setInterval(Play, 2000)
}

function layerToggle(){
    $('.layer').toggle() //레이어팝업이
    //열린상태 ==> 닫힌상태
    //닫힌상태 ==> 열린상태 토글
}