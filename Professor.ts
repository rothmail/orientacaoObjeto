var leitor = require('readline-sync')
class Professor{
    nome: string
    idade: number
    ano_xp: number   
constructor (nome:string,idade:number,ano_xp:number){
      this.nome = nome
      this.idade = idade
      this.ano_xp = ano_xp 
}
getProfessor(): void{
    console.log(`Olá meu nome é ${this.nome}, tenho ${this.idade} anos e sou Professor/a há ${this.ano_xp} anos.`)
}
setProfessor(): void {
    let nomeUp = leitor.question('Qual o nome do Professor? ')
    let idadeUp = leitor.question('Qual a idade do Professor? ')
    let ano_xpUp = leitor.question('Qual o tempo de xp do Professor? ')
    this.nome = nomeUp
    this.idade = idadeUp
    this.ano_xp = ano_xpUp
}
}

class Escola {
    pfrs: Professor
    nome: string
    endereco: string
    num_end: number

    constructor(prfs:Professor,nome: string,endereco: string,num_end: number){
        this.pfrs = prfs
        this.nome = nome
        this.endereco = endereco
        this.num_end = num_end
    }

    setEscola(): void {
        let nomeUp = leitor.question('Qual nome da escola? ')
        let enderecoUp = leitor.question('Qual o endereco da escola? ')
        let num_endUp = leitor.question('Qual o numero do endereco da escola? ')
        this.nome = nomeUp
        this.endereco = enderecoUp
        this.num_end = num_endUp
    }
    getEscola(): void{
        console.log(`Olá a escola se chama ${this.nome}, e temos o/a professor/a que se chama ${this.pfrs.nome}, o endereco é ${this.endereco} e o número da rua é ${this.num_end}.`)
    }
}
 function exibirMenu() {
    console.log('Menu de opções');
    console.log('1. Criar Professor');
    console.log('2. Criar Escola');
    console.log('3. Modificar Professor');
    console.log('4. Modificar Professor');
    console.log('5. Visualizar Professor');
    console.log('6. Visualizar Escola');
    console.log('7. Sair');
}
/* let menu = true
while(menu){
    let questao = leitor.question
}
*/
function main () {
    let encerrar = false;
    while (!encerrar) {
        exibirMenu()       
         let opcao = leitor.question('Digite a opção desejada: ');
        encerrar = escolha(opcao)
    }
}
let professorNovo = new Professor('',0,0)
let escolaNova = new Escola(professorNovo,'','',0)
main();
function escolha (opcao) {
    switch (opcao) {
        case '1':
            professorNovo.setProfessor()
            break;
        case '2':
            escolaNova.setEscola()
            break;
        case '3':
            professorNovo.setProfessor()
            break;
        case '4' :
            professorNovo.setProfessor()
            break;
        case '5' :
            escolaNova.getEscola()
            break;
         case '6' :
            professorNovo.getProfessor()
            break;
        case '7':
            console.log('Encerrando programa...')
            return true;
        default:
            console.log('Opção inválida')
    }
    return false;
}