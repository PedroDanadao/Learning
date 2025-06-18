var li_items = document.querySelectorAll("li");
var h1_element = document.querySelector("h1");
var image_element = document.querySelector("img");
var image_link_element = document.querySelector(".image_container>div>a");
var button_element = document.querySelector("button");
h1_element.textContent = "Hello World";
if (!localStorage.getItem("name")) {
    set_user_name();
}
else {
    var storedName = localStorage.getItem("name");
    h1_element.textContent = "Hello there, " + storedName;
}
function toggleDone(e) {
    // a few checks that need to be done because of typescript
    if (e.target === null)
        return;
    var event_target = e.target;
    if (!event_target.className) {
        event_target.className = "done";
        console.log("altered");
    }
    else {
        event_target.className = '';
    }
}
li_items.forEach(function (item) {
    item.addEventListener("click", toggleDone);
});
function toggle_photo(e) {
    if (e.target === null)
        return;
    var image_element = e.target;
    if (image_element.alt == "Image of the ocean with a turtle") {
        image_element.setAttribute("src", "./images/forrest_image.jpg");
        image_element.setAttribute("alt", "Image of a forrest with a bench");
        image_link_element.textContent = "Ella dk";
        image_link_element.setAttribute("href", "https://www.pexels.com/@elladk/");
    }
    else {
        image_element.src = "./images/ocean_image.jpg";
        image_element.alt = "Image of the ocean with a turtle";
        image_link_element.textContent = "Belle Co";
        image_link_element.href = "https://www.pexels.com/@belle-co-99483/";
    }
}
image_element.addEventListener("click", toggle_photo);
function set_user_name() {
    var myName = prompt("Please enter your name.");
    if (!myName) {
        set_user_name();
    }
    else {
        localStorage.setItem("name", myName);
        h1_element.textContent = "Hello there, " + myName;
    }
}
button_element.addEventListener("click", set_user_name);
