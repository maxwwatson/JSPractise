// JQuery to make background image stretch across screen
// $document.ready(function() {
//     $('.header').height($(window).height());
// })

/*  Javascript to do same as above jquery*/ 
var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})
