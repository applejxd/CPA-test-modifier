// Exhibits の縦の長さを修正
var scrolls = document.querySelectorAll("div[id^='exhibits'] div.scroll");
scrolls.forEach(function(div) {
  div.style.height = "800px";
});