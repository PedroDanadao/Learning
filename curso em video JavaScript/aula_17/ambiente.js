let amigo = {
    nome: "José",
    sexo: "M",
    peso: 85.4,
    engordar(p){
        console.log(`Engordou ${this.peso} kilos`)
        this.peso += p
    }
}

amigo.engordar(3)
console.log(amigo)
