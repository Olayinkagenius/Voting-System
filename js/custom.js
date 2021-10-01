/* jQuery Pre loader
 -----------------------------------------------*/
$(window).load(function() {
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


$(document).ready(function() {

    /* Home Slideshow Vegas
    -----------------------------------------------*/
    $(function() {
        $('body').vegas({
            slides: [
                { src: 'images/slide-1.jpg' },
                { src: 'images/slide-2.jpg' },
                { src: 'images/slide-3.jpg' },
                { src: 'images/slide-4.jpg' }
            ],
            timer: false,
            transition: ['zoomOut', ]
        });
    });


    /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    })


    /* wow
    -------------------------------*/
    new WOW({ mobile: false }).init();

});

// Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });
}
var btnContainer2 = document.getElementById("hamDIV");

// Get all buttons with class="btn" inside the container
var btns2 = btnContainer2.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns2.length; i++) {
    btns2[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("hactive");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" hactive", "");
        }

        // Add the active class to the current/clicked button
        this.className += " hactive";
    });
}