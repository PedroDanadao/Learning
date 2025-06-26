let global_age = 23; // This is a global variable

// This is a function
function print_age(age: number) {
    var var_age = 34 // This is a function scoped variable

    // This is a block
    if (age > 0) {
        // This is a block scoped variable
        const const_age = age * 2;
        console.log(const_age);
    }

    // This throws an error since the variable was not declared in this block or a block above
    // console.log(const_age);
}

print_age(global_age);

// Again, var_age was declared outside of this block
// print_age(var_age);

function make_adding(first_number: number) {
    // first is scoped within the "make_adding" function
    const first = first_number;

    return function resulting(second_number: number) {
        // second is scoped within the "resulting" function
        const second = second_number;

        return first + second;
    }
}

// but we've not seen an example of a "function"
// being returned, thus far - how do we use it?
const add_5 = make_adding(5);
console.log(add_5(2)); // logs 7


// Factory Functions


const User = function(name: string) {
    this.name = name;
    this.discord_name = '@' + name;
}
// hey, this is a constructor - 
// then this can be refactored into a factory!

function create_user(name: string) {
    const discord_name = '@' + name;

    return {name, discord_name}; // this is the same as returning {"name": name, "discord_name": discord_name}
}
// and that's very similar, except since it's just a function,
// we don't need a new keyword

// const user = new User("pedro");
const user = create_user("pedro")

// private variables and functions
function create_user_2(name: string) {
    const discord_name = '@' + name;

    let reputation = 0;
    const get_reputation = () => reputation;
    const give_reputation = () => reputation++;

    return {name, discord_name, get_reputation, give_reputation};
}

const josh = create_user_2("josh");

josh.give_reputation();
josh.give_reputation();

console.log(
    {
        discord_name: josh.discord_name,
        reputation: josh.get_reputation()
    }
); // logs { discordName: "@josh", reputation: 2 }


function create_player(name: string, level: number) {
    const {get_reputation, give_reputation} = create_user_2(name); // will only get "inherit" the get_reputation 
    // and give_reputation methods. discord_name will not be inherited, for example.
    
    const increase_level = () => level++;

    return {name, get_reputation, give_reputation, increase_level};
}

const player = create_player("ted", 5);


// The module pattern: IIFEs
const calculator = (function() {
        const add = (a: number, b: number) => a + b;
        const sub = (a: number, b: number) => a - b;
        const mul = (a: number, b: number) => a * b;
        const div = (a: number, b: number) => a / b;

        return {add, sub, mul, div};
    }
)();

calculator.add(5, 3);
calculator.sub(6, 2);
calculator.mul(14, 5534);