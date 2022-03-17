$('.img-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    infinity:true,
    // autoplay: true,
    autoplaySpeed: 2000,
  
    arrows:true,
    prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fas fa-chevron-left"></i><button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'><i class="fas fa-chevron-right"></i></button>`
});

$('.prent-img').slick({
    slidesToShow:1,
    slidesToScroll:1,
    infinity:true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 1000,
})