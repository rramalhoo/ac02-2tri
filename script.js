// EX01

function checarWhileEX1() {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    i = num1 + 1;
    contagemDePares = 0;
    contagemDeImpares = 0;


    if (num1 < num2) {
        while (i < num2) {
            if (i % 2 == 0) {
                contagemDePares++;
            } else {
                contagemDeImpares++;
            }
            i++;
        }
        alert(`Os números pares é ${contagemDePares}`);
        alert(`Os números ímpares é ${contagemDeImpares}`);
    }
    else {
        alert('O primeiro número deve ser menor que o segundo!');
    }
}


function checarDoEX1() {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    i = num1 + 1;
    contagemDePares = 0;
    contagemDeImpares = 0;

    if (num1 < num2) {
        do {
            if (i % 2 == 0) {
                contagemDePares++;
            } else {
                contagemDeImpares++;
            }
            i++;
        } while (i < num2);
        alert(`Os números pares é ${contagemDePares}`);
        alert(`Os números ímpares é ${contagemDeImpares}`);
    } else {
        alert('O primeiro número deve ser menor que o segundo!');
    }
}


function checarForEX1() {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    contagemDePares = 0;
    contagemDeImpares = 0;

    if (num1 < num2) {
        for (i = num1 + 1; i < num2; i++) {
            if (i % 2 == 0) {
                contagemDePares++;
            } else {
                contagemDeImpares++;
            }
        }
        alert(`Os números pares é ${contagemDePares}`);
        alert(`Os números ímpares é ${contagemDeImpares}`);
    } else {
        alert('O primeiro número deve ser menor que o segundo!');
    }
}




//EX02

function checarWhileEX2() {
    let num = parseInt(document.getElementById('num').value);
    let resposta = document.getElementById('resposta');
    let penultimo = 0;
    let ultimo = 1;
    let resultado = "0";

    if (num >= 2) {
        resultado += ", 1";
    }

    let count = 3;
    while (count <= num) {
        let numero = ultimo + penultimo;
        resultado += ", " + numero;
        penultimo = ultimo;
        ultimo = numero;
        count++;
    }

    alert("Sequência de Fibonacci até " + num + ": " + resultado);
}


function checarDoEX2() {
    let num = parseInt(document.getElementById('num').value);
    let resposta = document.getElementById('resposta');
    let penultimo = 0;
    let ultimo = 1;
    let resultado = "0";

    if (num >= 1) {
        resultado += ", 1";
    }

    let count = 3;
    do {
        let numero = ultimo + penultimo;
        resultado += ", " + numero;
        penultimo = ultimo;
        ultimo = numero;
        count++;
    } while (count <= num);

    alert("Sequência de Fibonacci até " + num + ": " + resultado);
}


function checarForEX2() {
    let num = parseInt(document.getElementById('num').value);
    let resposta = document.getElementById('resposta');
    let penultimo = 0;
    let ultimo = 1;
    let resultado = "0";

    if (num >= 2) {
        resultado += ", 1";
    }

    for (let i = 3; i <= num; i++) {
        let numero = ultimo + penultimo;
        resultado += ", " + numero;
        penultimo = ultimo;
        ultimo = numero;
    }

    alert("Sequência de Fibonacci até " + num + ": " + resultado);
}




//EX03


function checarWhileEX3() {
    let num = parseInt(document.getElementById("num").value);
    let primo = true;
    let i = 2;

    while (i < num) {
        if (num % i === 0) {
            primo = false;
        }
        i++;
    }

    if (primo && num > 1) {
        alert(num + " é um número brimo.");
    } else {
        alert(num + " não é um número brimo.");
    }
}


function checarDoEX3() {
    let num = parseInt(document.getElementById("num").value);
    let primo = true;
    let i = 2;

    if (num > 1) {
        do {
            if (num % i === 0) {
                primo = false;
            }
            i++;
        } while (i < num);
    } else {
        primo = false;
    }

    if (primo) {
        alert(num + " é um número brimo.");
    } else {
        alert(num + " não é um número brimo.");
    }
}


function checarForEX3() {
    let num = parseInt(document.getElementById("num").value);
    let primo = true;

    if (num <= 1) {
        primo = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                primo = false;

            }
        }
    }

    if (primo) {
        alert(num + " é um número brimo.");
    } else {
        alert(num + " não é um número brimo.");
    }
}