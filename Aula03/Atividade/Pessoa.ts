class Pessoa{
    nome: string
    idade: number
    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }
    comprimentar(): void{
        console.log(`Saudações ${this.nome}!!`)
    }
}
let minhaPessoa:Pessoa = new Pessoa("Jorge", 19)
minhaPessoa.comprimentar()

class Amanda extends Pessoa {
    comprimentar(): void {
        console.log(`Olá ${this.nome}, como você está?`)
    }
}
let eu:Amanda = new Amanda(`Amanda`, 19)

eu.comprimentar()

class Crianca extends Pessoa {
    comprimentar(): void {
        console.log(`Olá. Seu nome é ${this.nome} e você tem ${this.idade} anos! Você é uma criança`)
    }
}
class Adulto extends Pessoa {
    comprimentar(): void {
         console.log(`Olá, você se chama ${this.nome} e tem ${this.idade} anos! Você é um adulto`)
    }
}
class Idoso extends Pessoa {
    comprimentar(): void {
        console.log(`Olá, você se chama ${this.nome} e tem ${this.idade} anos! Você é um idoso`)
    }
}

let kid = new Crianca("Enzo", 7)
let adult = new Adulto("Lucas", 37)
let oldman = new Idoso("Paulo", 78)

kid.comprimentar()
adult.comprimentar()
oldman.comprimentar()