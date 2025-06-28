console.log("It Works!");

const first = "wes";
const second = "bos";
var age = 100;

function say_hi() {
    console.log("HI!"); // ok
}

const age_2 = 100;

function go() {
    const hair = "blonde";
    
    const age = 200;
    
    console.log(hair);
    console.log(age);
    
}

console.log(age_2);

go();
// console.log(hair);


let cool;
if (1 === 1) {
  let cool = true;
}
console.log(cool);


function is_cool(name: string) {
    let cool;

    if(name === "wes") {
        cool = true;
    }

    console.log(cool);
    return cool;
}


 for (var i = 0; i < 10; i++) {
   console.log(i);
}


const dog = 'snickers';

function logDog() {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog();
}

go();
