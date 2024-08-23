var leitor = require('readline-sync')
export interface Voo {
    constructor(numeroVoo: string, data: string,cadeira: Array<number>);
    proximoLivre(): void;
    verifica(cadeira: number): void;
    ocupa(cadeira: number): void;
    vagas(): number;
    getVoo(): void;
    getData(): void;
    clone(): Voo;
    quantCadeiras(): void;
}

export class Voo implements Voo {
    numeroVoo: string
    data: string
    cadeira: Array<number> 

    constructor(numeroVoo: string, data: string) {
        this.numeroVoo = numeroVoo
        this.data = data
        this.cadeira = []
    }
    public quantCadeiras(): void {
        for (let i = 0; i < 99; i++){
            this.cadeira.push(0)
        }
    }
    public proximoLivre(): void {
        let i;
        let n = true
        while (n == true){
            if(this.cadeira[i]==0){
                console.log(this.cadeira)
                n = false
            }
        i ++
        }
    }
    public verifica(cadeira: number): void {
        if (cadeira == 0) {
            console.log('Sua cadeira esta livre!')
        } else {
            console.log('Sua cadeira esta ocupada!')
        }
    }
    public ocupa(cadeira: number): void {
        let i: number
        for(i = 0; i <= this.cadeira.length;i++) {
           if(cadeira == i && this.cadeira[i] == 0){
               console.log('Você ocupou essa cadeira')
               this.cadeira[i] = 1
               } else {
                   console.log('Esta cadeira esta ocupada');
            }
        }
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
    public getVoo(): void {
        console.log(`Seu voo: ${this.numeroVoo}`)
        
    }
    public getData(): void {
        console.log(`Data do voo: ${this.data}`)
    }
    public clone(): Voo {
        let vooDois = new Voo(this.numeroVoo,this.data)
        vooDois.cadeira = this.cadeira
        return vooDois
    }
}