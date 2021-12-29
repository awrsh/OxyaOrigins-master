$(function () {
    init_menu_toggler_listeners();
    init_swiper();
})

function init_menu_toggler_listeners(){
    $(".toggler").click(toggle_mobile_menu);
}
function init_swiper(){
    const swiper = new Swiper('.swiper', {
    // Optional parameters
    centeredSlides: true,
    initialSlide: 1,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints:{
        360:{
            slidesPerView: 2
        }, 
        768:{
            slidesPerView:3
        }
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

   
});

}
function toggle_mobile_menu() {
    $("header .links").toggleClass("open");
}