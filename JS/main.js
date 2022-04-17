$(document).ready(function () {
  $(window).on("load", function () {
    $(".loading .spinner").fadeOut(700, function () {
      $(this)
        .parent()
        .fadeOut(700, function () {
          $(this).remove();
        });
    });
    if (screenTop == 0) {
      $(".header .nav-menu").css("display", "none");
    } else {
      $(".header .nav-menu").css("display", "flex");
    }
    $("body").css("overflow", "auto");
  });

  // START CODEING OF THE LIBRARY OWL CAROUSEL
  $(".header .header-center .owl-carousel .item").height($(window).height());
  $(".header .header-center .owl-carousel .item").width($(window).width());

  $(window).resize(function () {
    $(".header .header-center .owl-carousel .item").height($(window).height());
    $(".header .header-center .owl-carousel .item").width($(window).width());
  });

  $(".header .header-center .owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    dots: true,
    center: true,
    autoplay: true,
    animateOut: "fadeOut",
  });
  // END CODEING OF THE LIBRARY OWL CAROUSEL

  // START CODING OF THE BRANDS OWL CAROUSEL
  $(".section-brands .content-b .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    center: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      350: {
        items: 2,
      },
      500: {
        items: 3,
      },
      800: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });
  // END CODING OF THE BRANDS OWL CAROUSEL

  $(".header .info .owl-carousel").owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    autoplay: true,
    responsive: {
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // START CODEING OF SHOW NAVIGATION
  $(".menu-").on("click", function () {
    $(".side-menu").toggleClass("open");
  });
  $(".fa-times").on("click", function () {
    $(".side-menu").removeClass("open");
  });

  $(".nav-span").on("click", function () {
    $(".side-menu").toggleClass("open");
  });
  $(".fa-times").on("click", function () {
    $(".side-menu").removeClass("open");
  });
  // END CODEING OF SHOW NAVIGATION

  // START CODEING OF SHOW NAVIGATION ON TOP SITE WITH SCROLL
  $(window).on("scroll", function () {
    if ($(this).scrollTop() != 0 && $(window).width() >= 1200) {
      $(".header-nav-left").fadeOut(150);
      $(".header-nav-right").fadeOut(150);
      $(".nav-menu").fadeIn(150);
    } else {
      $(".header-nav-left").fadeIn(150);
      $(".header-nav-right").fadeIn(150);
      $(".nav-menu").fadeOut(150);
    }
  });
  // END CODEING OF SHOW NAVIGATION ON TOP SITE WITH SCROLL

  // START CODING OF OPEN BOX-SEARCHING
  $(".header-right .fa-search").on("click", function () {
    $(".box-search").toggleClass("searchopen");
  });

  $(".box-search .search-hidden").on("click", function () {
    $(".box-search").removeClass("searchopen");
  });

  $(".nav-menu .fa-search").on("click", function () {
    $(".box-search").toggleClass("searchopen");
  });

  $(".box-search .search-hidden").on("click", function () {
    $(".box-search").removeClass("searchopen");
  });
  // END CODING OF OPEN BOX-SEARCHING

  //START CODING OF COUNTDOWN OF SECTION OFFER
  var content = $(".section-offer .countdown").html();

  $(".section-offer .countdown").countdown("2023/01/01", function (event) {
    $(this).html(event.strftime(content));
  });
  //START CODING OF COUNTDOWN OF SECTION OFFER

  var link = $('link[data-color="switch"]');
  var logo = $(".header .header-left .logo img");
  var logo1 = $(".header .nav-menu .nav-logo img");

  $(
    ".header .header-right .header-nav-right .icon-header-right .ic .fa-moon"
  ).on("click", function () {
    if (link.attr("href") == "./CSS/style.css") {
      link.attr("href", "./CSS/style-dark.css");
      logo.attr("src", "./images/logo-dark.png");
      logo1.attr("src", "./images/logo-dark.png");
    } else {
      link.attr("href", "./CSS/style.css");
      logo.attr("src", "./images/logo.png");
      logo1.attr("src", "./images/logo.png");
    }
  });

  $(".header .nav-menu .nav-icons .icon-header .fa-moon").on(
    "click",
    function () {
      if (link.attr("href") == "./CSS/style.css") {
        link.attr("href", "./CSS/style-dark.css");
        logo.attr("src", "./images/logo-dark.png");
        logo1.attr("src", "./images/logo-dark.png");
      } else {
        link.attr("href", "./CSS/style.css");
        logo.attr("src", "./images/logo.png");
        logo1.attr("src", "./images/logo.png");
      }
    }
  );

  $(".header .side-menu .menu-items a").on("click", function () {
    $(this).addClass("h").parent().siblings().find("a").removeClass("h");

    $("html,body").animate({
      scrollTop: $("#" + $(this).data("scroll")).offset().top,
    });
    $(".side-menu").removeClass("open");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      $(".back-to-top").fadeIn(250);
    } else {
      $(".back-to-top").fadeOut(250);
    }
  });

  $(".back-to-top i").on("click", function () {
    $("html, body").animate({
      scrollTop: 0,
    });
  });

  // START CODING OF FORM USER
  $("#fullname__error__message").hide();
  $("#email__error__message").hide();
  $("#email__error__message00").hide();
  $("#message__error__message").hide();

  $("#subscribe__error__message").hide();

  $("#show__message__form").hide();

  var error__fullname = false;
  var error__email = false;
  var error__message = false;

  var error__input = false;

  $("#form__fullname").focusout(function () {
    check__fullname();
  });

  $("#form__fullname").keyup(function () {
    check__fullname__1();
  });

  function check__fullname() {
    var full__name = $("#form__fullname").val();

    if (full__name == "") {
      $("#fullname__error__message").show();
      $("#form__fullname").css("border-bottom", "2px solid  #f5543f");
      error__fullname = true;
    } else {
      $("#fullname__error__message").hide();
      $("#form__fullname").css("border-bottom", "2px solid  #595967");
    }
  }

  function check__fullname__1() {
    var full__name = $("#form__fullname").val();

    if (full__name == "") {
      $("#fullname__error__message").show();
      $("#form__fullname").css("border-bottom", "2px solid  #f5543f");
      error__fullname = true;
    } else {
      $("#fullname__error__message").hide();
      $("#form__fullname").css("border-bottom", "2px solid  #595967");
    }
  }

  $("#form__email").focusout(function () {
    check__email();
  });

  function check__email() {
    var parent = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email = $("#form__email").val();

    if (email == "") {
      $("#email__error__message").html("The text field is required.");
      $("#email__error__message").show();
      $("#form__email").css("border-bottom", "2px solid #f5543f");
      error__email = true;
    } else if (!parent.test(email)) {
      $("#email__error__message").html("The email is not a valid email.");
      $("#email__error__message").show();
      $("#form__email").css("border-bottom", "2px solid #f5543f");
      error__email = true;
    } else {
      $("#email__error__message").hide();
      $("#form__email").css("border-bottom", "2px solid #595967");
    }
  }

  $("#form__email").keyup(function () {
    check__email__1();
  });

  function check__email__1() {
    var parent = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email = $("#form__email").val();

    if (email == "") {
      $("#email__error__message").html("The text field is required.");
      $("#email__error__message").show();
      $("#form__email").css("border-bottom", "2px solid #f5543f");
    } else if (!parent.test(email)) {
      $("#email__error__message").html("The email is not a valid email.");
      $("#email__error__message").show();
      $("#form__email").css("border-bottom", "2px solid #f5543f");
      error__email = true;
    } else {
      $("#email__error__message").hide();
      $("#form__email").css("border-bottom", "2px solid #595967");
    }
  }

  $("#form__message").focusout(function () {
    check__message();
  });

  $("#form__message").keyup(function () {
    check__message__1();
  });

  function check__message() {
    var message = $("#form__message").val();
    if (message !== "") {
      $("#message__error__message").hide();
      $("#form__message").css("border-bottom", "2px solid  #595967");
    } else {
      $("#message__error__message").show();
      $("#form__message").css("border-bottom", "2px solid  #f5543f");
      error__message = true;
    }
  }

  function check__message__1() {
    var message = $("#form__message").val();
    if (message !== "") {
      $("#message__error__message").hide();
      $("#form__message").css("border-bottom", "2px solid  #595967");
    } else {
      $("#message__error__message").show();
      $("#form__message").css("border-bottom", "2px solid  #f5543f");
      error__message = true;
    }
  }

  $("#form__submit").click(function () {
    error__fullname = false;
    error__email = false;
    error__message = false;

    check__fullname();
    check__fullname__1();
    check__email();
    check__email__1();
    check__message();
    check__message__1();

    if (
      error__fullname === false &&
      error__email === false &&
      error__message === false
    ) {
      $("#form__message").val("");
      $("#form__email").val("");
      $("#form__fullname").val("");
      $("#show__message__form").fadeIn(1000, function () {
        $(this).fadeOut(1000);
      });
      return false;
    } else {
      return false;
    }
  });

  // START CODING OF INPUT SUBSCRIBE OF SECTION CONTACT
  $("#input__subscribe").focusout(function () {
    check__input();
  });

  function check__input() {
    var parent = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email = $("#input__subscribe").val();

    if (email == "") {
      $("#subscribe__error__message").html("The text field is required.");
      $("#subscribe__error__message").show();
      $("#input__subscribe").css("border", "1px solid #f5543f");
      $("#input__subscribe").css("border-left", "3px solid #f5543f");
      error__input = true;
    } else if (!parent.test(email)) {
      $("#subscribe__error__message").html("The email is not a valid email.");
      $("#subscribe__error__message").show();
      $("#input__subscribe").css("border", "1px solid #f5543f");
      $("#input__subscribe").css("border-left", "3px solid #f5543f");
      error__input = true;
    } else {
      $("#subscribe__error__message").hide();
      $("#input__subscribe").css("border", "none");
      $("#input__subscribe").css("border-left", "3px solid var(--main-color)");
    }
  }

  $("#input__subscribe").keyup(function () {
    check__input__1();
  });

  function check__input__1() {
    var parent = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email = $("#input__subscribe").val();

    if (email == "") {
      $("#subscribe__error__message").html("The text field is required.");
      $("#subscribe__error__message").show();
      $("#input__subscribe").css("border", "1px solid #f5543f");
      $("#input__subscribe").css("border-left", "3px solid #f5543f");
      error__input = true;
    } else if (!parent.test(email)) {
      $("#subscribe__error__message").html("The email is not a valid email.");
      $("#subscribe__error__message").show();
      $("#input__subscribe").css("border", "1px solid #f5543f");
      $("#input__subscribe").css("border-left", "3px solid #f5543f");
      error__input = true;
    } else {
      $("#subscribe__error__message").hide();
      $("#input__subscribe").css("border", "none");
      $("#input__subscribe").css("border-left", "3px solid var(--main-color)");
    }
  }

  $("#input__of__subscribe").click(function () {
    error__input = false;

    check__input();
    check__input__1();

    if (error__input === false) {
      $("#input__subscribe").val("");
      $("#show__message__form").fadeIn(1000, function () {
        $(this).fadeOut(1000);
      });
      return false;
    }
  });

  // END CODING OF INPUT SUBSCRIBE OF SECTION CONTACT

  $("#light__gallery").lightGallery({
    selector: ".__gallery__",
  });
});
