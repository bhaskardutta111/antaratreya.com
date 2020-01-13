// function changeNavBg(){
//     var navbar = document.querySelector('.navbar');
//     var nav = document.querySelector('.container');
//     var y = window.scrollY;
// if(y >= 422){
//     // navbar.style.backgroundColor = 'red';
//     // nav.style.display = 'none';
// console.log('ckjndjcdncjdnjkjdncj');
// }
// else{
//     // navbar.style.backgroundColor = 'linear-gradient(331deg, #48f1e6, #da30b3, #6f5cef)';
// }
// }

// changeNavBg();

//call function wow as soon as page loads
new WOW().init();

//function for automatic slideshow
var slideInd = 0;

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

window.onscroll = function(){
    // console.log(window.scrollY);
    if(window.scrollY > 37){
        navbar.classList.add("sticky");
        options.style.color = "#000";
    }
    else{
        navbar.classList.remove("sticky");
        options.style.color = "#fff";

    }
};



autoSlideShow();