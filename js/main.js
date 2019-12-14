//Super keywordy: On-page search engine optimization tool
//Web application (main.js) developed by Graham O'Mahony
//Copyright 2017 - 2019
// var mobilenav = document.getElementById("mobilenav"), desknav = document.getElementById("desktop"), animate = document.getElementsByClassName("animateNav"), mask = document.getElementById("mask");
// mobilenav.onclick = function animate(){
//   mobilenav.classList.toggle("animateNav");
//   mask.style.display = "block";
//   if(mobilenav.classList.contains("animateNav")){
//   desknav.style.width = "100%";
// } else{
//   desknav.style.width = "";
//   mask.style.display = "none";
// }
// }
// var maskcanvas = document.getElementById("mask");
// maskcanvas.onclick = function(event){
//   mask.style.display = "none";
//   mobilenav.classList.remove("animateNav");
//   desknav.style.width = "";
// }
// var wndw = window.innerWidth, xwind = wndw.value;
// if(xwind > 768){
//   mobilenav.classList.remove("animateNav");
//   desknav.style.width = "";
// }
// Display page scroll button on scroll > 300px from top
window.onscroll = function(){
	pageScroll(1000)
}
function pageScroll(){
  var pgscroll = document.getElementById("pgscroll");
  if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
  //document.getElementById("pgscroll").style.display = "block";
  pgscroll.style.display = "block";
  setTimeout(function(){
    pgscroll.classList.add("fade")}, 250);
} else{
  setTimeout(function(){
    pgscroll.classList.remove("fade")
  }, 250);
    (pgscroll.style.display = "none");
}
  pgscroll.onclick = function toTopPage(){
    var topPageID = document.getElementsByTagName("body")[0].id;
    pgscroll.href = "#" + topPageID;
  }
}
// if(document.getElementsByTagName("body")[0].id === "not-found"){
// window.addEventListener("load", function pageHeight(){
//   var high = window.innerHeight;
//   var headhigh = document.getElementsByTagName("header")[0].clientHeight;
//   var foothigh = document.getElementsByTagName("footer")[0].clientHeight;
//   var totalHigh = high - (+headhigh + +foothigh + +1);
//   document.getElementById("page-error").setAttribute("style", "height: " + totalHigh + "px;");
// }, true);
// }
// if(document.getElementsByTagName("body")[0].id === "nothing-here"){
// window.addEventListener("load", function pageHeight(){
//   var high = window.innerHeight;
//   var headhigh = document.getElementsByTagName("header")[0].clientHeight;
//   var foothigh = document.getElementsByTagName("footer")[0].clientHeight;
//   var totalHigh = high - (+headhigh + +foothigh + +1);
//   document.getElementById("empty-page").setAttribute("style", "height: " + totalHigh + "px;");
// }, true);
// }