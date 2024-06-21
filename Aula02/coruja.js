"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coruja = void 0;
// let carro
// se o valor não for atribuido continuará sendo string
// não resulta em undefinied
var Coruja = /** @class */ (function () {
    function Coruja(nome, peso) {
        this.nome = nome;
        this.peso = peso;
    }
    Coruja.prototype.chirriar = function () {
        console.log("Uuuh uuuhh!");
    };
    Coruja.prototype.comer = function (quantidade) {
        console.log("A coruja ".concat(quantidade, " ratos."));
    };
    Coruja.prototype.voar = function (tempo) {
        console.log("A coruja voa ".concat(tempo, " por dia!"));
    };
    return Coruja;
}());
exports.Coruja = Coruja;
// instanciar a classe = criar objeto
// constructor = construir
