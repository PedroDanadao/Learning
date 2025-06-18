addEventListener("DOMContentLoaded", (event) => console.log("The DOM is fully loaded."));
addEventListener("load", (event) => console.log("The Page is fully loaded."));
addEventListener("beforeunload", (event) => {event.preventDefault(); event.returnValue = 'Here we go';
});
addEventListener("unload", (event) => console.log("unloaded"));


window.addEventListener('load', checkJSLoaded)

let scrolling = false;

// window.scroll = () => {
//     scrolling = true;
// };

function runScroll(){
    setInterval(() => {
        if (scrolling) {
            scrolling = false;
            // place the scroll handling logic here
            console.log("scrolled");
        }
    },300);

    scrolling = true;
}

window.addEventListener("scroll", runScroll);

function checkJSLoaded() {
    // create the script element
    let script = document.createElement('script');
    
    // assign an onload event handler
    script.addEventListener('load', (event) => {
        console.log('app.js file has been loaded');
    });

    // load the script file
    script.src = '../js/app.js';
    document.body.appendChild(script);
}

const mouse_move_div = document.querySelector(".mouse_move_div") as HTMLDivElement;
mouse_move_div.addEventListener("mousemove", change_to_blue);
mouse_move_div.addEventListener("mouseleave", () => mouse_move_div.style["backgroundColor"] = "aqua");

function change_to_blue(event) {
    mouse_move_div.style["backgroundColor"] = "blue";
}

const scroll_to_button = document.querySelector(".scroll_to_button") as HTMLButtonElement;
const scroll_to_object = document.querySelector(".scroll_to_object") as HTMLDivElement;

scroll_to_button.addEventListener("click", () => scroll_to_object.scrollIntoView(false));
