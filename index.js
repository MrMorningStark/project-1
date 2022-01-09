// action on title
$(".right .a").hover(function() {
    $(".a").css({
      "background-color": "white",
      "color": "black",
      "font-weight": "bold"
    });
  },
  function() {
    $(".a").css({
      "background-color": "black",
      "color": "white",
      "font-weight": "400"
    });
  });
$(".right .b").hover(function() {
    $(".b").css({
      "background-color": "white",
      "color": "black",
      "font-weight": "bold"
    });
  },
  function() {
    $(".b").css({
      "background-color": "black",
      "color": "white",
      "font-weight": "400"
    });
  });
$(".topnav .a").mouseenter(function(){
  $(".wow1").css("visibility","visible").fadeIn();
  $(".wow1").mouseenter(function(){
    $(".wow1").css("text-decoration","underline");
  });
});
$(".topnav .a").mouseleave(function(){
  $(".wow1").hide();
});
$(".wow1").mouseenter(function(){
  $(".wow1").show().css("visibility","visible");
  $(".wow1 ").mouseleave(function(){
    $(".wow1").css("text-decoration","none").hide();
  });
});


$(".topnav .b").mouseenter(function(){
  $(".wow2").css("visibility","visible").fadeIn();
  $(".wow2").mouseenter(function(){
    $(".wow2").css("text-decoration","underline");
  });
});
$(".topnav .b").mouseleave(function(){
  $(".wow2").hide();
});
$(".wow2").mouseenter(function(){
  $(".wow2").show().css("visibility","visible");
  $(".wow2 ").mouseleave(function(){
    $(".wow2").css("text-decoration","none").hide();
  });
});
