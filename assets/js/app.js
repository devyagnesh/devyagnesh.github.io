$(document).ready(function () {
    init();
});


function init(){
  scrollToStick();
  toggleNavMenus();
  showCollectionSlide();
}


function scrollToStick() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("nav").addClass(
        "shadow-md bg-white transition-all duration-300 fixed top-0 z-[1000]"
      );
    } else {
      $("nav").removeClass("shadow-md fixed top-0 transparent").addClass('bg-white');
    }
  });
}

function toggleNavMenus() {
  $("#mobile-menu-btn").click(function () {
    $("#mobile-menu").slideToggle();
  });

  $("#mobile-dropdown-btn").click(function () {
    $("#mobile-dropdown").slideToggle();
  });
}

function showCollectionSlide() {
  let index = 0;
  const slides = $("#collection-slider .slide");
  const totalSlides = slides.length;
  const slider = $("#collection-slider");

  function updateSlider() {
    const translateValue = -index * 100 + "%";
    slider.css("transform", "translateX(" + translateValue + ")");
  }

  $("#next").click(function () {
    index = (index + 1) % totalSlides;
    updateSlider();
  });

  $("#prev").click(function () {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlider();
  });
}
