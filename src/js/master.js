const IMG_FOLDER = "/src/img/"
$(function () {
    init_menu_toggler_listeners();
    init_swiper();
    init_window_onscroll()
})

function init_menu_toggler_listeners(){
    $(".toggler").click(toggle_mobile_menu);
}
function init_swiper(){
    const swiper = new Swiper('.swiper', {
        centeredSlides: true,
        initialSlide: 1,
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints:{
            360:{
                slidesPerView: 1
            }, 
            576:{
                slidesPerView:2
            },
            768:{
                slidesPerView: 3
            }
        },

        // Navigation arrows
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
    });
}
function init_window_onscroll(){
    document.addEventListener('scroll', function (event) {
        if($(document).scrollTop()>200){
            $("header.og-landing-header").addClass("scrolled")
        }else{
            $("header.og-landing-header").removeClass("scrolled")
        }
    }, true /*Capture event*/);
}
function toggle_mobile_menu() {
    $("header .links").toggleClass("open");
     if($("header .links").hasClass("open"))
        $("header .toggler img").attr("src", IMG_FOLDER+"bars-close.png")
    else
        $("header .toggler img").attr("src", IMG_FOLDER+"bars.png")
}