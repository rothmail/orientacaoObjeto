const rl = require('readline-sync')

export interface Aluno {
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number);
    media(): number;
    final(): number;
}

export class Aluno implements Aluno {
    matricula: number
    nome: string
    notaProva1: number 
    notaProva2: number 
    notaTrabalho: number

    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number){
        this.matricula = matricula
        this.nome = nome
        this.notaProva1 = notaProva1
        this.notaProva2 = notaProva2
        this.notaTrabalho = notaTrabalho
    }

    function exibirMenu() {
        console.log('||___MENU DE OPÇÕES___||')
        console.log('|| 1. Fazer cadastro  ||')
        console.log('|| 2. Cadastrar notas ||')
        console.log('|| 3. Média           ||')
        console.log('|| 4. Nota final      ||')
        console.log('|| 0. Encerrar        ||')
        console.log('||____________________||')
    }
    let option = rl.question('Escolha:')

    switch (option) {
        case 1:
            let nome = rl.question('Nome do aluno:')
            let matricula = rl.questionInt('Nº de matricula:')
            let alunoNovo = inserirNotas(nome, matricula)
            break
        case 2:
            if (alunoExiste) {
                alunoNovo = inserirNotas()
            }
            alunoNovo = inserirNotas()
    }

    function inserirNotas() {
        let notaProva1 = rl.questionInt('Nota da prova 1:')
        let notaProva2 = rl.questionInt('Nota da prova 2:')
        let notaTrabalho = rl.questionInt('Nota do trabalho:')

        let alunoNovo = new Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho)
        return alunoNovo
    }

    media():number {
        let media = this.notaProva1 + this.notaProva2 / 2
        console.log(`Média de provas: ${this.media}`)
        return media
    }
 
    final(): number {
        let final = this.notaProva1 + this.notaTrabalho + this.notaProva2 / 3
        console.log(`Nota final: ${this.final}`)
        return final
    }
}

let alunodois = new Aluno(10,'jesus', 9, 10, 8)

alunodois.media()