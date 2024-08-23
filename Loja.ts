var leitor = require('readline-sync')

class Produto {
    nome:string
    precoComprado:number
    precoVendido:number
    marca:string
    lucro:number

    constructor (nome:string, precoComprado:number, precoVendido:number, marca:string, lucro:number) {
        this.nome = nome
        this.precoComprado = precoComprado
        this.precoVendido = precoVendido
        this.marca = marca
        this.lucro = lucro
    }

    getProduto (): void{
        console.log(`Informações de produto:\nNome: ${this.nome}\nPreço: ${this.precoVendido}\nMarca: ${this.marca}`)
    }
    
    calcularLucro(): number{
        let lucroTotal = this.precoVendido - this.precoComprado
        this.lucro = lucroTotal
        return lucroTotal
    }

    setProduto (): void{
        let nomeUp = leitor.question('Qual o nome do Produto? ')
        let precoCompradoUp = leitor.question('Qual foi o preco comprado do     produto? ')
        let precoVendidoUp = leitor.question('Qual o preco vendido do produto?  ')
        let lucroUp = leitor.question('Qual é o lucro do produto? ')
        let marcaUp = leitor.question('Qual a marca do pedido? ')
        this.nome = nomeUp
        this.precoComprado = precoCompradoUp
        this.precoVendido = precoVendidoUp
        this.lucro = lucroUp
        this.marca = marcaUp
    }
}

class Venda {
    produto:Produto
    quantidade:number
    valorTotal:number
    data:string

    constructor(produto:Produto, quantidade:number, valorTotal:number, data:string) {
        this.produto = produto
        this.quantidade = quantidade
        this.valorTotal = valorTotal
        this.data = data
    }

    valorCompra(): number{
        this.valorTotal = this.produto.precoComprado
    }
}