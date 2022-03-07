$('.bandner').slick({
    slidesToShow:1,
    slidesToScroll:1,
    infinity:true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots:true,
})

$('.slide1').slick({
    slidesToShow:4,
    slidesToScroll:1,
    infinity:true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            
            }
        }
    ]
})