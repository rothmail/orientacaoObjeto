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
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.comprimentar = function () {
        console.log("Sauda\u00E7\u00F5es ".concat(this.nome, "!!"));
    };
    return Pessoa;
}());
var minhaPessoa = new Pessoa("Jorge", 19);
minhaPessoa.comprimentar();
var Amanda = /** @class */ (function (_super) {
    __extends(Amanda, _super);
    function Amanda() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Amanda.prototype.comprimentar = function () {
        console.log("Ol\u00E1 ".concat(this.nome, ", como voc\u00EA est\u00E1?"));
    };
    return Amanda;
}(Pessoa));
var eu = new Amanda("Amanda", 19);
eu.comprimentar();
var Crianca = /** @class */ (function (_super) {
    __extends(Crianca, _super);
    function Crianca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crianca.prototype.comprimentar = function () {
        console.log("Ol\u00E1. Seu nome \u00E9 ".concat(this.nome, " e voc\u00EA tem ").concat(this.idade, " anos! Voc\u00EA \u00E9 uma crian\u00E7a"));
    };
    return Crianca;
}(Pessoa));
var Adulto = /** @class */ (function (_super) {
    __extends(Adulto, _super);
    function Adulto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adulto.prototype.comprimentar = function () {
        console.log("Ol\u00E1, voc\u00EA se chama ".concat(this.nome, " e tem ").concat(this.idade, " anos! Voc\u00EA \u00E9 um adulto"));
    };
    return Adulto;
}(Pessoa));
var Idoso = /** @class */ (function (_super) {
    __extends(Idoso, _super);
    function Idoso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Idoso.prototype.comprimentar = function () {
        console.log("Ol\u00E1, voc\u00EA se chama ".concat(this.nome, " e tem ").concat(this.idade, " anos! Voc\u00EA \u00E9 um idoso"));
    };
    return Idoso;
}(Pessoa));
var kid = new Crianca("Enzo", 7);
var adult = new Adulto("Lucas", 37);
var oldman = new Idoso("Paulo", 78);
kid.comprimentar();
adult.comprimentar();
oldman.comprimentar();
