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
  var formatedImc = imc.toFixed(2);
  imcResult.textContent = formatedImc;

  if (formatedImc >= 16.0 && formatedImc < 17.0) {
    return (faixaPesoResult.textContent = 'Muito abaixo do peso.');
  } else if (formatedImc >= 17.0 && formatedImc <= 18.4) {
    return (faixaPesoResult.textContent = 'Abaixo do peso.');
  } else if (formatedImc >= 18.5 && formatedImc < 25.0) {
    return (faixaPesoResult.textContent = 'Peso Normal.');
  } else if (formatedImc >= 25.0 && formatedImc < 30.0) {
    return (faixaPesoResult.textContent = 'Acima do peso.');
  } else if (formatedImc >= 30.0 && formatedImc < 35.0) {
    return (faixaPesoResult.textContent = 'Obesidade grau 1.');
  } else if (formatedImc >= 35.0 && formatedImc <= 40.0) {
    return (faixaPesoResult.textContent = 'Obesidade grau 2.');
  } else if (formatedImc >= 40.0) {
    return (faixaPesoResult.textContent = 'Obesidade grau 3.');
  } else {
    return (faixaPesoResult.textContent = 'Invalido');
  }
}

start();
