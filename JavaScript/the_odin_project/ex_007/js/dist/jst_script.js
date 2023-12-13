addEventListener("DOMContentLoaded", function (event) { return console.log("The DOM is fully loaded."); });
addEventListener("load", function (event) { return console.log("The Page is fully loaded."); });
addEventListener("beforeunload", function (event) {
    event.preventDefault();
    event.returnValue = 'Here we go';
});
addEventListener("unload", function (event) { return console.log("unloaded"); });
window.addEventListener('load', checkJSLoaded);
var scrolling = false;
// window.scroll = () => {
//     scrolling = true;
// };
function runScroll() {
    setInterval(function () {
        if (scrolling) {
            scrolling = false;
            // place the scroll handling logic here
            console.log("scrolled");
        }
    }, 300);
    scrolling = true;
}
window.addEventListener("scroll", runScroll);
function checkJSLoaded() {
    // create the script element
    var script = document.createElement('script');
    // assign an onload event handler
    script.addEventListener('load', function (event) {
        console.log('app.js file has been loaded');
    });
    // load the script file
    script.src = '../js/app.js';
    document.body.appendChild(script);
}
var mouse_move_div = document.querySelector(".mouse_move_div");
mouse_move_div.addEventListener("mousemove", change_to_blue);
mouse_move_div.addEventListener("mouseleave", function () { return mouse_move_div.style["backgroundColor"] = "aqua"; });
function change_to_blue(event) {
    mouse_move_div.style["backgroundColor"] = "blue";
}
var scroll_to_button = document.querySelector(".scroll_to_button");
var scroll_to_object = document.querySelector(".scroll_to_object");
scroll_to_button.addEventListener("click", function () { return scroll_to_object.scrollIntoView(false); });
