$(document).ready(function() {
  const search = document.querySelector(".search-icon");
  const input = document.querySelector(".search-field");
  const menuIcon = document.querySelector(".menu-icon");
  const menu = document.querySelector(".menu");
  const panel = document.querySelector(".notif-panel");

  $(search).click(function() {
    $(input).toggleClass("active");
  });

  $(menuIcon).click(function() {
    $(panel).toggleClass("reveal-menu");
    $(menu).toggleClass("reveal-menu");
  });
});
