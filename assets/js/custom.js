

$(document).ready(function () {

    $('.all-features').click(function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(this).text("See less features");
        } else {
            $(this).text("See all features");
        }
    });

});

$(window).scroll(function () {
    if ($(this).scrollTop() > 30) {
        $('.logo-white').addClass('not-visible');
        $('.logo-black').addClass('visible');
        $('.navbar').addClass('white');
    } else {
        $('.logo-white').removeClass('not-visible');
        $('.logo-black').removeClass('visible');
        $('.navbar').removeClass('white');
    }

});

$(".testimonial-slider").owlCarousel({
    items: 3,
    margin: 20,
    smartSpeed: 1000,
    slideSpeed: 500,
    mouseDrag: true,
    dots: true,
    loop: true,
    responsiveClass: true,
    autoplay: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        481: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});


$('#faq-left')
    .on('show.bs.collapse', function (e) {
        $(e.target).parent('.accordion-item').addClass('accordion-shadow');
    })
    .on('hide.bs.collapse', function (e) {
        $(e.target).parent('.accordion-item').removeClass('accordion-shadow');
    });

$('#faq-right')
    .on('show.bs.collapse', function (e) {
        $(e.target).parent('.accordion-item').addClass('accordion-shadow');
    })
    .on('hide.bs.collapse', function (e) {
        $(e.target).parent('.accordion-item').removeClass('accordion-shadow');
    });