// ---------  DOM Elements  ---------
var section01 = document.querySelector("#exercise01 section");
var section02 = document.querySelector("#exercise02 section");
var section03 = document.querySelector("#exercise03 section");
// ---------  Event Listeners  ---------
// ---------  Functions  ---------
// ---------  Page Startup Code  ---------
// Exercise 01
var myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
var list = document.createElement('ul');
// Add your code here
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var food = myArray_1[_i];
    list.innerHTML += "<li>" + food + "</li>";
}
// Don't edit the code below here!
section01.appendChild(list);
// Exercise 02
var para = document.createElement('p');
var name_ex = "Tina";
var phonebook = [
    { name: 'Chris', number: '1549' },
    { name: 'Li Kang', number: '9634' },
    { name: 'Anne', number: '9065' },
    { name: 'Francesca', number: '3001' },
    { name: 'Mustafa', number: '6888' },
    { name: 'Tina', number: '4312' },
    { name: 'Bert', number: '7780' },
    { name: 'Jada', number: '2282' },
];
for (var _a = 0, phonebook_1 = phonebook; _a < phonebook_1.length; _a++) {
    var bookObj = phonebook_1[_a];
    if (name_ex === bookObj["name"]) {
        para.innerHTML = bookObj["name"] + ": " + bookObj["number"];
        break;
    }
}
section02.appendChild(para);
// Exercise 03
var i = 500;
var para2 = document.createElement('p');
function isPrime(num) {
    for (var i_1 = 2; i_1 < num; i_1++) {
        if (num % i_1 === 0) {
            return false;
        }
    }
    return true;
}
while (i > 1) {
    if (isPrime(i)) {
        para2.textContent += i + ", ";
    }
    i--;
}
// Remove the last ", " from para2Text
var para2Text = para2.textContent;
para2.textContent = para2Text.slice(0, para2Text.lastIndexOf(", "));
section03.appendChild(para2);
