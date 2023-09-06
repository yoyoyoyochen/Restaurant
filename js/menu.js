let InitMenuCarousel={
    initMenuCarousel:function(){
        $(".responsive").slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow:2, //4,
            slidesToScroll:2, //4,
            prevArrow: $(".carousel-control-prev"), // 上一個按鈕的選擇器
            nextArrow: $(".carousel-control-next"), // 下一個按鈕的選擇器
            responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,//3,
            slidesToScroll: 2,//3,
            prevArrow: $(".carousel-control-prev"), // 上一個按鈕的選擇器
            nextArrow: $(".carousel-control-next"), // 下一個按鈕的選擇器
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            
          }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    }
}