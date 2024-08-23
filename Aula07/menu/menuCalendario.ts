import { Data } from "../Data";
/*Calendário:

Criar um SWITCH CASE com essas informações:

CASE 1: Criar a data;
CASE 2: Comparar datas;
CASE 3: Print do Dia / Mês / Ano;
CASE 4: Verificar se é bissexto;
CASE 5: Clonar Data.

*/



var rl = require('readline-sync')

let menu: boolean = true
let bancoDatas: Array<Data> = []

while(menu){
    console.log(
        `
        0 - Finalizar
        1 - Criar a data
        2 - Comparar datas
        3 - Print do Dia / Mês / Ano
        4 - Verificar se é bissexto
        5 - Clonar Data
        `
    );
    
}
let option = rl.questionInt(`Escolha:`)

switch(option) {
    case 1: 
        criarData() // chama a função para criar a data
        break
    case 2:
        for (let i = 0; i < bancoDatas.length; i++) { // for para mostrar as datas dentro da variavel bancoDatas
            console.log(bancoDatas[i])
        }
    
        let i = rl.questionInt('qual a primeira data : ')
        let n = rl.questionInt('qual a segunda data : ')

        bancoDatas[i - 1].compara(bancoDatas[n - 1]) // compara as datas pra ver se são iguais
        break
    case 3:
        for(let i = 0; i < bancoDatas.length; i++) {
            console.log(bancoDatas[i]) // mostra as datas
        }
        let num = rl.questionInt('qual a data para verificar: ')
        // verifica a data desejada ( só pra ver a data e se existe)
        bancoDatas[num - 1].getDia() // dia
        bancoDatas[num - 1].getMes() // mês
        bancoDatas[num - 1].getAno() // ano

        break
    case 4: 
        for(let i = 0; i < bancoDatas.length; i++) {
        console.log(bancoDatas[i]) // mostra as datas
        }
        let num1 = rl.questionInt('qual a data para verificar: ')
        bancoDatas[num1 -1].isBissexto() // se é ano bissexto

        break
    case 5:
        for(let i = 0; i < bancoDatas.length; i++){
            console.log(bancoDatas[i]) // mostra as datas
        }
        let num2 = rl.questionInt('qual a data para verificar: ')
        let dataClone = bancoDatas[num2].clone() // clona a data desejada

        bancoDatas.push(dataClone) // puxa a data para a variavel bancoDatas

        break
    case 0:
        process.exit(0) // sair
    default:
        console.log(`Opcao invalida`);
        break
}
// função para criar as datas
function criarData(): Data{
    let newDia = rl.questionInt('Fale o dia: ')
    let newMes = rl.questionInt('Fale o mes: ')
    let newAno = rl.questionInt('Fale o ano: ')

    let newData = new Data(newDia,newMes,newAno)

    bancoDatas.push(newData)

    return newData
}