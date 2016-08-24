//myPlugins
  ;(function($){
    $.fn.qTabs = function(){
        var global = this;
        global.find('.tabs-content__item').hide();
        global.find('.tabs-content__item.active').show();
        $(this).find('.tabs-nav li').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var data = $(this).find('a').attr('href');
            $(global).find('.tabs-content__item').hide().removeClass('active');
            $(global).find('.tabs-content__item' + data + '').fadeIn(300).addClass('active');
            return false;
        })
    }

    $.fn.qToggle = function(){
        var global = this;
        $(this).click(function(e){
            e.preventDefault();
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        })
    }
  }(jQuery));


$(document).ready(function(){

    /*-------------------------------------------------*/
    /*    спецпредложения карусель
    /*-------------------------------------------------*/
    $('#specOfferCarousel').fadeIn(500);
    $('#specOfferCarousel').owlCarousel({
        nav: true,
        dots: true,
        lazyLoad:true,
        loop:true,
        items: 4,
        margin:10
    });

    /*-------------------------------------------------*/
    /*    Продукция карусель 2 колонки
    /*-------------------------------------------------*/
    $('.product-carousel-col2 .products-list').fadeIn(500);
    $('.product-carousel-col2 .products-list').owlCarousel({
        nav: true,
        dots: true,
        lazyLoad:true,
        loop:true,
        items: 2,
        margin:15
    });
    /*-------------------------------------------------*/
    /*    Продукция карусель 4 колонки
    /*-------------------------------------------------*/
    $('.product-carousel-col4 .products-list').fadeIn(500);
    $('.product-carousel-col4 .products-list').owlCarousel({
        nav: true,
        dots: true,
        lazyLoad:true,
        loop:true,
        items: 4,
        margin:15
    });
})

$(window).load(function(){
    $('.owl-carousel').on('mousewheel', '.owl-stage', function (e) {
        if (e.originalEvent.wheelDelta>0) {
            $(this).trigger('next.owl');
        } else {
            $(this).trigger('prev.owl');
        }
        e.preventDefault();
    });
})
