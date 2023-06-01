function calcular(){
    var valor_le = window.document.getElementById("valor_le")
    var tabela_selector = window.document.getElementById("sel_tab")
    // var tabela_ta = window.document.getElementById("tabela_ta")

    tabela_selector.innerHTML = ''
    // tabela_ta.value = ''

    if (valor_le.value.length == 0){
        window.alert("digite um valor válido")
        return
    }

    var valor = Number(valor_le.value)

    for (i=1; i <= 10; i++){
        var item = document.createElement("option")
        item.text = `${valor} x ${i} = ${valor * i}`
        tabela_selector.appendChild(item)
        tabela_selector.value = `tab${i}`
        // tabela_ta.value += `${valor} x ${i} = ${valor * i}\n`
    }
}