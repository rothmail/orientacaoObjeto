export interface Prova {
    constructor(gabarito: []);
    respostaAluno(resposta: string): void;
    acertos(): number;
    nota(): number;
    maior(outraProva: Prova): void;
}
  
export class Prova implements Prova{
    public gabarito : Array<string>
    num: number = 1
    acertos1: number
    questoes: number = 0
    

    constructor(gabarito: []){
        this.gabarito = gabarito
    }
   
    respostaAluno(resposta: string): void {
        if(resposta == this.gabarito[this.num - 1] && this.num <= 10){
            this.acertos1 += 0.5
            this.num ++
            this.questoes ++
        }else if(resposta == this.gabarito[this.num - 1] && this.num > 10){
            this.acertos1 += 1
            this.num ++
            this.questoes ++
        }
    }

    acertos(): number {
        return this.questoes
    
    
    }

    nota(): number {
        return this.acertos1
    }

    maior(outraProva: Prova): void {
        if(this.acertos1 > outraProva.acertos1){
            console.log(`Sua nota é maior`);
            
        }else{
            console.log(`A outra prova tirou uma nota melhor`);
            
        }
    }
}






