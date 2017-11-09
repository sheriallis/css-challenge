$(document).ready(function() {
  const search = document.querySelector(".search-icon");
  const input = document.querySelector(".search-field");

  $(search).click(function() {
    $(input).toggleClass("active");
  });
});
