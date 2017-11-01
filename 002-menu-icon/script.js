$(document).ready(function() {
  const menu = document.getElementsByClassName("menu");

  $(menu).click(function() {
    $(menu).toggleClass("active");
    $(menu).removeClass("static");
  });
});
