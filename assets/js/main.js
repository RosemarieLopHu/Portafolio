/** iniciando slider **/
$(document).ready(function () {
  $('.slider').slider();
});

/** evento al hacer click en la flecha abajo **/
$("#down").on("click", function () {
  $("html, body").animate({
    scrollTop: $('#sobremi').offset().top
  });
});

/** abrir menu navbar */
$('#navMenu').click(function () {
  $('.menu-mobile').css({ transform: "translateX(0)" });
});

/** cerrando menu navbar **/
$('#navClose').click(function () {
  $('.menu-mobile').css("transform", "translateX(+100%)");
});

$('ul.list li a').click(function () {
  $('.menu-mobile').css("transform", "translateX(+100%)");
});

/** event al hacer scroll cambia el menu **/
$(window).scroll(function () {
  if ($(document).scrollTop() < $('#sobremi').offset().top) {
    $('.navbar-color').css("background-color", "transparent");
    $('#l1').removeClass("section--active");
    $('#l2').removeClass("section--active");
    $('#l3').removeClass("section--active");
    $('#l4').removeClass("section--active");
  }
  if ($(document).scrollTop() >= $('#sobremi').offset().top) {
    $('.navbar-color').css({ "background-color": "#424242" });
    $('#l1').addClass("section--active");
    $('#l2').removeClass("section--active");
    $('#l3').removeClass("section--active");
    $('#l4').removeClass("section--active");
    $('#sobremi').addClass("section--change");
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

//Creates an event that fires every time the mouse moves over any div with the class of "img".
$(".circle").mousemove(function (event) {

  //Both the x and y value are calculated by taking the mouse x,y position on the page and subtracting it from the x,y position of the image on the page. "this" is the hovered element with the class of "img"
  var mousex = event.pageX - $(this).offset().left;
  var mousey = event.pageY - $(this).offset().top;


  //If you just used the mouse position values the translation effect will only go up and to the right, by subtracting half of the length / width of the imagevfrom the values  we get either a positive or negitive number so that the image will move in any direction.

  //The 40 controls the amount of "movement" that will happen by giving us a smaller number, feel free to change it to get the effect that you want.
  var imgx = (mousex - 300) / 40;
  var imgy = (mousey - 200) / 40;

  //Adds a translation css styles to the image element
  $(this).css("transform", "translate(" + imgx + "px," + imgy + "px)");
});

//This function will fire every time the user mouses off of the image. It resets the translation back to 0.
$(".circle").mouseout(function () {
  $(this).css("transform", "translate(0px,0px)");
});

//quotes

$(document).ready(function(){
  $('.parallax').parallax();
});
/* portafolio slider */
