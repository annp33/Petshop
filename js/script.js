/********* MENU MOBILE *********/

var botao = document.querySelector('.botaoMenu');
var menuMobile = document.querySelector('#nav');

botao.addEventListener('click', function() {
    if(menuMobile.style.display === 'block'){
        menuMobile.style.display = 'none';
        document.querySelector('.menu').src = 'imagens/menu.png'
    }else{
        menuMobile.style.display = 'block';
        document.querySelector('.menu').src = 'imagens/menu2.png'
    }
});

window.onresize = function() {
    var larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (larguraTela > 768) {
        menuMobile.style.display = 'block';
    }else{
        menuMobile.style.display = 'none';
        document.querySelector('.menu').src = 'imagens/menu.png'
    }
};

/********* FIM MENU MOBILE *********/



/************** CARROSSEL *************/

var slideIndex = 1;

showSlides(slideIndex);

showSlidesAutomatic();

function plusSlides(n){
    showSlides(slideIndex += n)
}

function currentSlide(n){
    showSlides(slideIndex = n)
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots =  document.getElementsByClassName("dot");

    if(n > slides.length){ slideIndex = 1 }
    if(n < 1){ slideIndex = slides.length }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";  
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlidesAutomatic() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    var dots =  document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlidesAutomatic, 3000); 
}

/************ FIM CARROSSEL ************/

