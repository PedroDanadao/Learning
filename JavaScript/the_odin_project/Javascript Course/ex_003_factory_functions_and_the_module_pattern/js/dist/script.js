var global_age = 23; // This is a global variable
// This is a function
function print_age(age) {
    var var_age = 34; // This is a function scoped variable
    // This is a block
    if (age > 0) {
        // This is a block scoped variable
        var const_age = age * 2;
        console.log(const_age);
    }
    // This throws an error since the variable was not declared in this block or a block above
    // console.log(const_age);
}
print_age(global_age);
// Again, var_age was declared outside of this block
// print_age(var_age);
function make_adding(first_number) {
    // first is scoped within the "make_adding" function
    var first = first_number;
    return function resulting(second_number) {
        // second is scoped within the "resulting" function
        var second = second_number;
        return first + second;
    };
}
// but we've not seen an example of a "function"
// being returned, thus far - how do we use it?
var add_5 = make_adding(5);
console.log(add_5(2)); // logs 7
// Factory Functions
var User = function (name) {
    this.name = name;
    this.discord_name = '@' + name;
};
// hey, this is a constructor - 
// then this can be refactored into a factory!
function create_user(name) {
    var discord_name = '@' + name;
    return { name: name, discord_name: discord_name }; // this is the same as returning {"name": name, "discord_name": discord_name}
}
// and that's very similar, except since it's just a function,
// we don't need a new keyword
// const user = new User("pedro");
var user = create_user("pedro");
// private variables and functions
function create_user_2(name) {
    var discord_name = '@' + name;
    var reputation = 0;
    var get_reputation = function () { return reputation; };
    var give_reputation = function () { return reputation++; };
    return { name: name, discord_name: discord_name, get_reputation: get_reputation, give_reputation: give_reputation };
}
var josh = create_user_2("josh");
josh.give_reputation();
josh.give_reputation();
console.log({
    discord_name: josh.discord_name,
    reputation: josh.get_reputation()
}); // logs { discordName: "@josh", reputation: 2 }
function create_player(name, level) {
    var _a = create_user_2(name), get_reputation = _a.get_reputation, give_reputation = _a.give_reputation; // will only get "inherit" the get_reputation 
    // and give_reputation methods. discord_name will not be inherited, for example.
    var increase_level = function () { return level++; };
    return { name: name, get_reputation: get_reputation, give_reputation: give_reputation, increase_level: increase_level };
}
var player = create_player("ted", 5);
// The module pattern: IIFEs
var calculator = (function () {
    var add = function (a, b) { return a + b; };
    var sub = function (a, b) { return a - b; };
    var mul = function (a, b) { return a * b; };
    var div = function (a, b) { return a / b; };
    return { add: add, sub: sub, mul: mul, div: div };
})();
calculator.add(5, 3);
calculator.sub(6, 2);
calculator.mul(14, 5534);
