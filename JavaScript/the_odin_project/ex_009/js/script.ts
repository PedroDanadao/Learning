function camelize(dashedWord: string) {
    const wordsArray = dashedWord.split('-');
    let capitalizedWord = wordsArray.reduce(joinCapitalizedStrings)

    console.log(capitalizedWord)

    return capitalizedWord;
}

function joinCapitalizedStrings(string1: string, string2: string) {
    return string1 + string2.charAt(0).toUpperCase() + string2.slice(1);
}

console.log( camelize("background-color") == 'backgroundColor' );
console.log( camelize("list-style-image") == 'listStyleImage' );
console.log( camelize("-webkit-transition") == 'WebkitTransition' );

// -------------------------------------------------------------

function filterRange(arr: Array<number>, a: number, b: number) {
    /**
     * Filters the passed array for items that are higher or equal to a and 
     * lower or equal to b and return a new array of those items
    */
   return arr.filter((item) => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];

console.log(filterRange(arr, 1, 4))

// -------------------------------------------------------------

function filterRangeInPlace(arr: Array<number>, a: number, b: number) {
    /**
     * Filters the passed array for items that are higher or equal to a and 
     * lower or equal to b and change the passed array with those items
    */
   const filteredArray = filterRange(arr, a, b);
   arr.splice(0, arr.length, ...filteredArray)
}

filterRangeInPlace(arr, 1, 4);

console.log({arr})

// -------------------------------------------------------------

arr = [5, 2, 1, -10, 8];

arr.sort().reverse();

console.log({arr});

// -------------------------------------------------------------

function copySorted(arr: Array<number>) {
    /**
     * returns a copy of the passed array, but sorted. The passed array does not
     * change
    */
   const arrCopy = arr.concat(); // can also be copied with arr.slice()
   return arrCopy.sort();
}

arr = ["HTML", "JavaScript", "CSS"];
const arr_copy = copySorted(arr);

console.table(arr)
console.table(arr_copy);

// -------------------------------------------------------------

function Calculator() {
    this.operatorToFunction = {
        '+': (a: number, b: number) => a + b, 
        '-': (a: number, b: number) => a - b,
    };
    
    this.calculate = (operationString: string) => {
        const splittedOperation = operationString.split(' ');
        
        const a = Number(splittedOperation[0]);
        const operator = splittedOperation[1];
        const b = Number(splittedOperation[2]);
        
        return this.operatorToFunction[operator](a, b);
    }
    
    this.addMethod = (operator: string, func: Function) => {
        this.operatorToFunction[operator] = func;
    }
}

const calc = new Calculator;

console.log( calc.calculate("1 + 6") );

calc.addMethod("*", (a: number, b: number) => a * b);
calc.addMethod("/", (a: number, b: number) => a / b);
calc.addMethod("**", (a: number, b: number) => a ** b);

console.log(calc.calculate("2 * 5"));
console.log(calc.calculate("8 / 4"));
console.log(calc.calculate("5 ** 2"));

// -------------------------------------------------------------

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map((item) => item.name);

console.log({names});

// -------------------------------------------------------------

john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };

users = [ john, pete, mary ];

let usersMapped = users.map((item) => (
    {
        fullName: item.name + ' ' + item.surname, 
        id: item.id
    }
    ))
    
    console.table(usersMapped);

// -------------------------------------------------------------

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };

arr = [ pete, john, mary ];

function sortByAge(arr: Array<{age: number}>) {
    arr.sort((a: {age: number}, b: {age: number}) => a.age - b.age);
}

sortByAge(arr);

console.table(arr);

// -------------------------------------------------------------

function shuffle(arr: Array<number>) {
    const shuffledArray: number[] = [];
    
    for(let i=arr.length; i > 0; i--){
        let arrayIndex = Math.floor(Math.random() * i);
        
        shuffledArray.push( arr[arrayIndex] );
        arr.splice(arrayIndex, 1);
    }
    
    arr.push(...shuffledArray);
}

arr = [1, 2, 3, 4, 5, 6, 7];

shuffle(arr);

console.log({arr});

// -------------------------------------------------------------

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 29 };

arr = [ john, pete, mary ];

function getAverageAge(arr: Array<{name: string, age: number}>) {
    const ageSum = arr.reduce((ageSum, currentItem) => ageSum + currentItem.age, 0)
    
    return ageSum / arr.length;
}

let averageAge = getAverageAge(arr);
console.log({averageAge});

// -------------------------------------------------------------

const strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", 
"Hare", "Hare"];

function unique(arr: Array<string>) {
    const uniqueArray: string[] = [];
    
    arr.forEach((name) => {if(!uniqueArray.includes(name)) uniqueArray.push(name)})
    
    return uniqueArray;
}

console.table(unique(strings));

// -------------------------------------------------------------

users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

function groupById(users: Array<{id: string, name: string, age: number}>) {
    const objectFromArray = users.reduce((finalObject, item) => {finalObject[item.id] = item; return finalObject}, {})

    return objectFromArray;
}
  
let usersById = groupById(users);

console.log(usersById);
