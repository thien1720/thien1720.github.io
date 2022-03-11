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

$('.bandner').slick({
    slidesToShow:1,
    slidesToScroll:1,
    infinity:true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots:true,
})

$('.style-news').slick({
    slidesToShow:3,
    slidesToScroll:1,
    infinity:true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
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

