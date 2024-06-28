var leitor = require('readline-sync')

class Produto{
nome: string
precoVendido: number
marca: string
precoComprado: number
lucro: number

constructor (nome: string, precoVendido: number, marca: string, precoComprado: number){
this.nome = nome
this.precoVendido = precoVendido
this.precoComprado = precoComprado
this.marca = marca
}

getProduto (): void{
 console.log(`Informações |Produto|:\n||Nome - ${this.nome}||\n||Preço (comprado) - ${this.precoComprado}||\n||Preço (vendido) - ${this.precoVendido}||\n||lucro - ${this.lucro}||\n||Marca - ${this.marca}||`)
}
 calcularLucro(): number{
 let lucroTotal = this.precoVendido - this.precoComprado
 this.lucro = lucroTotal
 return lucroTotal
 }

setProduto (): void{
    let nomeUp = leitor.question('Produto desejado: ')
    let precoCompradoUp = leitor.question('Preço pelo qual o produto foi comprado ')
    let precoVendidoUp = leitor.question('Preço pelo qual o produto foi vendido: ')
    let marcaUp = leitor.question('Marca do pedido: ')
    this.nome = nomeUp
    this.precoComprado = precoCompradoUp
    this.precoVendido = precoVendidoUp
    this.marca = marcaUp
}
}

class Venda {
    produto: Produto
    quantidade: number
    valorTotal: number
    data: string

    constructor(produto: Produto){
        this.produto = produto

    }

    valorDaCompra ():void {
        let quantidadeUp = leitor.question('Quantidade de produtos desejada: ')
        this.quantidade = quantidadeUp
        this.valorTotal = quantidadeUp * this.produto.precoComprado
    console.log(` _____________________ \nCompra realizada! Parabéns!\n_____________________\nna venda foi comprado: ${quantidadeUp} de produtos.\n _____________________\nO valor total foi: R$ ${this.valorTotal}\n _____________________`)
    }

    getVendas (): void{
        console.log(`Informações | Venda |: ||Produto - ${this.produto.nome}||\n||Marca - ${this.produto.marca}||\n|| Quantidade - ${this.quantidade}||\n||Valor Total - ${this.valorTotal}||\n||Data - ${this.data}||`)
    }

    setVenda (): void{
        this.produto.setProduto()
        let dataUp = leitor.question('Data de realização do pedido? (dd/mm/aaaa) ')
        this.data = dataUp
        
    }
    
    aplicarDescontos(): void{
        let CompraComDesconto = this.valorTotal * 0.2
        console.log(`_____________________ \n Parabenss Voce ganhou um desconto de 20% em suas compras!! \n _____________________\n agora seu valor total reduziu para: ${CompraComDesconto}\n --------------------------`)
    }
    
    
}
let produtoVazio = new Produto('',0,'',0)
let produtoTvUp = new Produto('Tv',100000999,'Samsung',234098)
let produtoCelularUp = new Produto('Celular',10987,'Motorola',8765)
let produtoNotebookUp = new Produto('Notebook',1067987,'Apple',9765)
let vendaTv = new Venda(produtoTvUp)


let vendaUp = new Venda(produtoVazio)

produtoTvUp.getProduto()
produtoTvUp.calcularLucro()
vendaTv.getVendas()
vendaTv.valorDaCompra()
vendaUp.setVenda()
vendaUp.getVendas()
