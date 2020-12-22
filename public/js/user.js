$(document).ready(function () {

  $('.hambuger_title').click(function () {
    $('.header_nav_right').toggleClass('header_nav_right_active');
    
  });
  
  $('.open-category').click(function () {
    $('.header_nav_left').toggleClass('header_nav_left_active');    
  }); 
  

  $('.next').click(function () {
    $(this).parent().find('.nav_subcategories').addClass('nav_subcategories_active');
  });
  
    $('.btn-back').click(function () {
    $('.nav_subcategories').removeClass('nav_subcategories_active');
//    $('.header_nav_left').toggleClass('header_nav_left_active');
  });
  
  
  $('.header_nav_left-title').click(function () {
    $('.header_nav_left').removeClass('header_nav_left_active');    
  });
  
  

  $('.closed').click(function () {
    $('.header_nav_right').removeClass('header_nav_right_active');
    $('.header_nav_left').removeClass('header_nav_left_active'); 
    $('.nav_subcategories').removeClass('nav_subcategories_active');
    
  });

  /*-----Слайдер на главной странице БАННЕР-----*/

  $('.slider_top').slick({
    dots: true,
    arrows: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1259,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        }
    },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        }
    },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
    },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
    }
  ]
});

  /*------x----------------------x---------*/
  
  /*-----------фильтр--------*/
  
  $(".catalog_filter_list").click(function() {
        $(this).find('ul').slideToggle('slow');
    });
  
  
  $(".button_filter").click(function() {
        $('.catalog_filter').slideToggle('slow');
    });
  
  
  /*------------Фильтр поиска---------------*/
  

  $(".polzunok-5").slider({
    min: 0,
    max: 10000,
    values: [1000, 8000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".polzunok-input-5-left").val(ui.values[ 0 ]);   
        $(".polzunok-input-5-right").val(ui.values[ 1 ]);  
    }    
});
$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
$(document).focusout(function() {
    var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".polzunok-5").slider("option", "min"),
    where_right = $(".polzunok-5").slider("values", 1),
    input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".polzunok-5").slider("option", "max"),
    where_left = $(".polzunok-5").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $(".polzunok-input-5-left").val(input_left); 
    $(".polzunok-input-5-right").val(input_right); 
    $(".polzunok-5").slider( "values", [ input_left, input_right ] );
});
  
    
  /*---------------------------------------------*/

  /*-----------Слайдер с навигацией----------*/

  $('.card_product_slider__master').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.card_product_slider__nav'
  });

  $('.card_product_slider__nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.card_product_slider__master',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
    },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
    },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
    }
  ]
});

  /*------x----------------------x---------*/


  /*---------------------Якоря----------------*/

  $('.products_this_category_name a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;


    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
  
   
  /*------x----------------------x---------*/  


  /*-----Модальное окно-----*/
  $('#modal, #button_phone ').magnificPopup({
    delegate: 'a',
    removalDelay: 500,
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    midClick: true,
  });



  /*--------x-----------------x---------*/

  $(":input").inputmask();
  $("#phone, #phone2, #phone5").inputmask({
        "mask": "+7(999)999-99-99",
        "clearIncomplete": true,
        showMaskOnFocus: false,
        showMaskOnHover: false,
  });
  
  
  
});