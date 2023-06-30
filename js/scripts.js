$(".burger-menu").click(function () {
    $(this).toggleClass("menu-on");
    $(".main-navigation").toggleClass("active");
});
$(".main-navigation li a").click(function () {
    $(".main-navigation").removeClass("active");
    $(".burger-menu").removeClass("menu-on")
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    $(".main-header").addClass("active-nav");
  } else {
    $(".main-header").removeClass("active-nav");
  }
}