// EX01

function checarWhileEX1() {
    let num1 = parseInt(document.getElementById('num1Ex1').value)
    let num2 = parseInt(document.getElementById('num2Ex1').value)
    i = num1 + 1
    contagemDePares = 0
    contagemDeImpares = 0


    if (num1 < num2) {
        while (i < num2) {
            if (i % 2 == 0) {
                contagemDePares++
            } else {
                contagemDeImpares++
            }
            i++
        }
        document.getElementById("respostaEX1").innerHTML = 'Os numeros pares são:' + contagemDePares + '<br>' + 'Os numeros ímpares são' + contagemDeImpares
    }
    else {
        document.getElementById("respostaEX1").innerHTML = 'O primeiro numero deve ser menor que o segundo'
    }
}


function checarDoEX1() {
    let num1 = parseInt(document.getElementById('num1Ex1').value)
    let num2 = parseInt(document.getElementById('num2Ex1').value)
    i = num1 + 1
    contagemDePares = 0
    contagemDeImpares = 0

    if (num1 < num2) {
        do {
            if (i % 2 == 0) {
                contagemDePares++
            } else {
                contagemDeImpares++
            }
            i++
        } while (i < num2)
        document.getElementById("respostaEX1").innerHTML = 'Os numeros pares são:' + contagemDePares + '<br>' + 'Os numeros ímpares são' + contagemDeImpares
    } else {
        document.getElementById("respostaEX1").innerHTML = 'O primeiro numero deve ser menor que o segundo'
    }
}


function checarForEX1() {
    let num1 = parseInt(document.getElementById('num1Ex1').value)
    let num2 = parseInt(document.getElementById('num2Ex1').value)
    contagemDePares = 0
    contagemDeImpares = 0

    if (num1 < num2) {
        for (i = num1 + 1; i < num2; i++) {
            if (i % 2 == 0) {
                contagemDePares++
            } else {
                contagemDeImpares++
            }
        }
        document.getElementById("respostaEX1").innerHTML = 'Os numeros pares são:' + contagemDePares + '<br>' + 'Os numeros ímpares são' + contagemDeImpares
    } else {
        document.getElementById("respostaEX1").innerHTML = 'O primeiro numero deve ser menor que o segundo'
    }
}





//EX02

function checarWhileEX2() {
    let num = parseInt(document.getElementById('numEx2').value)
    let resposta = document.getElementById('resposta')
    let penultimo = 0
    let ultimo = 1
    let resultado = "0"

    if (num >= 2) {
        resultado += ", 1"
    }

    let conta = 3
    while (conta <= num) {
        let numero = ultimo + penultimo
        resultado += ", " + numero
        penultimo = ultimo
        ultimo = numero
        conta++
    }

    document.getElementById("resultadoEx2").innerHTML = "Sequência de Fibonacci até " + num + ": " + resultado

}


function checarDoEX2() {
    let num = parseInt(document.getElementById('numEx2').value)
    let resposta = document.getElementById('resposta')
    let penultimo = 0
    let ultimo = 1
    let resultado = "0"

    if (num >= 1) {
        resultado += ", 1"
    }

    let conta = 3
    do {
        let numero = ultimo + penultimo
        resultado += ", " + numero
        penultimo = ultimo
        ultimo = numero
        conta++
    } while (conta <= num)

    document.getElementById("resultadoEx2").innerHTML = "Sequência de Fibonacci até " + num + ": " + resultado

}


function checarForEX2() {
    let num = parseInt(document.getElementById('numEx2').value)
    let resposta = document.getElementById('resposta')
    let penultimo = 0
    let ultimo = 1
    let resultado = "0"

    if (num >= 2) {
        resultado += ", 1"
    }

    for (let i = 3; i <= num; i++) {
        let numero = ultimo + penultimo
        resultado += ", " + numero
        penultimo = ultimo
        ultimo = numero
    }

    document.getElementById("resultadoEx2").innerHTML = "Sequência de Fibonacci até " + num + ": " + resultado
}
