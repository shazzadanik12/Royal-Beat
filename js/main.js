/*Header nav*/
$('.navbar-toggler').click(function() {
    $("body").addClass("nav-show");
});
$('.nav-close').click(function() {
    $("body").removeClass("nav-show");
});
/*Header nav*/

/*Home Page*/
$(document).ready(function() {
    var $slider = $('.slider');
    var $progressBar = $('.progress');
    var $progressBarLabel = $( '.slider__label' );

    var numItems = $('.slider_c2 .slicksl').length;
    var widthofbar = (100 / numItems);
    $(".slider_c2 .progress").css('background-size', widthofbar + '% 100%');

    var numItems = $('.slider_c1 .slicksl').length;
    var widthofbar = (100 / numItems);
    $(".slider_c1 .progress").css('background-size', widthofbar + '% 100%');

    var calc = 0;
    var noofshown = 5;
    if ($(window).width() < 1200) {
        noofshown = 4;
    }
    if ($(window).width() < 992) {
        noofshown = 2;
    }
    $( window ).resize(function() {
        if ($(window).width() < 1200) {
            noofshown = 4;
        }
        if ($(window).width() < 992) {
            noofshown = 2;
        };
    });
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
        calc = ( (nextSlide) / (slick.slideCount - noofshown) ) * 100;
        $(this).parent().parent().parent().find('.progress')
            .css('background-position', calc + '% 0')
            .attr('aria-valuenow', calc );

        $progressBarLabel.text( calc + '% completed' );
    });
    $slider.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 400,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });  
});
$('.slider_c .product').click(function() {
    $('.slider_c .product').removeClass("product_active");
    if($(this).hasClass("product_active")){
        $(this).removeClass("product_active");
    }else{
        $(this).addClass("product_active");
    }
});

$('.products_catalog .product').click(function() {
    $('.products_catalog .product').removeClass("product_active");
    if($(this).hasClass("product_active")){
        $(this).removeClass("product_active");
    }else{
        $(this).addClass("product_active");
    }
});

$('.slider_c .product .btn_c .counter .arrow_up_c').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().find(".noofc").html());
    var calcint = val + 1;
    if(calcint < 100){
        $(this).parent().find(".noofc").html(calcint);
    }
});
$('.slider_c .product .btn_c .counter .arrow_down_c').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().find(".noofc").html());
    var calcint = val - 1;
    if(calcint >= 1){
        $(this).parent().find(".noofc").html(calcint);
    }
});

$('.products_catalog .product .btn_c .counter .arrow_up_c').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().find(".noofc").html());
    var calcint = val + 1;
    if(calcint < 100){
        $(this).parent().find(".noofc").html(calcint);
    }
});
$('.products_catalog .product .btn_c .counter .arrow_down_c').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().find(".noofc").html());
    var calcint = val - 1;
    if(calcint >= 1){
        $(this).parent().find(".noofc").html(calcint);
    }
});


/*Home Page*/


/* CheckOut Page Product */
$('.cart_checkout_page .box .leftside .dataandtime .whichone p').click(function(e) {
    e.preventDefault();
    $(".cart_checkout_page .box .leftside .dataandtime .whichone p").removeClass("activated");
    $(this).addClass("activated");
    if($(this).hasClass("asap")){
        $(".select-datetime").addClass("cc_dis");
    }else{
        $(".select-datetime").removeClass("cc_dis");
    }
});


$('.cart_checkout_page .promocode span').click(function(e) {
    $(this).addClass('invisible');
    $('.promocode-field').removeClass('invisible');
});


$('.cart_checkout_page .tipc h6').click(function(e) {
    $(".cart_checkout_page .tipc .activated").removeClass("activated");
    $(this).addClass("activated");
});


$('.ct-product-counter .plicon').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().find("h3").html());
    var calcint = val + 1;
    if(calcint < 100){
        $(this).parent().find("h3").html(calcint);
    }
});
$('.ct-product-counter .miicon').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().find("h3").html());
    var calcint = val - 1;
    if(calcint >= 1){
        $(this).parent().find("h3").html(calcint);
    }
});

$('.ct-product-counter .plicon').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().parent().parent().parent().find(".no").html());
    var calcint = val + 1;
    if(calcint >= 1){
        $(this).parent().parent().parent().parent().find(".no").html(calcint);
    }
});

$('.ct-product-counter .miicon').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().parent().parent().parent().find(".no").html());
    var calcint = val - 1;
    if(calcint >= 1){
        $(this).parent().parent().parent().parent().find(".no").html(calcint);
    }
});


$('.cart_checkout_page .sendasgift').click(function(e) {
    if($('.cart_checkout_page .sendasgift .img2').hasClass("invisible")){
        $('.cart_checkout_page .sendasgift .img2').removeClass("invisible");
        $('.cart_checkout_page .sendasgift .img1').addClass("invisible");
    }else{
        $('.cart_checkout_page .sendasgift .img2').addClass("invisible");
        $('.cart_checkout_page .sendasgift .img1').removeClass("invisible");
    }
});

/* CheckOut Page Product */

/*Products */
    if ($(window).width() < 768) {
        $(".product_page .stores-inner").addClass('fade');
        $(".product_page .stores-inner").fadeOut();
        $(".product_page .stores-inner").addClass('modal');
        $(".modal-backdrop").show();
    }  
    else{
        $(".product_page .stores-inner").removeClass('fade');
        $(".product_page .stores-inner").removeClass('modal');
        $("body").removeClass('modal-open');
        $(".modal-backdrop").hide();
        $(".modal-content").removeClass('position-relative');
    }
        
$('.product_page img.plicon').click(function(e) {
    e.preventDefault();
    console.log("text")
    var val = parseInt($(this).parent(".frow").find("input").val());
    var calcint = val + 1;
    if(calcint < 100){
        $(this).parent(".frow").find("input").val(calcint);
    }
});

$('.product_page img.miicon').click(function(e) {
    e.preventDefault();
    var val = parseInt($(this).parent().find("input").val());
    var calcint = val - 1;
    if(calcint >= 1){
        $(this).parent().find("input").val(calcint);
    }
});

$('.product_page .addtc').click(function(e) {
    e.preventDefault();
    $(this).html("Added!");
});
/* Product */

$('.checkout-shown-btn').click(function() {
    if ($(window).width() < 992) {
    $(".ck-left").removeClass('d-none');
    $(".submit-btn-wrap button").removeClass('d-none');
    $(".ck-right-item").addClass('d-none');
    $(".ck-right-item.promocode").removeClass('d-block d-md-none');
    $(this).removeClass('d-block d-md-none');
    $(this).addClass('d-none');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false; }
});

$('.submit-btn-wrap button').click(function() {
    if ($(window).width() < 992) {
    $(".ck-left").addClass('d-none');
    $(".submit-btn-wrap button").addClass('d-none');
    $(".ck-right-item").removeClass('d-none');
    $(".ck-right-item.promocode").addClass('d-block d-md-none');
    $('.checkout-shown-btn').addClass('d-block d-md-none');
    $('.checkout-shown-btn').removeClass('d-none');
    $("#mobi-hide").removeClass('d-block d-lg-block d-md-none');
    $("#mobi-hide").addClass('d-none');
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false; }
});


