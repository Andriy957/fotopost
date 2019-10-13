//SLIDER
var timer;
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
timer=setInterval(function() {
  plusSlides(1);
}, 5000);



//BUTTON DOWN AND UP
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function topFunction2Section() {
  document.body.scrollTop = 940;
  document.documentElement.scrollTop =940;
}

function topFunction3Section() {
  document.body.scrollTop = 2000;
  document.documentElement.scrollTop =2000;
}

function topFunction4Section() {
  document.body.scrollTop = 2600;
  document.documentElement.scrollTop =2600;
}


//MODAL IMAGE PORTFOLIO

var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var modal = document.getElementById('myModal');
var img = document.getElementsByClassName("foto-portfolio");

for( var i = 0; i < img.length; i++){
  img[i].addEventListener('click', function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  });
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}


