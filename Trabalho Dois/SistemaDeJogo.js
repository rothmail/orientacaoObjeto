var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var rl = require("readline-sync");
var Jogo = /** @class */ (function () {
    function Jogo(titulo, genero, classificacao) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacao = classificacao;
    }
    Jogo.prototype.get = function () {
        console.log("|| T\u00EDtulo do jogo: ".concat(this.titulo, "|| G\u00EAnero \u00E9 ").concat(this.genero, "\n|| Classifica\u00E7\u00E3o: ").concat(this.classificacao, " anos."));
    };
    return Jogo;
}());
var jogoEletronico = /** @class */ (function (_super) {
    __extends(jogoEletronico, _super);
    function jogoEletronico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    jogoEletronico.prototype.super = function (titulo, genero, classificacao, plataforma) {
    };
    jogoEletronico.prototype.geteletronico = function () {
        console.log("|| T\u00EDtulo: ".concat(this.titulo, "\n|| G\u00EAnero: ").concat(this.genero, "\n|| Classifica\u00E7\u00E3o: ").concat(this.classificacao, "\n|| Platamorma: ").concat(this.plataforma));
    };
    return jogoEletronico;
}(Jogo));
var jogoTabauleiro = /** @class */ (function (_super) {
    __extends(jogoTabauleiro, _super);
    function jogoTabauleiro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    jogoTabauleiro.prototype.super = function (titulo, genero, classificacao, numeroJogadores) {
    };
    jogoTabauleiro.prototype.gettabuleiro = function () {
        console.log("|| T\u00EDtulo: ".concat(this.titulo, "\n|| G\u00EAnero: ").concat(this.genero, "\n|| Classifica\u00E7\u00E3o: ").concat(this.classificacao, "\n|| Quantidade de jogadores: ").concat(this.numeroJogadores));
    };
    return jogoTabauleiro;
}(Jogo));
var bibliotecaDeJogos = /** @class */ (function () {
    function bibliotecaDeJogos() {
    }
    bibliotecaDeJogos.prototype.addJogo = function (jogo) {
        this.jogos.push(jogo);
    };
    bibliotecaDeJogos.prototype.rmJogo = function (jogo) {
        this.getJogos();
        var nomeremovido = rl.question('Qual jogo deseja remover');
        this.jogos = this.jogos.filter(function (jogo) { return jogo.titulo !== nomeremovido; });
    };
    bibliotecaDeJogos.prototype.getJogos = function () {
        for (var _i = 0, _a = this.jogos; _i < _a.length; _i++) {
            var jogo = _a[_i];
            jogo.get();
        }
    };
    return bibliotecaDeJogos;
}());
