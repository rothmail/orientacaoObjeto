var leitor = require('readline-sync')
export interface Data {
    constructor(dia: number, mes: number, ano: number);
    compara(outraData: Data): void;
    getDia(): number;
    getMes(): number;
    getMesExtenso(): void;
    getAno(): number;
    isBissexto(): void;
    clone(): Data;
}

export class Data implements Data {
    dia: number
    mes: number
    ano: number

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    compara(outraData: Data): void {
        if (outraData.dia == this.dia) {
            console.log('Dias iguais')
        }
        if (outraData.mes == this.mes) {
            console.log('Meses iguais')
        }
        if (outraData.ano == this.ano) {
            console.log('Anos iguais')
        }
    }


    getDia(): number {
        console.log(`Data desejada: ${this.dia}. `)
        return this.dia
    }

    getMes(): number {
        console.log(`Mês desejado: ${this.mes}. `)
        return this.mes
    }

    getAno(): number {
        console.log(`Ano desejado: ${this.ano}. `)
        return this.ano
    }

    getMesExtenso(): void {
        switch (this.mes) {
            case 1:
                console.log('Janeiro')
                break
            case 2:
                console.log('Fevereiro')
                break
            case 3:
                console.log('Março')
                break
            case 4:
                console.log('Abril')
                break
            case 5:
                console.log('Maio')
                break
            case 6:
                console.log('Junho')
                break
            case 7:
                console.log('Julho')
                break
            case 8:
                console.log('Agosto')
                break
            case 9:
                console.log('Setembro')
                break
            case 10:
                console.log('Outubro')
                break
            case 11:
                console.log('Novembro')
                break
            case 12:
                console.log('Dezembro')
                break
            default:
                console.log('Mês inválido')
        }   
 }

    isBissexto(): void {
       
        if (this.ano === 2000 || this.ano === 1000 || this.ano === 0) {
            console.log('O ano é bissexto')
        } else if (this.ano % 4 === 0 && this.ano % 100 !=0) {
            console.log('o ano é bissexto')
        } else { 
            console.log('O ano não é bissexto')
        }
       
        let bissexto = this.ano % 4
        if (bissexto === 0) {
            console.log('Ano não bissexto!')
        } else {
            console.log('Ano bissexto!')
        }
    }
    clone(): Data {
        let dataDois = new Data(this.dia, this.mes, this.ano)
        return dataDois
    }
}
