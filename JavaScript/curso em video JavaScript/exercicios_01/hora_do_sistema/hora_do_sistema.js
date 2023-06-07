function carregar() {
    // pegar os elementos da pagina
    var msg = window.document.getElementById("msg")
    var imagem = window.document.getElementById("imagem")
    var periodo = window.document.getElementById("periodo")
    
    // pegar a hora atual do sistema
    var agora = new Date()
    var hora = agora.getHours()

    // mudar a hora manualmente para testes
    // hora = 1

    // deixa a mensagem no singular ou no plural dependendo da hora(1 || !1)
    if (hora == 1)
        msg.innerHTML = `Agora é ${hora} hora`
    else
        msg.innerHTML = `Agora são ${hora} horas`
    
    // muda o backgound da pagina, a imagem que apareçe e a mensagem no final dependendo da hora
    if (hora >= 5 && hora < 12){
        periodo.innerHTML = "Bom Dia!"
        imagem.src = "manha.png"
        document.body.style.background = "#febe8a"
    }
    
    else if (hora >= 12 && hora <= 19){
        periodo.innerHTML = "Boa Tarde!"
        imagem.src = "tarde.png"
        document.body.style.background = "#d58c3f"
    }
    
    else {
        periodo.innerHTML = "Boa Noite!"
        imagem.src = "noite.png"
        document.body.style.background = "#224075"
    }
}
