// ---------  DOM Elements  ---------
const repeat_button = document.querySelector(".repeat_button") as HTMLButtonElement;

const output_button = document.querySelector(".output_button") as HTMLButtonElement;
const output_paragraph = document.querySelector(".output_paragraph") as HTMLParagraphElement;

// ---------  Event Listeners  ---------
repeat_button.addEventListener("click", repeat_to_100);
output_button.addEventListener("click", show_prime_numbers);

// ---------  Functions  ---------
function repeat_to_100() {
    let input_number = 1;

    while (input_number <= 100) {
        let entered_text = prompt("Please enter a number greater than 100")

        if (!entered_text){
            break;
        }

        input_number = Number(entered_text);
    }
}


function show_prime_numbers() {
    const up_to_number = prompt("Choose a number to get the prime numbers up to it");

    if (! up_to_number) {
        return;
    }

    let prime_numbers_string = '';

    for (let i=2; i <= Number(up_to_number); i++) {
        if (check_if_is_prime(i)) {
            prime_numbers_string += `${i}, `;
        }
    }

    prime_numbers_string = prime_numbers_string.slice(0, prime_numbers_string.lastIndexOf(", "));
    output_paragraph.innerText = prime_numbers_string;
}

function check_if_is_prime(num: number) {
    for (let i=2; i < num; i++) {
        if (num % i === 0) return false
    }

    return true;
}

// ---------  Page Startup Code  ---------
