$(document).ready(function () {
  $(".slider").slick({
    responsive: [
      {
        breakpoint: 2048,
        settings: "unslick",
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
          easing: "easeInQuint",
          infinite: false,
          adaptiveHeight: true,
          variableWidth: false,
        },
      },
    ],
  });
});

// ====== муню бургер===================
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
    console.log(iconMenu);
  });
}

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      if (iconMenu.classList.contains("active")) {
        document.body.classList.remove("lock");
        iconMenu.classList.remove("active");
        menuBody.classList.remove("active");
      }

      window.scroll({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}
