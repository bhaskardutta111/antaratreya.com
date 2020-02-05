//function to progress loading
var load = document.querySelector('.load');
function loadFunc(){
    load.style.display = 'none';
}

//call function wow as soon as page loads
new WOW().init();

//function for automatic slideshow
var slideInd = 0;
autoSlideShow();

function autoSlideShow() {
    var slides = document.getElementsByClassName('slide');
    var dots = document.getElementsByClassName("dot");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideInd++;
    if (slideInd > slides.length) {

        slideInd = 1;
    }
    slides[slideInd-1].style.display = 'block';

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slideOn", "");
    }
    dots[slideInd-1].className = dots[slideInd-1].className +  " slideOn";

    setTimeout(autoSlideShow, 3000); // Change image every 3 seconds
}

//change background of navbar on scroll

var navbar = document.querySelector('.navbar');
var options = document.querySelector('#opt');
var sticky = document.querySelector('.sticky');

var scrollTopBtn = document.querySelector(".btn-scroll-top");

window.onscroll = function(){
    // console.log(window.scrollY);
    if(window.scrollY > 300){
        navbar.classList.add("sticky");
        options.style.color = "#000";
        scrollTopBtn.style.display = "block";

    } else {
        navbar.classList.remove("sticky");
        options.style.color = "#fff";
        scrollTopBtn.style.display = "none";   
    }
};

//button to scroll to top

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth"
    });
}

//reviews on slides
var revIndx = 1;
reviewSlide(revIndx);

function revSlide(n){
    reviewSlide(revIndx = revIndx + n);
}

function reviewSlide(n) {
    var review = document.getElementsByClassName('rev');

    if(n > review.length){
        revIndx = 1;
    }
    if (n < 1) {
        revIndx = review.length;
    }

    for (var r = 0; r < review.length; r++) {
        review[r].style.display = 'none';
    }
    review[revIndx-1].style.display = 'block';
}


//scripts in responsive case
//read more function 
var abtReadMoreBtn = document.querySelector(".abtReadMore");
var authReadMoreBtn = document.querySelector(".authReadMore");
var mediaReadMoreBtn = document.querySelector(".mediaReadMore");
var interviewReadMoreBtn = document.querySelector(".interviewReadMore");

abtReadMoreBtn.addEventListener('click', function() {
    var abtPara = document.querySelectorAll(".abtPara");

    for(var abtBtn = 0; abtBtn < abtPara.length; abtBtn++){
        abtPara[abtBtn].style.display = "block";
        abtReadMoreBtn.style.display = "none";
    }
});

authReadMoreBtn.addEventListener('click', function() {
    var authPara = document.querySelectorAll(".authPara");

    for(var authBtn = 0; authBtn < authPara.length; authBtn++){
        authPara[authBtn].style.display = "block";
        authReadMoreBtn.style.display = "none";
    }
});

mediaReadMoreBtn.addEventListener('click', function() {
    var mediaPara = document.querySelectorAll(".mediaPara");

    for(var mediaBtn = 0; mediaBtn < mediaPara.length; mediaBtn++){
        mediaPara[mediaBtn].style.display = "block";
        mediaReadMoreBtn.style.display = "none";
    }
});

interviewReadMoreBtn.addEventListener('click', function() {
    var intervPara = document.querySelector(".intervPara");
    interviewReadMoreBtn.style.display = "none";
    intervPara.style.display = "block";
});

//menu for phone screen
function openNav() {
    document.getElementById("nav").style.width = "100%";
}

function closeNav() {
    document.getElementById("nav").style.width = "0%";
}
