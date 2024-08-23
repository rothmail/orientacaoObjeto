"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Notas_Medias_1 = require("./Notas_Medias");
var alunoNovo = new Notas_Medias_1.Aluno(0, '', 0, 0, 0);
var rl = require('readline-sync');
var menu = true;
var alunoExiste = false;
while (menu) {
    console.log("\n        0 - Finalizar\n        1 - Cadastrar nome e matricula\n        2 - Cadastrar Notas\n        3 - Verificar Media das provas\n        4 - Verificar media final\n        ");
    var option = rl.questionInt("Escolha:");
    switch (option) {
        case 1: // cadastrar aluno e matricula
            var nomeAluno = rl.question("Insira o nome do aluno: ");
            var matriculaAluno = rl.questionInt("Insira a matricula do aluno: ");
            alunoNovo = inserirNotas(nomeAluno, matriculaAluno); // inserir as notas no aluno|matricula dado
            alunoExiste = true; // o aluno existe :)
            break;
        case 2:
            if (alunoExiste) { // se o aluno existe
                alunoNovo = inserirNotas(nomeAluno, matriculaAluno); //inseri as notas
            }
            else { // se não
                throw new Error('Voce nao criou o aluno');
            }
            break;
        case 3:
            if (alunoExiste) { // se o aluno existe 
                alunoNovo.media(); // calcula a media das notas
            }
            else {
                throw new Error('Voce nao criou o aluno');
            }
            ;
            break;
        case 4:
            if (alunoExiste) { // resultado final
                alunoNovo.final();
            }
            else {
                throw new Error('Voce nao criou o aluno');
            }
            ;
            break;
        case 0:
            process.exit(0); // sair
        default:
            console.log("Opcao invalida");
            break;
    }
}
// função para inserir as notas, contendo nome do aluno e matricula
function inserirNotas(nome, matricula) {
    var prova1 = rl.questionInt('Insira a nota da prova 1: ');
    var prova2 = rl.questionInt('Insira a nota da prova 2: ');
    var trabalho = rl.questionInt('Insira a nota do trabalho: ');
    var newAluno = new Notas_Medias_1.Aluno(matricula, nome, prova1, prova2, trabalho); //parte do paulo
    return newAluno;
}
