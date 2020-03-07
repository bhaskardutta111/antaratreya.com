if(window.matchMedia("(min-width: 901px) and (max-width: 1800px)").matches){
    var lgScrnFuncs = (function() {
        return{
                    //change background of navbar on scroll
            addStickyNavbar: function(){
                var navbar = document.querySelector('.navbar');
                var options = document.querySelector('#opt');
                var sticky = document.querySelector('.sticky');
                window.onscroll = function(){
                    if(window.scrollY > 300){
                        navbar.classList.add("sticky");
                        options.style.color = "#000";        
                    } else {
                        navbar.classList.remove("sticky");
                        options.style.color = "#fff";
                    }
                };
            }
        };

    })();
}

if(window.matchMedia("(max-width: 600px)").matches){
    var smScrnFuncs = (function() {
    })();    
}


var allFuncs = (function(lgFuncs, smFuncs) {

        //function for automatic slideshow    
        var slideInd = 0;
        var autoSlideShow = function() {
            var slides = document.getElementsByClassName("slide");
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
        };

        var tasksOnLoad = function() {
        //call function wow as soon as page loads
            new WOW().init();
        }

        //function to scroll to top
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behaviour: "smooth"
            });
        }
        var scrollTopBtn = document.querySelector(".btn-scroll-top");
        window.onscroll = function() {
            if(window.scrollY > 300){
                scrollTopBtn.style.display = "block";
                scrollTopBtn.addEventListener("click", scrollToTop);
            } else {
                scrollTopBtn.style.display = "none";   
            }
        }
        var abtReadMoreBtn = document.querySelector(".abtReadMore");
        var authReadMoreBtn = document.querySelector(".authReadMore");
        var mediaReadMoreBtn = document.querySelector(".mediaReadMore");
        var interviewReadMoreBtn = document.querySelector(".interviewReadMore");
        
        abtReadMoreBtn.addEventListener('click', function() {
            var morePara = document.querySelectorAll(".morePara");
            for(var abtBtn = 0; abtBtn < morePara.length; abtBtn++){
                morePara[abtBtn].style.display = "block";
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

        autoSlideShow();
        window.onload = tasksOnLoad();    
        return {
            init: function(){
                lgFuncs.addStickyNavbar();
                smFuncs.addSocialBar();
            }
        };

})(lgScrnFuncs, smScrnFuncs);

allFuncs.init();


//menu for phone screen
function openNav() {
    document.getElementById("nav").style.width = "100%";
}

function closeNav() {
    document.getElementById("nav").style.width = "0%";
}

//speedDial function

