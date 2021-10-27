$( document ).ready( function() {

  if ( $('.logos' ).length ) {
    $('.logos').slick({
      dots: false,
      arrows: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
            breakpoint: 992,
            settings: {
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
      ]
    });   
  }

  if ( $('.categories' ).length ) {
    $('.categories').slick({
      dots: false,
      arrows: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $(".category-prev"),
      nextArrow: $(".category-next"),
      responsive: [
        {
            breakpoint: 1400,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }
      ]
    });   
  }

  if ( $('.guiters' ).length ) {
    $('.guiters').slick({
      dots: false,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(".guiter-prev"),
      nextArrow: $(".guiter-next"),
    });   
  }

});