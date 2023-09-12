let num = prompt("Ingrese el número");
let factorial = 1;

while (num < 0) {
    console.log("Error! El número ingresado debe ser mayor o igual a 0. Inténtelo nuevamente.");
    num = prompt("Ingrese el número");
}
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
alert("El resultado de " + num + "! es: " + factorial + ".");
