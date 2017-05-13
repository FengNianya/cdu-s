

$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
$('.modal').modal();
$(".button-collapse").sideNav();
  $(".top p").fadeIn(3500);
  // $(".top p").fadeOut(4000);
  $(".button1").click(function(){
      $(".helloBox").fadeIn(600);
  });
  $(".helloBox button").click(function(){
    $(".helloBox").css("display","none");
  });

  $(window).scroll(function () {
    if ($(window).scrollTop()>=450){
      $('nav').addClass("navfix");
      $('.superp1').fadeIn(1500);
    }
    if ($(window).scrollTop()>=1250){
      $('.superp2').fadeIn(1500);
    }
    if ($(window).scrollTop()>=2000){
      $('.superp3').fadeIn(1500);
    }
    if ($(window).scrollTop()>=2300){
      $('.row1 p').fadeIn(1500);
    }
  });

});

function hellotime(){
  var name=form1.name.value;
  var now=new Date();
  var hour=now.getHours();
  if ((hour>=5)&&(hour<=11)) {
    alert("上午好"+name+"，你看起来精神不错");
  }else if ((hour>=11)&&(hour<=14)) {
    alert("中午好！亲爱的"+name+"吃午饭了吗？");
  }else if ((hour>=14)&&(hour<=18)) {
    alert("下午好！亲爱的"+name+"你看起来心情不错");
  }else if ((hour>=18)&&(hour<=24)) {
    alert("晚上好！亲爱的"+name+"你看起来心情不错");
  }else{
    alert("亲爱的"+name+",我觉得你现在应该睡觉了");
  }
};
