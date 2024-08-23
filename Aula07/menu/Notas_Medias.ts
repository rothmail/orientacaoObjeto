import { Console } from "console";


export interface Aluno {
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number);
    media(): void;
    final(): void;
}

export class Aluno implements Aluno{
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
    media(): void{
       let media = (this.notaProva1 + this.notaProva2) / 2
       console.log(media)
    }
    final(): void{
        let final = (this.notaProva1 + this.notaProva2 + this.notaTrabalho) /3
        console.log(final);
    }
}

/*
1 - Notas e Médias:
 
Criar um menu com SWITCH CASE para fazer o cadastro no CASE 1, a inserção das notas no CASE 2, a média no CASE 3 e a final no CASE 4;
*/