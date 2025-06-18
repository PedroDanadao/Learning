const container = document.querySelector('#container') as HTMLDivElement;

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.classList.toggle("domParagraph");
para.style["color"] = "red";
para.innerText = "Hey I'm red!";
container.appendChild(para);

const h3 = document.createElement("h3");
h3.classList.toggle("domH3");
h3.style["color"] = "blue";
h3.innerText = "I'm a blue h3!";
container.appendChild(h3);

const div = document.createElement("div");
div.classList.toggle("domDiv");
div.style.cssText = "border: 1px solid black; background-color: pink;";
div.innerText = "Test this out";

const h1 = document.createElement("h1");
h1.classList.toggle("domH1");
h1.innerText = "I'm in a div";
div.appendChild(h1);

const para2 = document.createElement('p');
para2.classList.toggle("domParagraph2");
para2.innerText = "ME TOO!";
div.appendChild(para2);

container.appendChild(div);