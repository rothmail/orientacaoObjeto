var leitor = require('readline-sync')
export class Carro {
    tanque:number
    km:number
    marca:string

    constructor (tanque:number, km:number, marca:string){
        this.tanque = tanque
        this.km = km
        this.marca = marca
    }
    andar():void {
        let distancia = leitor.question('Distância a ser percorrida: ')
        let combustivel = this.tanque - (this.km / distancia)
        if (this.tanque >= combustivel){
            this.tanque = combustivel
            console.log(`Você andou ${distancia}km`)
        } else {
                console.log('Não há combustível!')
        }
    }

    getCarro(): void {
        console.log(`|Marca: ||${this.marca}||\n|Tanque: ||${this.tanque}||\n|Km: ||${this.km}||`)
    }
    obterGasolina(){
        console.log(`Voce atualmente possui ${this.tanque} de Gasolina.`)
    }
    adicionarGasolina(){
        let adicionar = leitor.questionInt('Quantidade de egasolina desejada:')
        this.tanque += adicionar
        console.log(`Nível de gasolina ${this.tanque}L.`)    
    }
    Carro10(): void{
        let tanque = leitor.question('Quantidade consumida pela tanque: ')
        let km = leitor.question(`Quilômetros a serem percorridos: `)
        let marca = leitor.question(`Marca do carro: `)
        this.tanque = tanque
        this.km = km
        this.marca = marca
    }
}

class Garagem {
carros: Carro[] = []

    addCarro(carro: Carro):void {
        if(this.carros.length > 9){
            console.log('A garagem está cheia!')
        } else {
            this.carros.push(carro)
        }
    }
    remover():void {
        let nomeremovido = leitor.question('Carro a ser removido: ')
        this.carros = this.carros.filter(carro => carro.marca !== nomeremovido)
    }
}