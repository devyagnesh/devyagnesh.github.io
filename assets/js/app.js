$(document).ready(function () {
  init();
});

function init() {
  scrollToStick();
  showProductPurchaseModel();
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
      $("nav").removeClass("shadow-md fixed top-0 transparent");
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

function showProductPurchaseModel() {
  if ($(".buy-btn").length) {
    $(".buy-btn").click(function () {
      $("nav").removeClass("shadow-md fixed top-0 transparent")
      let productName = $(this).data("name");
      let productCode = $(this).data("code");
      let productImage = $(this).data("image");

      $("#modalProductName").text(productName);
      $("#modalProductCode").text(productCode);
      $("#modalProductImage").attr("src", productImage);
      $("#productModal").removeClass("hidden");
    });
  }

  $("#closeModal").click(function () {
    $("#productModal").addClass("hidden");
  });
}
