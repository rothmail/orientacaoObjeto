import { Aluno } from "./Notas_Medias";

let alunoNovo = new Aluno(0,'',0,0,0)
var rl = require('readline-sync')

let menu: boolean = true
let alunoExiste = false

while(menu) {
    console.log(
        `
        0 - Finalizar
        1 - Cadastrar nome e matricula
        2 - Cadastrar Notas
        3 - Verificar Media das provas
        4 - Verificar media final
        `
    );


let option = rl.questionInt(`Escolha:`)

switch(option){
    case 1: // cadastrar aluno e matricula
    let nomeAluno = rl.question(`Insira o nome do aluno: `)
    let matriculaAluno = rl.questionInt(`Insira a matricula do aluno: `)
    alunoNovo = inserirNotas(nomeAluno, matriculaAluno) // inserir as notas no aluno|matricula dado
    alunoExiste = true // o aluno existe :)
        break
    case 2:
        if(alunoExiste){ // se o aluno existe
            alunoNovo = inserirNotas(nomeAluno, matriculaAluno) //inseri as notas
        } else { // se não
            throw new Error('Voce nao criou o aluno')
        }
        break
    case 3:
        if (alunoExiste) { // se o aluno existe 
            alunoNovo.media() // calcula a media das notas
        } else {
            throw new Error('Voce nao criou o aluno')
        };
        break
    case 4: 
        if (alunoExiste) { // resultado final
            alunoNovo.final()
        } else {
            throw new Error('Voce nao criou o aluno')
    };
        break
    case 0:
        process.exit(0) // sair
    default:
        console.log(`Opcao invalida`);
        break
}
}
// função para inserir as notas, contendo nome do aluno e matricula
function inserirNotas(nome: string, matricula: number): Aluno {
    let prova1 = rl.questionInt('Insira a nota da prova 1: ')
    let prova2 = rl.questionInt('Insira a nota da prova 2: ')
    let trabalho = rl.questionInt('Insira a nota do trabalho: ')
    let newAluno = new Aluno(matricula, nome, prova1, prova2, trabalho) //parte do paulo

    return newAluno
}

