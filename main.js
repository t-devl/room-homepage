$(".nav__toggle").click(function () {
  if ($(".nav").hasClass("nav--active")) {
    $(".nav").removeClass("nav--active");
    $(".nav__toggle-icon").attr("src", "images/icon-hamburger.svg");
  } else {
    $(".nav").addClass("nav--active");
    $(".nav__toggle-icon").attr("src", "images/icon-close.svg");
  }
});
