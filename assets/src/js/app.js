//Load jQuery for OctoberCMS Ajax Framework
window.$ = window.jQuery = require("jquery");

$("#footer-accordion").click(function(){
    $("#footer-content").toggleClass("hidden");
    $("#footer-accordion svg").toggleClass("hidden");
});