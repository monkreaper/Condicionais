const temIngresso = true
const censura = 16
const idade = 14
const estarComOsPais = false

if (temIngresso) {
    if (idade >= censura || estarComOsPais) {
        console.log("Pode entrar")
    } else {
        console.log("Barrada")
    }

} else {
    console.log("Barrada")
}