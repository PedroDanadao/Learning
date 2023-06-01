function convert_celsius() {
    // get the paragraphs where the input temperature and the converted results will be displayed
    const celsius_paragraph = window.document.getElementById("bold_celsius");
    const converted_paragraph = window.document.getElementById("converted_temps");

    // get the celsius temperature from the user with a window prompt
    let celsius_temperature = window.prompt("Digite uma temperatura em °C (Celsius)");
    celsius_temperature = celsius_temperature.replace(',', '.');

    // check if the user typed a valid number. If not, then warn the user about it and end the function
    if (!(celsius_temperature && !isNaN(celsius_temperature))) {
        window.alert("Digite um valor válido de temperatura");
        return;
    }

    // convert the typed celsius to a Number
    celsius_temperature = Number(celsius_temperature);

    // change the font of the celsius_paragraph and set it's inner text to print the value that the user typed
    celsius_paragraph.style.fontSize = "30px";
    celsius_paragraph.style.fontWeight = "bold";
    celsius_paragraph.innerText = `A temperatura de ${celsius_temperature}°C, corresponde a...`;

    // make the Fahrenheit and Kelvin conversions of the celsius temperature
    const kelvin_temperature = celsius_temperature + 273;
    const fahrenheit_temperature = (celsius_temperature * 9 / 5) + 32;

    // change the inner text of the converted_paragraph to show the converted temperatures
    converted_paragraph.innerText = `${kelvin_temperature}°K (Kelvin)\n\n`;
    converted_paragraph.innerText += `${fahrenheit_temperature}°F (Fahrenheit)`;
}