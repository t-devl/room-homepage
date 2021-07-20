$(".nav__toggle").click(function () {
  if ($(".nav").hasClass("nav--active")) {
    $(".nav").removeClass("nav--active");
    $(".nav__toggle-icon").attr("src", "images/icon-hamburger.svg");
    $("body").removeClass("no-scroll");
  } else {
    $(".nav").addClass("nav--active");
    $(".nav__toggle-icon").attr("src", "images/icon-close.svg");
    $("body").addClass("no-scroll");
  }
});

$(".slider-nav__button--left").click(() => changeSlide("left"));

$(".slider-nav__button--right").click(() => changeSlide("right"));

let index = 0;

function changeSlide(direction) {
  $(".image-slider__image--active").removeClass("image-slider__image--active");
  $(".slide--active").removeClass("slide--active");
  if (direction === "left") {
    if (index !== 0) {
      index--;
    }
  } else {
    if (index !== $(".slide").length - 1) {
      index++;
    }
  }
  $(".image-slider__image").eq(index).addClass("image-slider__image--active");
  $(".slide").eq(index).addClass("slide--active");
}
