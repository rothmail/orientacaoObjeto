var Guerreiro = /** @class */ (function () {
    function Guerreiro(name, type, strong, health) {
        this.nome = name;
        this.tipo = type;
        this.forca = strong;
        this.saude = health;
    }
    Guerreiro.prototype.atacarMonstro = function (ataque) {
        console.log("Apanha krl");
    };
    Guerreiro.prototype.receberAtaque = function () {
        console.log("AAAAaaaaaaaaaaahh");
    };
    return Guerreiro;
}());
