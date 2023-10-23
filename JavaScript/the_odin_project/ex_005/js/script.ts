// ---------  DOM Elements  ---------
const section01 = document.querySelector("#exercise01 section") as HTMLDivElement;
const section02 = document.querySelector("#exercise02 section") as HTMLDivElement;
const section03 = document.querySelector("#exercise03 section") as HTMLDivElement;

// ---------  Event Listeners  ---------

// ---------  Functions  ---------

// ---------  Page Startup Code  ---------
// Exercise 01
const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

// Add your code here
for (let food of myArray) {
    list.innerHTML += `<li>${food}</li>`;
}

// Don't edit the code below here!
section01.appendChild(list);


// Exercise 02
const para = document.createElement('p');
const name_ex = "Tina";

const phonebook = [
    { name : 'Chris', number : '1549' },
    { name : 'Li Kang', number : '9634' },
    { name : 'Anne', number : '9065' },
    { name : 'Francesca', number : '3001' },
    { name : 'Mustafa', number : '6888' },
    { name : 'Tina', number : '4312' },
    { name : 'Bert', number : '7780' },
    { name : 'Jada', number : '2282' },
]

for (let bookObj of phonebook) {
    if (name_ex === bookObj["name"]) {
        para.innerHTML = `${bookObj["name"]}: ${bookObj["number"]}`;
        break;
    }
}

section02.appendChild(para);


// Exercise 03
let i = 500;
const para2 = document.createElement('p');

function isPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}

while (i > 1) {
    if (isPrime(i)) {
        para2.textContent += `${i}, `;
    }

    i--;
}

// Remove the last ", " from para2Text
let para2Text = para2.textContent as string;
para2.textContent = para2Text.slice(0, para2Text.lastIndexOf(", "));

section03.appendChild(para2);
