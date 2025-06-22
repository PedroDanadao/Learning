var myObject = {
    property: "Value!",
    other_property: 77,
    "obnoxious property": function () {
        // do stuff!
    }
};
// ways to get the values
// dot notation
myObject.property; // "Value!"
//bracket notation
myObject["obnoxious property"]; // function
var variable = "property";
myObject.variable; // will be 'undefined' because myObject doesn't have a "variable" item
myObject[variable]; // wil be "Value!" since it used the value inside 'variable' to get the item.
// It's the same to use myObject["property"]
// example one
var playerOneName = "tim";
var playerTwoName = "jenn";
var playerOneMarker = "X";
var playerTwoMarker = "O";
// example two
var playerOne = {
    name: "tim",
    marker: "X"
};
var playerTwo = {
    name: "jenn",
    marker: "O"
};
function print_name(player) {
    console.log(player.name);
}
print_name(playerOne);
print_name(playerTwo);
// instead of
console.log(playerOneName);
console.log(playerTwoMarker);
function game_over(winning_player) {
    console.log("Congratulations!");
    console.log(winning_player.name + " is the winner!");
}
// Constructor
function Player(name, marker) {
    var _newTarget = this && this instanceof Player ? this.constructor : void 0;
    if (!_newTarget) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.name = name;
    this.marker = marker;
}
var player = new Player("steve", 'X');
console.log(player.name); // 'steve'
function PlayerWithFunction(name, marker) {
    var _newTarget = this && this instanceof PlayerWithFunction ? this.constructor : void 0;
    if (!_newTarget) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.name = name;
    this.marker = marker;
    this.say_name = function () {
        console.log(this.name);
    };
}
var player1 = new PlayerWithFunction("steve", 'X');
var player2 = new PlayerWithFunction("Also Steve", 'O');
player1.say_name(); // logs 'steve'
player2.say_name(); // logs 'Also Steve'
function Book(title, author, pages, read_before) {
    var _newTarget = this && this instanceof Book ? this.constructor : void 0;
    if (!_newTarget) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_before = read_before;
    this.info = function () {
        var read_string = this.read_before ? "already read" : "not read yet";
        var info_string = this.title + " by " + this.author + ", " + this.pages + " pages, " + read_string;
        console.log(info_string);
    };
}
// This is basically adding a function 'say_hello' to every object of type Player
PlayerWithFunction.prototype.say_hello = function () {
    console.log("Hello ${this.name}, I'm a player!");
};
// so this will run the say_hello function, even if it wasn't defined when the objects where created
player1.say_hello();
player2.say_hello();
// Don't do this!
player1.__proto__ === PlayerWithFunction.prototype; // returns true
player2.__proto__ === PlayerWithFunction.prototype; // returns true
// Player.prototype.__proto__
Object.getPrototypeOf(PlayerWithFunction.prototype) === Object.prototype; // true
// Output may slightly differ based on the browser
player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }
// hasOwnProperty checks if a property was declared in an object
player1.hasOwnProperty('valueOf'); // false
Object.prototype.hasOwnProperty('valueOf'); // true
Object.prototype.hasOwnProperty('hasOwnProperty'); // true
function Person(name) {
    this.name = name;
}
Person.prototype.say_name = function () {
    console.log("Hello, I'm " + this.name + "!");
};
function PlayerPerson(name, marker) {
    this.name = name;
    this.marker = marker;
}
PlayerPerson.prototype.get_marker = function () {
    console.log("My marker is '" + this.marker + "'");
};
Object.getPrototypeOf(PlayerPerson.prototype); // returns Object.prototype
// Now make `PlayerPerson` Objects inherit from `Person`
Object.setPrototypeOf(PlayerPerson.prototype, Person.prototype);
Object.getPrototypeOf(PlayerPerson.prototype); // returns Person.prototype
// This here will not work!
// PlayerPerson.prototype = Person.prototype;
var player1_person = new PlayerPerson('steve', 'X');
var player2_person = new PlayerPerson('steve_2', 'O');
// available function since PlayerPerson has the same prototype of Person
player1_person.say_name(); // Hello, I'm steve!
player2_person.say_name(); // Hello, I'm steve_2!
player1_person.get_marker(); //`My marker is 'X'`
player2_person.get_marker(); //`My marker is 'O'`
function Enemy(name) {
    this.name = name;
    this.marker = '^';
}
// Object.setPrototypeOf(Enemy.prototype, Person.prototype);
Enemy.prototype = Person.prototype; // this will generate an unexpected behavior at the end
Enemy.prototype.say_name = function () {
    console.log("HAHAHAHAHAHAHAHAHA!");
};
var carl = new PlayerPerson("Carl", 'X'); // notice that carl is PlayerPerson and not Enemy
carl.say_name(); // this will print "HAHAHAHAHAHAHAHAHA!" since the prototype of Person was edited and say_name(person method) was changed
// this behavior would not happen if Object.setPrototypeOf was used instead of .prototype = .prototype
