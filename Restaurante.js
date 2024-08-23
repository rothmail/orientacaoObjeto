var leitor = require('readline-sync');
var Cozinheiro = /** @class */ (function () {
    function Cozinheiro(nome, idade, ano_xp) {
        this.nome = nome;
        this.idade = idade;
        this.ano_xp = ano_xp;
    }
    Cozinheiro.prototype.setCozinheiro = function () {
        var nomeUp = leitor.question('Qual o nome do cozinheiro? ');
        var idadeUp = leitor.questionInt('Qual a idade do cozinheiro? ');
        var ano_xpUp = leitor.questionInt('Qual o tempo de xp do cozinheiro');
        this.nome = nomeUp;
        this.idade = idadeUp;
        this.ano_xp = ano_xpUp;
    };
    Cozinheiro.prototype.getCozinheiro = function () {
        console.log("Hello, my name's ".concat(this.nome, ", I'm ").concat(this.idade, " years old and I'm a chef for ").concat(this.ano_xp));
    };
    return Cozinheiro;
}());
var Restaurante = /** @class */ (function () {
    function Restaurante(cz, nome, endereco, num_end) {
        this.cz = cz;
        this.nome = nome;
        this.endereco = endereco;
        this.num_end = num_end;
    }
    Restaurante.prototype.setRestaurante = function () {
        var nomeUp = leitor.question('Qual o nome do restaurante? ');
        var enderecoUp = leitor.question('Qual o endereço do restaurante? ');
        var num_endUp = leitor.questionInt('Qual o do prédio do restaurante? ');
        this.nome = nomeUp;
        this.endereco = enderecoUp;
        this.num_end = num_endUp;
    };
    Restaurante.prototype.getRestaurante = function () {
        console.log("Hello, the Restaurant's name's ".concat(this.nome, ", it's address is ").concat(this.endereco, " on number ").concat(this.num_end));
    };
    return Restaurante;
}());
//instância da classe Cozinheiro
var chefDani = new Cozinheiro('Danielle', 35, 15);
//instância da classe Restaurante agregada com o objeto da classe Cozinheiro
var divina = new Restaurante(chefDani, 'Divina', 'Av. Divida', 500);
console.log(divina.cz);
var novoChef = new Cozinheiro('teste', 50, 20);
novoChef.getCozinheiro();
novoChef.setCozinheiro();
novoChef.getCozinheiro();
var novoRestaurante = new Restaurante(chefDani, 'teste', 'teste2', 20);
novoRestaurante.getRestaurante();
novoRestaurante.setRestaurante();
novoRestaurante.getRestaurante();
