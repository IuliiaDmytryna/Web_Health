$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200,
      // adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"></button>',
      responsive: [
        {
        breakpoint: 992,
        settings: {
        arrows: false,
        dots: true
      }
        }
      ]
      });
      $('ul.catalog__items').on('click', 'li:not(.catalog__item_active)', function() {
        $(this)
          .addClass('catalog__item_active').siblings().removeClass('catalog__item_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      $('.catalog-tab__link').each(function(i) {
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-tab__content').eq(i).toggleClass('catalog-tab__content_active');
          $('.catalog-tab__list').eq(i).toggleClass('catalog-tab__list_active');
        })
      })
      $('.catalog-tab__back').each(function(i) {
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-tab__content').eq(i).toggleClass('catalog-tab__content_active');
          $('.catalog-tab__list').eq(i).toggleClass('catalog-tab__list_active');
        })
      })

      //Modals
      $('[data-model=consultation]').on("click", function(){
        $('.overlay, #consultation').fadeIn('slow');
      })
      $('.overlay__specsympol').on("click", function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
      });
      $('.btn-mini').on("click", function(){
        $('.overlay, #order').fadeIn('slow');
      });
      $('.btn-mini').each(function(i){
        $(this).on('click', function(){
          $('#order .overlay__titledescr').text($('.catalog-tab__subtitle').eq(i).text());
        })
      })
        function validateForms(form){
          $(form).validate({
            rules: {
              name: {
                required: true,
                minlength: 2
              },
              phone: "required",
              email: {
                required: true,
                email: true
              }
            },
            messages: {
              name: {
                required: "We need your email address to contact you",
                minlength: jQuery.validator.format("At least {0} characters required!")
              },
              email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com"
              }
            }
          });
        }
        validateForms('#consultation form');
        validateForms('#order form');
        validateForms("#consulting_form");
        $('input[name=phone]').mask("+7 (999)999-99-99");
        $('form').submit(function(e) {
          e.preventDefault();
          $.ajax({
              type: "POST",
              url: "mailer/smart.php",
              data: $(this).serialize()
          }).done(function() {
              $(this).find("input").val("");
              $('#consultation, #order').fadeOut();
              $('.overlay, #thanks').fadeIn('slow');
  
              $('form').trigger('reset');
          });
          return false;
      });
      //Smooth scroll up
      $(window).scroll(function() {
        if($(this).scrollTop() > 1600) {
          $('.pageup').fadeIn();
        }else{
          $('.pageup').fadeOut();
        }
      });
      new WOW().init();
  });