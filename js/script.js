'use strict'

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());        
    }

};

// Меню бургер
const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// Cards slicker Carousel

$(document).ready(function(){
    $('.cards__body').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
})

// Big carousel

$(document).ready(function(){
    $('.crsl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5800,
        pauseOnFocus: false,
        pauseOnHover: false,
        fade: true,
        responsive: [
            {
                breakpoint: 920,
                settings: {
                    arrows: false,
                }
            }
        ]
    })
})