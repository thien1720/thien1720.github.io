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

// $(window).scroll(function(){
//     if($(this).scrollTop()){
//         $('.back-top').fadeIn()
//     }else{
//         $('.back-top').fadeOut()
//     }
// })
// $('.back-top').click(function(){
//     $('html, body').animate({
//         scrollTop:0    }, 1000)
// })