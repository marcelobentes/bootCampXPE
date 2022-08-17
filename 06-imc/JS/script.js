function start() {
  var buttonCalcularIMC = document.querySelector('button-calcular-imc');
}

start();

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}
