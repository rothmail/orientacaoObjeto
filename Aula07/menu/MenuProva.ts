/*Para essa, você terá de criar uma nova classe de “Aluno” que contenha nome, idade e nome de matrícula. Após isso, crie um módulo que crie conexão do Aluno com a Prova.

Crie esse menu:

CASE 1: Construir o Gabarito;
CASE 2: Receber as respostas;
CASE 3: Contabilizar acertos;
CASE 4: Verificar nota;
CASE 5: Comparar notas.
*/
/*
class Aluno {
    nome: string
    idade: number
    matricula: number
    prova: Prova

    constructor(nome: string, idade: number, matricula: number) {
        this.nome = nome
        this.idade = idade
        this.matricula = matricula
    }

}

import { Prova } from "./Prova";

var rl = require('readline-sync')

let menu: boolean = true

let BancoProva: Array<Prova> = []

let num = 0

while (menu) {
    console.log(
        `
        0 - Finalizar
        1 - Construir o Gabarito
        2 - Receber as respostas
        3 - Contabilizar acertos
        4 - Verificar nota
        5 - Comparar notas.
        `
    );
    
    
    let verifica = false

    let option = rl.questionInt(`Escolha:`)

    switch (option) {
        case 1:
            let prova = new Prova([]) // sempre que cria um gabarito cria uma nova prova :)
        
            let gabarito = criarGabarito() // variavel q cria o gabarito
            prova.gabarito = gabarito // for de 15 perguntas
            verifica = true

            BancoProva.push(prova)
            break
        case 2:
            console.log(BancoProva);
            
        
            let escolha = rl.questionInt('Qual prova voce quer responder? ')
        
            if(verifica){
            for(let i = 1;i < 15; i++){ // aq esta o for de 15 perguntas
                let resposta = rl.question(`Fale a resposta da pergunta ${i}: `)
                
                BancoProva[escolha].respostaAluno(resposta) //inserindo as respostas da prova
                }
            }else{
            console.log('Voce nao criou o gabarito ainda.'); 
        }
            
            break
        case 3:
            console.log(BancoProva);
            let escolha1 = rl.questionInt('Qual prova voce quer verificar? ') // respostas certas qntd
            console.log(BancoProva[escolha1].questoes);
            
            break
        case 4:
            console.log(BancoProva);
            let escolha2 = rl.questionInt('Qual prova voce quer verificar? ') // nota da prova
            console.log(BancoProva[escolha2].acertos1);
            
            break
        case 5:
            let escolha3 = rl.questionInt('Qual prova voce quer comparar? ')
            let escolha4 = rl.questionInt('Qual a outra prova que voce quer comparar? ')
            BancoProva[escolha3].maior(BancoProva[escolha4]) // maior nota
            break
        case 0:
            process.exit(0) // sair
        default:
            console.log(`Opcao invalida`);
            break
    }
}

// função para criar o gabarito
function criarGabarito(): Array<string> {
    let gabarito: Array<string> = []
    for (let i = 0; i < 15; i++) {
        let pergunta = rl.question(`Insira as resposta da pergunta ${i}: `)
        gabarito.push(pergunta)
    }

    return gabarito
}
*/
class Aluno {
    nome: string
    idade: number
    matricula: number
    prova: Prova

    constructor(nome: string, idade: number, matricula: number) {
        this.nome = nome
        this.idade = idade
        this.matricula = matricula
    }
     
}

import { Prova } from "../Prova"

var rl = require('readline-sync')

let menu: boolean = true

let BancoProva: Array<Prova> = []

let num = 0
let verifica: boolean = false
while (menu) {
    console.log(
        `
        0 - Finalizar
        1 - Construir o Gabarito
        2 - Receber as respostas
        3 - Contabilizar acertos
        4 - Verificar nota
        5 - Comparar notas.`
    );
    
    
    

    let option = rl.questionInt('Escolha:')

    switch (option) {
        case 1:
            let prova = new Prova([]) // sempre que cria um gabarito cria
        
            let gabarito = criarGabarito() // variavel q cria o gabarito
            prova.gabarito = gabarito
            verifica = true

            BancoProva.push(prova)
            break
        case 2:
            let escolha = rl.questionInt('Qual prova voce quer responder? ')
        
            if (verifica) {
                for(let i = 1;i <= 15; i++){ //for de 15 perguntas para o   gabarito
                    let resposta = rl.question(`Fale a resposta da pergunta ${i}: `)

                    BancoProva[escolha - 1].respostaAluno(resposta) //inserindoas respostas da prova
                    } 
            } else {
                console.log('Voce nao criou o gabarito ainda.'); 
            }
            break
        case 3:
            console.log(BancoProva);
            let escolha1 = rl.questionInt('Qual prova voce quer verificar? ') //qntd de respostas certas
            console.log(BancoProva[escolha1 - 1].questoes);
            break
        case 4:
            console.log(BancoProva);
            
            let escolha2 = rl.questionInt('Qual prova voce quer verificar? ') // nota da prova
            console.log(BancoProva[escolha2 - 1].acertos1);
            
            break
        case 5:
            let escolha3 = rl.questionInt('Qual prova voce quer comparar? ')
            let escolha4 = rl.questionInt('Qual a outra prova que voce quer comparar? ')
        
            BancoProva[escolha3 - 1].maior(BancoProva[escolha4 - 1]) // maior nota
            break
        case 0:
            process.exit(0) // sair
        default:
            console.log('Opcao invalida');
            break
    }
}

// função para criar o gabarito
function criarGabarito(): Array<string> {
    let gabarito: Array<string> = []
    for (let i = 0; i < 15; i++) {
        let pergunta = rl.question(`Insira as resposta da pergunta ${i}: `)
        gabarito.push(pergunta)
    }

    return gabarito
}