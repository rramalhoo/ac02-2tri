//EX01
function checarWhileEX1() {
    let numero = parseInt(document.getElementById('numEx1').value)
    let somaPares = 0
    let somaImpares = 0

    if (numero > 0) {
        let contador = 0
        let numeroPar = 2
        let numeroImpar = 1

        while (contador < numero) {
            somaPares += numeroPar
            somaImpares += numeroImpar

            numeroPar += 2
            numeroImpar += 2
            contador++
        }

        document.getElementById("respostaEX1").innerHTML = 'Soma dos pares: ' + somaPares + '<br>' + 'Soma dos ímpares: ' + somaImpares
    } else {
        document.getElementById("respostaEX1").innerHTML = 'Insira um número positivo'
    }
}

function checarDoEX1() {
    let numero = parseInt(document.getElementById('numEx1').value)
    let somaPares = 0
    let somaImpares = 0

    if (numero > 0) {
        let contador = 0
        let numeroPar = 2
        let numeroImpar = 1

        do {
            somaPares += numeroPar
            somaImpares += numeroImpar

            numeroPar += 2
            numeroImpar += 2
            contador++
        } while (contador < numero)

        document.getElementById("respostaEX1").innerHTML = 'Soma dos pares: ' + somaPares + '<br>' + 'Soma dos ímpares: ' + somaImpares
    } else {
        document.getElementById("respostaEX1").innerHTML = 'Insira um número  positivo'
    }
}

function checarForEX1() {
    let numero = parseInt(document.getElementById('numEx1').value)
    let somaPares = 0
    let somaImpares = 0

    if (numero > 0) {
        let numeroPar = 2
        let numeroImpar = 1

        for (let contador = 0; contador < numero; contador++) {
            somaPares += numeroPar
            somaImpares += numeroImpar

            numeroPar += 2
            numeroImpar += 2
        }

        document.getElementById("respostaEX1").innerHTML = 'Soma dos pares: ' + somaPares + '<br>' + 'Soma dos ímpares: ' + somaImpares
    } else {
        document.getElementById("respostaEX1").innerHTML = 'Insira um número positivo'
    }
}


//EX02

function checarWhileEX2() {
    let num = parseInt(document.getElementById('numEx2').value)
    let penultimo = 0
    let ultimo = 1
    let resultado = "0"

    if (num >= 2) {
        resultado += ", 1"
    }

    let conta = 3
    while (conta <= num) {
        numero = ultimo + penultimo
        resultado += ", " + numero
        penultimo = ultimo
        ultimo = numero
        conta++
    }

    document.getElementById("resultadoEx2").innerHTML = "Sequência de Fibonacci até " + num + " : " + resultado
}

function checarDoEX2() {
    let num = parseInt(document.getElementById('numEx2').value)
    let penultimo = 0
    let ultimo = 1
    let resultado = "0"

    if (num >= 1) {
        resultado += ", 1"
    }

    let conta = 3
    do {
        numero = ultimo + penultimo
        resultado += ", " + numero
        penultimo = ultimo
        ultimo = numero
        conta++
    } while (conta <= num)

    document.getElementById("resultadoEx2").innerHTML = "Sequência de Fibonacci até " + num + " : " + resultado
}

function checarForEX2() {
    let num = parseInt(document.getElementById('numEx2').value)
    let penultimo = 0
    let ultimo = 1
    let resultado = "0"

    if (num >= 2) {
        resultado += ", 1"
    }

    for (i = 3; i <= num; i++) {
        numero = ultimo + penultimo
        resultado += ", " + numero
        penultimo = ultimo
        ultimo = numero
    }

    document.getElementById("resultadoEx2").innerHTML = "Sequência de Fibonacci até " + num + " : " + resultado
}