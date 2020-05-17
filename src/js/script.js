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
  });