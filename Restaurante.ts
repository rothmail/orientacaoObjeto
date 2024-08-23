var leitor = require('readline-sync')

class Cozinheiro {
    nome:string
    idade:number
    ano_xp:number

    constructor (nome:string, idade:number, ano_xp:number) {
        this.nome = nome
        this.idade = idade
        this.ano_xp = ano_xp
    }
    setCozinheiro() {
        let nomeUp = leitor.question('Qual o nome do cozinheiro? ')
        let idadeUp = leitor.questionInt('Qual a idade do cozinheiro? ')
        let ano_xpUp = leitor.questionInt('Qual o tempo de xp do cozinheiro')

        this.nome = nomeUp
        this.idade = idadeUp
        this.ano_xp = ano_xpUp
    }

    getCozinheiro(): void{
        console.log(`Hello, my name's ${this.nome}, I'm ${this.idade} years old and I'm a chef for ${this.ano_xp}`)
    }
}

class Restaurante {
    cz:Cozinheiro // associação: Cozinheiro ao Restaurante
    nome:string
    endereco:string
    num_end:number

    constructor (cz:Cozinheiro, nome:string, endereco:string, num_end:number) {
        this.cz = cz
        this.nome = nome
        this.endereco = endereco
        this.num_end = num_end
    }
    setRestaurante() {
        this.cz.setCozinheiro()
        let nomeUp = leitor.question('Qual o nome do restaurante? ')
        let enderecoUp = leitor.question('Qual o endereço do restaurante? ')
        let num_endUp = leitor.questionInt('Qual o do prédio do restaurante? ')

        this.nome = nomeUp
        this.endereco = enderecoUp
        this.num_end = num_endUp
    }

    getRestaurante(): void{
        console.log(`Hello, the Restaurant's name's ${this.nome}, it's address is ${this.endereco} on number ${this.num_end}`)
    }
}
//instância da classe Cozinheiro
let chefDani = new Cozinheiro('Danielle', 35, 15)
//instância da classe Restaurante agregada com o objeto da classe Cozinheiro
let divina = new Restaurante(chefDani, 'Divina', 'Av. Divida', 500)

console.log(divina.cz)

let novoChef = new Cozinheiro('teste', 50, 20)

novoChef.getCozinheiro()
novoChef.setCozinheiro()
novoChef.getCozinheiro()

let novoRestaurante = new Restaurante(chefDani, 'teste', 'teste2', 20)

novoRestaurante.getRestaurante()
novoRestaurante.setRestaurante()
novoRestaurante.getRestaurante()