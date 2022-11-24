let inputOne = document.getElementById("inputOne")
let inputTwo = document.getElementById("inputTwo")
let divOutput = document.getElementById("divOutput")

function showMessage(message) {
    divOutput.innerText = message
    divOutput.classList.remove("d-none")
}

document.getElementById("btnSum").addEventListener("click", () => {
    let numberOne = parseFloat(inputOne.value)
    let numberTwo = parseFloat(inputTwo.value)

    let sum = numberOne + numberTwo

    showMessage(`A soma dos números ${numberOne} e ${numberTwo} é igual à ${sum}`)
})

document.getElementById("btnSub").addEventListener("click", () => {
    let numberOne = parseFloat(inputOne.value)
    let numberTwo = parseFloat(inputTwo.value)

    let sub = numberOne - numberTwo

    showMessage(`A subtração dos números ${numberOne} e ${numberTwo} é igual à ${sub}`)
})

document.getElementById("btnMult").addEventListener("click", () => {
    let numberOne = parseFloat(inputOne.value)
    let numberTwo = parseFloat(inputTwo.value)

    let mult = numberOne * numberTwo

    showMessage(`A multiplicação dos números ${numberOne} e ${numberTwo} é igual à ${mult}`)
})

document.getElementById("btnDiv").addEventListener("click", () => {
    let numberOne = parseFloat(inputOne.value)
    let numberTwo = parseFloat(inputTwo.value)

    let div = numberOne / numberTwo

    showMessage(`A divisão dos números ${numberOne} e ${numberTwo} é igual à ${div}`)
})