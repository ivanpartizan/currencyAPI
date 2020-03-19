const button = document.getElementById("btn");
const input = document.getElementById("currency");

button.addEventListener("click", currencyConverter);
input.addEventListener("keyup", enterKey);

function enterKey(e) {
  if (e.keyCode === 13) {
    currencyConverter();
  }
}

async function currencyConverter() {
  const url =
    "http://data.fixer.io/api/latest?access_key=a9222b359101bcd64f4806307aff36db&base=EUR&symbols=USD,CAD,AUD,CHF,GBP,JPY,RUB,RSD,BRL,ARS";

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  document.getElementById("output").innerHTML = `
  <div class='usa'>
  <h2>USD</h2> <img src='usd.svg' height='40'> <h2>${(
    input.value * data.rates.USD
  ).toFixed(3)}</h2>
  </div>
  <div class='cad'>
  <h2>CAD</h2> <img src='cad.svg' height='40'> <h2>${(
    input.value * data.rates.CAD
  ).toFixed(3)}</h2>
  </div>
  <div class='aud'>
  <h2>AUD</h2> <img src='aud.svg' height='40'> <h2>${(
    input.value * data.rates.AUD
  ).toFixed(3)}</h2>
  </div>
  <div class='chf'>
  <h2>CHF</h2> <img src='chf.svg' height='40'> <h2>${(
    input.value * data.rates.CHF
  ).toFixed(3)}</h2>
  </div>
  <div class='gbp'>
  <h2>GBP</h2> <img src='gbp.svg' height='40'> <h2>${(
    input.value * data.rates.GBP
  ).toFixed(3)}</h2>
  </div>
  <div class='jpy'>
  <h2>JPY</h2> <img src='jpy.svg' height='40'> <h2>${(
    input.value * data.rates.JPY
  ).toFixed(3)}</h2>
  </div>
  <div class='rub'>
  <h2>RUB</h2> <img src='rub.svg' height='40'> <h2>${(
    input.value * data.rates.RUB
  ).toFixed(3)}</h2>
  </div>
  <div class='rsd'>
  <h2>RSD</h2> <img src='rsd.svg' height='40'> <h2>${(
    input.value * data.rates.RSD
  ).toFixed(3)}</h2>
  </div>
  <div class='brl'>
  <h2>BRL</h2> <img src='brl.svg' height='40'> <h2>${(
    input.value * data.rates.BRL
  ).toFixed(3)}</h2>
  </div>
  <div class='ars'>
  <h2>ARS</h2> <img src='ars.svg' height='40'> <h2>${(
    input.value * data.rates.ARS
  ).toFixed(3)}</h2>
  </div>
  `;
}

currencyConverter();
