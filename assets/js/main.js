/** iniciando slider **/
$(document).ready(function(){
  $('.slider').slider();
});

/** evento al hacer click en la flecha abajo **/
$("#down").on("click", function(){
  $("html, body").animate({
    scrollTop: $('#aboutme').offset().top
  });
});

/** abrir menu navbar */
$('#navMenu').click(function () {
  $('.menu-mobile').css({transform: "translateX(0)"});
});

/** cerrar menu navbar **/
$('#navClose').click(function () {
  $('.menu-mobile').css("transform", "translateX(+100%)");
});

$('ul.list li a').click(function () {
  $('.menu-mobile').css("transform", "translateX(+100%)");
});

/** event al hacer scroll cambia el menu **/
$(window).scroll(function() {
  if ($(document).scrollTop() < $('#aboutme').offset().top)
    {
      $('.navbar-color').css("background-color","transparent");
      $('#l1').removeClass("section--active");
      $('#l2').removeClass("section--active");
      $('#l3').removeClass("section--active");
      $('#l4').removeClass("section--active");
    }
  if ($(document).scrollTop() >= $('#aboutme').offset().top) {
    $('.navbar-color').css({"background-color": "rgb(69, 90, 100)"});
    $('#l1').addClass("section--active");
    $('#l2').removeClass("section--active");
    $('#l3').removeClass("section--active");
    $('#l4').removeClass("section--active");
    $('#aboutme').addClass("section--change");
  }

  if ($(document).scrollTop() >= $('#sec2').offset().top) {
    $('#l1').removeClass("section--active");
    $('#l2').addClass("section--active");
    $('#l3').removeClass("section--active");
    $('#skills').addClass("section--change");
  }
  if ($(document).scrollTop() >= $('#sec3').offset().top) {
    $('#l2').removeClass("section--active");
    $('#l3').addClass("section--active");
    $('#l4').removeClass("section--active");
    $('#portfolio').addClass("section--change");
  }
  if ($(document).scrollTop() >= $('#sec4').offset().top) {
    $('#l3').removeClass("section--active");
    $('#l4').addClass("section--active");
    $('#contact').addClass("section--change");
  }
});