(function ($) {
    "use strict";
  
    $(window).scroll(function () {
      var window_top = $(window).scrollTop() + 1;
      if (window_top > 50) {
        $('.main_menu').addClass('menu_fixed animated fadeInDown');
        document.getElementById('navlogo_id').src = "img/logo_small.png";
      } else {
        $('.main_menu').removeClass('menu_fixed animated fadeInDown');
       document.getElementById('navlogo_id').src = "img/logo.png";
      }
    });
  

}(jQuery));