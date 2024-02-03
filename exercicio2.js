const valorDaCompra = 100
const numeroDeParcelas = 7

if (numeroDeParcelas === 1) {
    //a vista - com 10% de desconto
    const desconto = valorDaCompra * 10 / 100
    const valorAPagar = valorDaCompra - desconto
    console.log(`Você deve pagar R$${valorAPagar}, pois a vista tem 10% de desconto`)
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    //parcelado sem juros
    const valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2)
    console.log(`Você deve pagar ${numeroDeParcelas}x sem juros parcelas de R$${valorDaParcela}reais`)

} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    //parcelado com juros
    const valorApagarComJuros = (valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2)
    const valorDaParcela = (valorApagarComJuros / numeroDeParcelas).toFixed(2)
    console.log(`Você deve pagar em ${numeroDeParcelas}x de R$${valorDaParcela} totalizando R$${valorApagarComJuros} devido a incidencia de juros.`)
} else {
    //numero de parcelas invalido
    console.log("Numero de parcelas inválido.")
}