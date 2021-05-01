$('.js_slider').slick({
     centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
        dots: true,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 500,
        // speed: 5000,
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