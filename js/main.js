$(function(){
//alert('a');



var $ham = $('header').find('>.hamBtn');


var $ht = $(window).height();
//alert($ht);
$('section').height($ht); //명령문 섹션의 높이를 브라우저의 높이로 해!
$('#home').height($ht);

$(window).on('resize',function(){
  //alert('a');
  var $ht2 = $(window).height();
  $('section').height($ht2);
  $('#home').height($ht2);
});


//메뉴버튼을 클릭했을때
$('nav li').on('click',function(){
  var $ht3 = $(window).height();
  //alert('a');
  var $this = $(this).index();
  //alert($this);
  //(html,body)이동
  $('html,body').stop().animate({
    scrollTop:$ht3*($this)
  },1000,'swing');
});

//윈도우가 스크롤 될때 section에 맞는 버튼 active

$(window).on('scroll',function(){
  var $scroll = $(window).scrollTop(); //윈도우가 스크롤 될때마다 바뀜
  var $ht4 = $(window).height();
  var $index = $('nav li').index();

  if($scroll >= $ht4*0-1 && $scroll < $ht4-1){
  $('nav li').removeClass('on');
  $('nav li').eq(0).addClass('on');
  $ham.find('>span').css({
    'background':'#222'
  });

}else if($scroll >= $ht4-1 && $scroll < $ht4*2-1){
  $('nav li').removeClass('on');
  $('nav li').eq(1).addClass('on');
  $ham.find('>span').css({
    'background':'#ffb300'
  });
}else if($scroll >= $ht4*2-1 && $scroll < $ht4*3-1){
  $('nav li').removeClass('on');
  $('nav li').eq(2).addClass('on');
  $ham.find('>span').css({
    'background':'#d7ff1f'
  });
}else if($scroll >= $ht4*3-1 && $scroll < $ht4*4-1){
  $('nav li').removeClass('on');
  $('nav li').eq(3).addClass('on');
  $ham.find('>span').css({
    'background':'#dedede'
  });
}else if($scroll >= $ht4*4-1 && $scroll < $ht4*5-1){
  $('nav li').removeClass('on');
  $('nav li').eq(4).addClass('on');
  $ham.find('>span').css({
    'background':'#222'
  });
}



//반복문으로 변경
// $(window).on('scroll',function(){
//   //alert('a');
//   var $scroll = $(window).scrollTop(); //윈도우가 스크롤 될때마다 바뀜
//   var $ht4 = $(window).height();
//
//   for(var i=0; i<4; i++){
//     if($scroll >= ($ht4*i)-1 && $scroll < ($ht4*(i+1))-1){
//     $('nav li').removeClass('on');
//     $('nav li').eq(i).addClass('on');
//   }
//   }
//

  //마우스휠 안내 없어짐
  var $mouse = $('#intro').find('>div').eq(0);

  if($scroll > 200){
    $mouse.stop().animate({
      'opacity':'0'
    },300,'linear');
    $('.hello').stop().animate({
      'opacity':'0'
    });
  }else{
    $mouse.stop().animate({
      'opacity':'1'
    },300,'linear');
    $('.hello').stop().animate({
      'opacity':'1'
    });
  }

  //스크롤시 웰컴움직이는 이벤트
  // var $wel = $('#fix').find('>div');
  // var $scrollTop = $(window).scrollTop();

  // var $moveWel = $scrollTop-1800;

  // $wel.css({
  //   'right':$moveWel
  // });


});



//마우스 휠 (wheel)
$('section').on('mousewheel',function(event,delta){//중요! delta는 2번째 매개, 써주는 순간 앞에 event매개변수를 써줘야 작동한다.

  event.preventDefault();

  //alert('a');
  //휠이 위로 돌아갈때는 이전으로 이동
  if(delta > 0){ //위로+ , 이전
  $('html,body').stop().animate({
    scrollTop:$(this).prev().offset().top
  },1000,'swing');
  //휠이 아래로 돌아갈때는 다음으로 이동
}else if(delta < 0){//아래로- , 다음
  $('html,body').stop().animate({
    scrollTop:$(this).next().offset().top
  },1000,'swing');
  }
});


 // $('#fix').off('mousewheel');

//버튼 이벤트
 $('button').on('mouseenter',function(){
   $(this).find('>span').stop().animate({
     'top':'5px',
     'left':'5px'
   },300,'swing');
 }).on('mouseleave',function(){
   $(this).find('>span').stop().animate({
     'top':'0px',
     'left':'0px'
   },300,'swing');
 });



//햄버거버튼 클릭시 gnb내려오는 이벤트

var $ham = $('header').find('>.hamBtn');

$ham.removeClass('on'); //초기값 세팅

$ham.on('click',function(){
  //alert('a');
  if(!$(this).hasClass('on')){
    $('#gnb').stop().animate({
      'height':'100%'
  },500,'easeOutCubic');
  $('#gnb').find('>.menu').css({'display':'block'});
  $('#gnb').find('>.menu>ul').css({'display':'block'});
  $ham.find('>span').css({'background':'#eee'});
    $(this).addClass('on');
  }else{
    $('#gnb').stop().animate({
      'height':'0'
  },500,'easeOutCubic');
  $('#gnb').find('>.menu').css({'display':'none'});
  $ham.find('>span').css({'background':'#222'});
    $(this).removeClass('on');
  }
});


$('#gnb').find('>.menu>ul>li>a').on('click',function(){
  $('#gnb').stop().animate({
      'height':'0'
  },500,'easeOutCubic');
  $('#gnb').find('>.menu').css({'display':'none'});
  $ham.removeClass('on');
});





//메인화면에 글자 움직이는 이벤트
// var $word = $('.hello').find('span');
// $word.on('mouseenter',function(){
//   //alert('a');
//   $(this).css({
//     color:'#f2e04e',
//     transform:'scale(1.2,0.75)'
//   });
// }).on('mouseout',function(){
//   $(this).css({
//     color:'#111',
//     transform:'scale(1)'
//   });
// }); 0317 css animation으로 대체함.


//gnb메뉴 애니메이션
var $menu = $('#gnb').find('>.menu>ul>li>a');

$menu.on('mouseover',function(){
  //alert('a');
  $(this).stop().animate({
    'left':'50px'
  },500,'easeInOutCubic');
}).on('mouseout',function(){
  $(this).stop().animate({
    'left':'0px'
  },500,'easeInOutCubic');
});



var $hello1 = $('.hello').find('>div>.text-move1');
var $hello2 = $('.hello').find('>div>.text-move2');
var $hello3 = $('.hello').find('>div>.text-move3');



// $(document).ready(function(){
//   $hello1.stop().animate({
//     'bottom':'0',
//     'opacity':'1'
//   },500,function(){
//     $hello2.stop().animate({
//       'bottom':'0',
//       'opacity':'1'
//     },500,function(){
//       $hello3.stop().animate({
//         'bottom':'0',
//         'opacity':'1'
//       },500);
//     });
//   });
//   });

  setTimeout(function(){
    $hello1.addClass('show');
  },200)
  setTimeout(function(){
    $hello2.addClass('show');
  },500)
  setTimeout(function(){
    $hello3.addClass('show');
  },800)


























}); //jQuery닫기
