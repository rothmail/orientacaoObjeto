export class Monstro {
    nome:string
    tipo:string
    forca:number
    life:number

    constructor (name:string, type:string, strenght:number, life:number) {
        this.nome = name
        this.tipo = type
        this.forca = strenght
        this.life = 100
    }

    atacar(meuMonstro:Monstro): void {
        const dano = this.forca
        meuMonstro.receberDano(dano)
        console.log(`${this.nome} ataca com ${dano} de dano`)
    }

    receberDano(dano:number): void {
        this.life -= dano
    }
}