var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function camelize(dashedWord) {
    var wordsArray = dashedWord.split('-');
    var capitalizedWord = wordsArray.reduce(joinCapitalizedStrings);
    console.log(capitalizedWord);
    return capitalizedWord;
}
function joinCapitalizedStrings(string1, string2) {
    return string1 + string2.charAt(0).toUpperCase() + string2.slice(1);
}
console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');
// -------------------------------------------------------------
function filterRange(arr, a, b) {
    /**
     * Filters the passed array for items that are higher or equal to a and
     * lower or equal to b and return a new array of those items
    */
    return arr.filter(function (item) { return item >= a && item <= b; });
}
var arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 4));
// -------------------------------------------------------------
function filterRangeInPlace(arr, a, b) {
    /**
     * Filters the passed array for items that are higher or equal to a and
     * lower or equal to b and change the passed array with those items
    */
    var filteredArray = filterRange(arr, a, b);
    arr.splice.apply(arr, __spreadArrays([0, arr.length], filteredArray));
}
filterRangeInPlace(arr, 1, 4);
console.log({ arr: arr });
// -------------------------------------------------------------
arr = [5, 2, 1, -10, 8];
arr.sort().reverse();
console.log({ arr: arr });
// -------------------------------------------------------------
function copySorted(arr) {
    /**
     * returns a copy of the passed array, but sorted. The passed array does not
     * change
    */
    var arrCopy = arr.concat(); // can also be copied with arr.slice()
    return arrCopy.sort();
}
arr = ["HTML", "JavaScript", "CSS"];
var arr_copy = copySorted(arr);
console.table(arr);
console.table(arr_copy);
// -------------------------------------------------------------
function Calculator() {
    var _this = this;
    this.operatorToFunction = {
        '+': function (a, b) { return a + b; },
        '-': function (a, b) { return a - b; }
    };
    this.calculate = function (operationString) {
        var splittedOperation = operationString.split(' ');
        var a = Number(splittedOperation[0]);
        var operator = splittedOperation[1];
        var b = Number(splittedOperation[2]);
        return _this.operatorToFunction[operator](a, b);
    };
    this.addMethod = function (operator, func) {
        _this.operatorToFunction[operator] = func;
    };
}
var calc = new Calculator;
console.log(calc.calculate("1 + 6"));
calc.addMethod("*", function (a, b) { return a * b; });
calc.addMethod("/", function (a, b) { return a / b; });
calc.addMethod("**", function (a, b) { return Math.pow(a, b); });
console.log(calc.calculate("2 * 5"));
console.log(calc.calculate("8 / 4"));
console.log(calc.calculate("5 ** 2"));
// -------------------------------------------------------------
var john = { name: "John", age: 25 };
var pete = { name: "Pete", age: 30 };
var mary = { name: "Mary", age: 28 };
var users = [john, pete, mary];
var names = users.map(function (item) { return item.name; });
console.log({ names: names });
// -------------------------------------------------------------
john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };
users = [john, pete, mary];
var usersMapped = users.map(function (item) { return ({
    fullName: item.name + ' ' + item.surname,
    id: item.id
}); });
console.table(usersMapped);
// -------------------------------------------------------------
john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };
arr = [pete, john, mary];
function sortByAge(arr) {
    arr.sort(function (a, b) { return a.age - b.age; });
}
sortByAge(arr);
console.table(arr);
// -------------------------------------------------------------
function shuffle(arr) {
    var shuffledArray = [];
    for (var i = arr.length; i > 0; i--) {
        var arrayIndex = Math.floor(Math.random() * i);
        shuffledArray.push(arr[arrayIndex]);
        arr.splice(arrayIndex, 1);
    }
    arr.push.apply(arr, shuffledArray);
}
arr = [1, 2, 3, 4, 5, 6, 7];
shuffle(arr);
console.log({ arr: arr });
// -------------------------------------------------------------
john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 29 };
arr = [john, pete, mary];
function getAverageAge(arr) {
    var ageSum = arr.reduce(function (ageSum, currentItem) { return ageSum + currentItem.age; }, 0);
    return ageSum / arr.length;
}
var averageAge = getAverageAge(arr);
console.log({ averageAge: averageAge });
// -------------------------------------------------------------
var strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna",
    "Hare", "Hare"];
function unique(arr) {
    var uniqueArray = [];
    arr.forEach(function (name) { if (!uniqueArray.includes(name))
        uniqueArray.push(name); });
    return uniqueArray;
}
console.table(unique(strings));
// -------------------------------------------------------------
users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];
function groupById(users) {
    var objectFromArray = users.reduce(function (finalObject, item) { finalObject[item.id] = item; return finalObject; }, {});
    return objectFromArray;
}
var usersById = groupById(users);
console.log(usersById);
