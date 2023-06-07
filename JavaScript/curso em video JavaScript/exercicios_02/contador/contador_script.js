function contar() {
    var inicio_le = window.document.getElementById("inicio_le")
    var fim_le = window.document.getElementById("fim_le")
    var passo_le = window.document.getElementById("passo_le")
    var res = window.document.getElementById("res")
    
    if (inicio_le.value.length == 0 || fim_le.value.length == 0){
        window.alert("Determine um início e um fim para o contador!")
        return
    }

    var inicio = Number(inicio_le.value)
    var fim = Number(fim_le.value)
    var passo = passo_le.value.length == 0 || passo_le.value == 0 ? 1 : Number(passo_le.value)

    passo = Math.abs(passo)

    res.innerHTML = "Contando:</br>"
    
    if (fim > inicio) {
        for(i=inicio; i <= fim; i+=passo){
            res.innerHTML += ` ${i} \u{1F449}`
        }

    }
    else {
        for(i=inicio; i >= fim; i-=passo){
            res.innerHTML += ` ${i} \u{1F449}`
        }

    }

    res.innerHTML += " \u{1F3C1}"
}