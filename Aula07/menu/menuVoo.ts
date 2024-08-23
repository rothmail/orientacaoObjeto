import {Voo} from './Voos.js';
import { Passageiro } from './Voos.js';
var rl = require('readline-sync')

let vooNovo = new Voo(0,'')
let menu: boolean = true


while(menu){
    console.log(
        `
         1: Cadastrar passageiro;
         2: Verificar próxima cadeira livre;
         3: Verificar cadeira;
         4: Ocupar cadeira;
         5: Verificar Vagas;
         6: Verificar Vôo;
         7: Verificar data de Vôo;
         8: Clonar Vôo;
         9: Sair.
              `
    );
    
}
let option = rl.questionInt(`Escolha:`)

switch(option){
    case 1: 
    vooNovo.cadastrarPassageiro() // função de cadastro
        break
    case 2:
        vooNovo.proximoLivre() // função para ver qual o próximo assento livre
        break
    case 3:
        let cadeira = rl.questionInt('Qual a cadeira que quer verificar? ')
       vooNovo.verifica(cadeira) // função para verificar se a cadeira está livre
        break
    case 4: 
    let cadeiraOcupa = rl.questionInt('Qual a cadeira voce quer ocupar? ')
        vooNovo.ocupa(cadeiraOcupa) // função para ocupar a cadeira
        break
        case 6:
            vooNovo.vaga() // função para ver quantos assentos estão disponíveis
            break
        case 7:
            vooNovo.getVoo() // função para 
            break
        case 8:
            vooNovo.getData() // função para
            break
        case 9:
            vooNovo.clone() // função para clonar
            break
        case 9:
        process.exit(0) // sair
    default:
        console.log(`Opcao invalida`);
        break
}