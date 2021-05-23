// ===== portfolio =====

$('.js_slider').slick({
     centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
        dots: true,
        arrows: true,
        responsive: [
    {
      breakpoint: 1439,
      settings: {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
        arrows: true,
        dots: true,
        slideToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
        arrows: true,
        dots: true,
      }
    }
  ]
});





// ===== reviews =====

$('.js-slider2').slick({
     centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
        dots: true,
        arrows: true,
        responsive: [
    {
      breakpoint: 1439,
      settings: {
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1,
        arrows: true,
        dots: true,
        slideToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 1,
        arrows: true,
        dots: true,
      }
    }
  ]
});

