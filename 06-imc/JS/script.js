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
  let faixaPesoResult = document.querySelector('#faixa-peso');
  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);
  let imc = calcularImc(weight, height);
  var formatedImc = imc.toFixed(2).replace('.', ',');
  imcResult.textContent = formatedImc;

  if (formatedImc > 16.0 && formatedImc < 17.0) {
    faixaPesoResult.textContent = 'Muito abaixo do peso.';
  } else {
    faixaPesoResult.textContent = 'não entrou no if';
  }
}

start();
