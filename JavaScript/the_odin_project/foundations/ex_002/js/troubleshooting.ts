/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not, 
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

const troubleshooting_button= document.querySelector(".troubleshooting_button");
const result_div = document.querySelector(".troubleshooting_result");

troubleshooting_button?.addEventListener("click", change_result_div);

function troubleshooting() {
	const a = 1;
	const b = 1;

	let result;

	// Edit between these lines
	// =================================
	result = a + b;

	// =================================

	return result;
}

function change_result_div() {
    const result = troubleshooting();

    if (!result_div)
        return;

    if(result === 2) {
        result_div.innerHTML = "Congrats! You got the correct answer";
    } else if(typeof result === 'number') {
        result_div.innerHTML = `You returned the number ${result}, the result should be the number 2`;
    } else {
        result_div.innerHTML = `You returned string "${result}", the result should be the number 2`;
    }
}
