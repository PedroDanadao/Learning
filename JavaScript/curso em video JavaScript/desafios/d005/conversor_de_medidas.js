function convert() {
    //declare the variables
    let bold_res_element, conversions_element, measure, measure_km, measure_hm, measure_dam, measure_dm, measure_cm, measure_mm

    bold_res_element = window.document.getElementById("bold_res");
    conversions_element = window.document.getElementById("conversions");

    // get the measure in meters from the user using window.prompt
    measure = window.prompt(`Digite uma distância em metros (m)`);

    // replace any commas for dots in the measure string
    measure = measure.replace(',', '.');

    // check if the user typed a valid number. If not, then warn the user and end the function
    if (!(measure && !isNaN(measure))) {
        window.alert(`Por favor, digite um valor válido`);
        return;
    }

    // convert the measure to a Number and create variables with the measure conversions
    measure = Number(measure);
    measure_km = measure / 1000;
    measure_hm = measure / 100;
    measure_dam = measure / 10;
    measure_dm = measure * 10;
    measure_cm = measure * 100;
    measure_mm = measure * 1000;

    // change the style of the bold_res_element to be bold and have a 30 px font size
    bold_res_element.style.fontSize = "30px";
    bold_res_element.style.fontWeight = "bold";

    // change the inner text of the bold_res_element to start showing the result
    bold_res_element.innerText = `A distância de ${measure} metros, corresponde a...`

    // change the text of the result to show the conversions
    conversions_element.innerText = `${measure_km} quilômetros (Km) \n\n`
    conversions_element.innerText += `${measure_hm} hectômetroe (Hm) \n\n`
    conversions_element.innerText += `${measure_dam} decâmetros (Dam) \n\n`
    conversions_element.innerText += `${measure_dm} decímetros (dm) \n\n`
    conversions_element.innerText += `${measure_cm} centímetros (cm) \n\n`
    conversions_element.innerText += `${measure_mm} milímetros (mm) \n\n`
}