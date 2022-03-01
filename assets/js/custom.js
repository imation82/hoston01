

$(document).ready(function () {

    $('[data-bs-toggle="collapse"]').click(function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(this).text("See less features");
        } else {
            $(this).text("See all features");
        }
    });

});

$(".testimonial-slider").owlCarousel({	
    items : 3,
    margin: 20,
    smartSpeed: 1000,
    slideSpeed : 500,
    mouseDrag: true,
    dots: true,
	loop: true,
    responsiveClass:true,      
    autoplay : true,
    nav: false,
    responsive:{
        0:{
            items: 1
        },
        481:{
            items: 1
        },
        768:{
            items: 2
        },
        992:{
            items: 3
        }
    }
});

