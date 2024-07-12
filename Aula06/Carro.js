"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var leitor = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(tanque, km, marca) {
        this.tanque = tanque;
        this.km = km;
        this.marca = marca;
    }
    Carro.prototype.andar = function () {
        var distancia = leitor.question('Distância a ser percorrida: ');
        var combustivel = this.tanque - (this.km / distancia);
        if (this.tanque >= combustivel) {
            this.tanque = combustivel;
            console.log("Voc\u00EA andou ".concat(distancia, "km"));
        }
        else {
            console.log('Não há combustível!');
        }
    };
    Carro.prototype.getCarro = function () {
        console.log("|Marca: ||".concat(this.marca, "||\n|Tanque: ||").concat(this.tanque, "||\n|Km: ||").concat(this.km, "||"));
    };
    Carro.prototype.obterGasolina = function () {
        console.log("Voce atualmente possui ".concat(this.tanque, " de Gasolina."));
    };
    Carro.prototype.adicionarGasolina = function () {
        var adicionar = leitor.questionInt('Quantidade de egasolina desejada:');
        this.tanque += adicionar;
        console.log("N\u00EDvel de gasolina ".concat(this.tanque, "L."));
    };
    Carro.prototype.Carro10 = function () {
        var tanque = leitor.question('Quantidade consumida pela tanque: ');
        var km = leitor.question("Quil\u00F4metros a serem percorridos: ");
        var marca = leitor.question("Marca do carro: ");
        this.tanque = tanque;
        this.km = km;
        this.marca = marca;
    };
    return Carro;
}());
exports.Carro = Carro;
var Garagem = /** @class */ (function () {
    function Garagem() {
        this.carros = [];
    }
    Garagem.prototype.addCarro = function (carro) {
        if (this.carros.length > 9) {
            console.log('A garagem está cheia!');
        }
        else {
            this.carros.push(carro);
        }
    };
    Garagem.prototype.remover = function () {
        var nomeremovido = leitor.question('Carro a ser removido: ');
        this.carros = this.carros.filter(function (carro) { return carro.marca !== nomeremovido; });
    };
    return Garagem;
}());
