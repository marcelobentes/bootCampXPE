function start() {
  var buttonCalcular = document.querySelector('#button-calcular-imc');
  buttonCalcular.addEventListener('click', buttonClick);

  buttonClick();
}

function calcularImc(peso, altura) {
  return peso / (altura * altura);
}

function buttonClick() {
  let inputWeight = document.querySelector('#input-weight');
  let inputHeight = document.querySelector('#input-height');
  let imcResult = document.querySelector('#imc-result');
  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);
  let imc = calcularImc(weight, height);
  let formatedImc = imc.toFixed(2).replace('.', ',');
  imcResult.textContent = formatedImc;
}

start();
