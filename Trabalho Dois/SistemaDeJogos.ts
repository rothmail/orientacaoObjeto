const leitor = require('readline-sync');

class Jogo {
    titulo: string
    genero: string
    classificacaoEtaria: number

    constructor (titulo:string, genero:string, classificacaoEtaria:number) {
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
    }
    getDetalhes(): any {
        console.log(`|| Informações: ||\n|| Título: ${this.titulo} ||\n|| Gênero: ${this.genero} ||\n|| Classificação Etária: ${this.classificacaoEtaria} ||`)
    }
    setProduto (): void{
        let tituloUp = leitor.question('|| Título do jogo: ||')
        let generoUp = leitor.question('|| Gênero do jogo: ||')
        let classificacaoEtariaUp = leitor.question('|| Classificação etário do jogo: ||')
        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacaoEtaria = classificacaoEtariaUp
    }
    
}
class JogoEletronico extends Jogo {
    plataforma: string
    constructor(titulo:string, genero:string, classificacaoEtaria:number) {
        super(plataforma:string)
    }
}