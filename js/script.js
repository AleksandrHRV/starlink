$(document).ready(function(){
    $('.slider').slick({
       responsive:[
        {
            breakpoint: 2048,
            settings: "unslick"
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1.25,
            arrows: false,
            dots: false,
            adaptiveHeight: true,
            slidesToScroll: 1,
            speed: 500,
            easing: 'easeInQuint',
            infinite: false,
            adaptiveHeight: true,
            variableWidth: false,
        }
       }
    ],
    });
   }); 





// ====== муню бургер===================
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('lock')
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}




