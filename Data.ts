class Data {
    dia:number
    mes:number
    ano:number

    constructor (dia:number, mes:number, ano:number) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}
let novaData: Data = new Data(21, 11, 2008)
console.log(novaData)