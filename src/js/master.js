$(function () {
    init_menu_toggler_listeners();
})

function init_menu_toggler_listeners(){
    $(".toggler").click(toggle_mobile_menu);
}

function toggle_mobile_menu() {
    $("header .links").toggleClass("open");
}