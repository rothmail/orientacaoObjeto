import { Data } from "./Calendario";

export class Passageiro {
    nome: string
    idade: number
    cpf: number

    constructor(nome: string,idade:number, cpf: number){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }

    getPassageiro(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, CPF: ${this.cpf}`)
    }

    setPassageiro(): void {
        let nome = rl.question('Qual o seu nome? ')
        let idade = rl.questionInt('Qual a sua idade? ')
        let cpf = rl.questionInt('Qual o seu cpf? ')
        this.nome = nome
        this.cpf = cpf
        this.idade = idade
    }

}

export interface Voo {
    constructor(numeroVoo: string, data: string);
    proximoLivre(): void;
    verifica(cadeira: number): void;
    ocupa(cadeira: number): void;
    vagas(): number;
    getVoo(): void;
    getData(): void;
    clone(): Voo;
}

export class Voo implements Voo{
    public data: string
    public numeroVoo: number
    private cadeira: Array<number>
    public passageiros: Array<Passageiro> = []

     constructor(numeroVoo: number, data: string){
        this.data = data
        this.numeroVoo = numeroVoo
        let i: number
        for(i = 1;i <= 100; i++){
            this.cadeira.push(0)
        }
     }

    public proximoLivre(): void {
         let i: number
         for(i = 1;i < this.cadeira.length; i++){
            if(this.cadeira[i] == 0){
                console.log(`A cadeira de numero ${i} é a proxima livre`)
            }
         }
     }
    public verifica(cadeira: number): void {
         let i: number
         for(i = 0; i <= this.cadeira.length;i++){
            if(cadeira == i && this.cadeira[i] == 0){
                console.log(`Essa cadeira esta livre`);
            }else{
                console.log(`Essa cadeira esta ocupada`);
            }
         }
     }
    public ocupa(cadeira: number): void {
        
         let i: number
         for(i = 0; i <= this.cadeira.length;i++){
            if(cadeira == i && this.cadeira[i] == 0){
                console.log('Voce ocupou essa cadeira')
                this.cadeira[i] = 1
                }
                else{
                    console.log('Essa cadeira esta ocupada');
                    
                }
            }
         }

        public getVoo(): void {
            console.log(`Seu voou é: ${this.numeroVoo}`)
        }
    
        public getData(): void {
            console.log(`Data do voo: ${this.data}`)
        }
    
        public clone(): Voo {
            let vooDois = new Voo(this.numeroVoo,this.data)
            vooDois.cadeira = this.cadeira
            return vooDois
        }

        public vaga(): number {
            let i = 0
            let n = 0
            while(this.cadeira.length[i]<99){
                i++
                if(this.cadeira[i] == 0){
                    n ++
                    
                    }
            }
            return n
        }

        public cadastrarPassageiro(){
            let pass = new Passageiro('',0,0)
            pass.setPassageiro()
            this.passageiros.push(pass)
        }
     }
