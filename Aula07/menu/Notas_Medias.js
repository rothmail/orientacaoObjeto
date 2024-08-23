"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho) {
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1;
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }
    Aluno.prototype.media = function () {
        var media = (this.notaProva1 + this.notaProva2) / 2;
        console.log(media);
    };
    Aluno.prototype.final = function () {
        var final = (this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3;
        console.log(final);
    };
    return Aluno;
}());
exports.Aluno = Aluno;
/*
1 - Notas e Médias:
 
Criar um menu com SWITCH CASE para fazer o cadastro no CASE 1, a inserção das notas no CASE 2, a média no CASE 3 e a final no CASE 4;
*/ 
