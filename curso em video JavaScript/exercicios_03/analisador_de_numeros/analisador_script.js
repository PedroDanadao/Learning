var numbers_array = []

function adicionar(){
    // get the relevant elements from the html file
    var number_input = window.document.getElementById("number")
    var numbers_selector = window.document.getElementById("numbers_list")
    var res_div = window.document.getElementById("res")

    // check if the user typed a number in the number_input
    if (number_input.value.length == 0){
        window.alert("digite um número válido")
        return
    }

    // get the number from the text in the number input and check if it is already in 
    // the numbers array or if the number is not between 1 and 100
    var number = Number(number_input.value)
    if (numbers_array.indexOf(number) != -1 || number < 1 || number > 100){
        // if the number is already in the numbers_array or is not between 1 and 100, 
        // then notify the user and end the method
        window.alert(`o número ${number} já faz parte da lista de números ou não está entre 1 e 100`)
        return
    }
    // add the number to the numbers_array
    numbers_array.push(number)

    // create a new element and add it to the numbers list
    var number_option = window.document.createElement("option")
    number_option.text = `Valor ${number} adicionado`
    numbers_selector.appendChild(number_option)
    numbers_selector.value = `tab${numbers_array.length - 1}`

    // erase the number from the number_input and set the focus to be in it again(text 
    // cursor blinking)
    number_input.value = ''
    number_input.focus()

    // erase the result div
    res_div.innerHTML = '<br>'
}

function finalizar(){
    // check if there is no number in the numbers_array
    if (numbers_array.length == 0){
        // if so, then warn the user and end the function
        window.alert("Nenhum número adicionado. Adicione um número para finalizar")
        return
    }

    // get the relevant elements from the html file
    var res_div = window.document.getElementById("res")

    // create the variables that will be displayed in the result
    var total_numbers, highest_value, lowest_value, sum, average

    // sort the numbers array to facilitate in finding the highest and lowest values
    numbers_array.sort((a, b) => a - b)

    // set the values of those variables
    total_numbers = numbers_array.length
    highest_value = numbers_array[total_numbers-1]
    lowest_value = numbers_array[0]

    sum = 0
    for (index in numbers_array)
        sum += numbers_array[index]
    
    average = sum / total_numbers

    // write the result message in the res_div
    res_div.innerHTML = "<br>"
    res_div.innerHTML += `Ao todo temos ${total_numbers} números cadastrados.<br><br>`
    res_div.innerHTML += `O maior valor informado foi ${highest_value}.<br><br>`
    res_div.innerHTML += `O menor valor informado foi ${lowest_value}.<br><br>`
    res_div.innerHTML += `Somando todos os valores temos ${sum}.<br><br>`
    res_div.innerHTML += `A média dos valores digitados é ${average}`
}
