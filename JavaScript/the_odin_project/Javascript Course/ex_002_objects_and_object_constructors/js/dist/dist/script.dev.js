"use strict";

var myObject = {
  property: "Value!",
  other_property: 77,
  "obnoxious property": function obnoxiousProperty() {// do stuff!
  }
}; // ways to get the values
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
var playerTwoMarker = "O"; // example two

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
print_name(playerTwo); // instead of

console.log(playerOneName);
console.log(playerTwoMarker);

function game_over(winning_player) {
  console.log("Congratulations!");
  console.log(winning_player.name + " is the winner!");
} // Constructor


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
} // This is basically adding a function 'say_hello' to every object of type PlayerWithFunction


PlayerWithFunction.prototype.say_hello = function () {
  console.log("Hello ".concat(this.name, ", I'm a player!"));
}; // so this will run the say_hello function, even if it wasn't defined when the objects where created


player1.say_hello();
player2.say_hello(); // Don't do this!

player1.__proto__ === Player.prototype; // returns true

player2.__proto__ === Player.prototype; // returns true
// Player.prototype.__proto__

Object.getPrototypeOf(Player.prototype) === Object.prototype; // true
// Since Player 
// Output may slightly differ based on the browser

player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }