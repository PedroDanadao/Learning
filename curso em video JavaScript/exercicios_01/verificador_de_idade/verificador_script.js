function verificar_idade() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var f_ano = document.getElementById("ano_le")
    
    if (f_ano.value.length == 0 || f_ano.value > ano_atual){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
        return
    }
    
    var res = document.querySelector("div#res")
    var radial = document.getElementsByName("radsex")
    var idade = ano_atual - Number(f_ano.value)
    var sexo = radial[0].checked ? "Homem" : "Mulher"
    var img = document.createElement("img")
    img.setAttribute("id", "foto")

    var masculinos = ["menino", "rapaz", "homem", "senhor", "idoso"]
    var femininos = ["menina", "moca", "mulher", "senhora", "idosa"]
    
    res.style.textAlign = "center"
    
    var lista = sexo == "Homem" ? masculinos : femininos

    if (idade < 13)
        posicao = 0
    else if (idade < 21)
        posicao = 1
    else if (idade < 50)
        posicao = 2
    else if (idade < 75)
        posicao = 3
    else
        posicao = 4
    
    var nome_do_arquivo = lista[posicao]

    if (nome_do_arquivo == "moca")
        res.innerHTML = `Detectamos moça com ${idade} anos`
    else
        res.innerHTML = `Detectamos ${nome_do_arquivo} com ${idade} anos`

    img.setAttribute("src", `images/${nome_do_arquivo}.png`)
    res.appendChild(img)
}