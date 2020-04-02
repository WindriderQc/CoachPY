(function ($) {
  "use strict";

  $('.single_gallery_part, .img-pop-up').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });

  var review = $('.client_review_iner');
  if (review.length) {
    review.owlCarousel({
      items: 3,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: false,
      margin: 30,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          576:{
              items:2,
          },
          991:{
              items:3,
          }
      }
    });
  }
  //------- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();

  $(document).ready(function() {
    $('select').niceSelect();
  });
 

$('.counter').counterUp({
  time: 2000
});

}(jQuery));