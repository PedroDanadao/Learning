const li_items = document.querySelectorAll("li");

const h1_element = document.querySelector("h1") as HTMLHeadingElement;

const image_element = document.querySelector("img") as HTMLImageElement;
const image_link_element = document.querySelector(".image_container>div>a") as HTMLAnchorElement;

const button_element = document.querySelector("button") as HTMLButtonElement;

h1_element.textContent = "Hello World";

if(!localStorage.getItem("name")) 
{
    set_user_name();
}

else 
{
    const storedName = localStorage.getItem("name");
    h1_element.textContent = `Hello there, ${storedName}`;
}

function toggleDone(e: MouseEvent) {
    // a few checks that need to be done because of typescript
    if (e.target === null) return;
    const event_target = e.target as HTMLLIElement;

    if (!event_target.className) 
    {
        event_target.className = "done";
        console.log("altered");
    } 
    else
    {
        event_target.className = '';
    }
}

li_items.forEach((item) => {
    item.addEventListener("click", toggleDone);
});


function toggle_photo(e: MouseEvent) {
    if (e.target === null) return;
    const image_element = e.target as HTMLImageElement;

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
    const myName = prompt("Please enter your name.") as string;

    if (!myName) {
        set_user_name();
    }
    else
    {
        localStorage.setItem("name", myName);
        h1_element.textContent = `Hello there, ${myName}`;
    }
}
button_element.addEventListener("click", set_user_name);
