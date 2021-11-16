const button = document.getElementById("btn");
const input = document.getElementById("currency");

button.addEventListener("click", currencyConverter);
input.addEventListener("keyup", enterKey);

document.getElementById("output").style.display = "none";

function enterKey(e) {
  if (e.keyCode === 13) {
    currencyConverter();
  }
}

async function currencyConverter() {
  const url = `https://api.frankfurter.app/latest?amount=${input.value}&from=EUR&to=USD,CAD,AUD,CHF,GBP,JPY,RUB,RSD,BRL,ARS`;

  if (input.value < 1) {
    alert("Please, enter valid value");
  }

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  document.getElementById("output").style.display = "block";

  document.getElementById("output").innerHTML = `
    <div class='usa'>
    <h2>USD</h2> <img src='usd.svg' height='40'> <h2>${(
      (input.value * data.rates.USD) /
      input.value
    ).toFixed(2)}</h2>
    </div>
    <div class='cad'>
    <h2>CAD</h2> <img src='cad.svg' height='40'> <h2>${(
      (input.value * data.rates.CAD) /
      input.value
    ).toFixed(2)}</h2>
    </div>
    <div class='aud'>
    <h2>AUD</h2> <img src='aud.svg' height='40'> <h2>${(
      (input.value * data.rates.AUD) /
      input.value
    ).toFixed(2)}</h2>
    </div>
    <div class='chf'>
    <h2>CHF</h2> <img src='chf.svg' height='40'> <h2>${(
      (input.value * data.rates.CHF) /
      input.value
    ).toFixed(2)}</h2>
    </div>
    <div class='gbp'>
    <h2>GBP</h2> <img src='gbp.svg' height='40'> <h2>${(
      (input.value * data.rates.GBP) /
      input.value
    ).toFixed(2)}</h2>
    </div>
    <div class='jpy'>
    <h2>JPY</h2> <img src='jpy.svg' height='40'> <h2>${(
      (input.value * data.rates.JPY) /
      input.value
    ).toFixed(2)}</h2>
    </div>
    <div class='rub'>
    <h2>RUB</h2> <img src='rub.svg' height='40'> <h2>${(
      (input.value * data.rates.RUB) /
      input.value
    ).toFixed(2)}</h2>
    </div>
    <div class='rsd'>
    <h2>RSD</h2> <img src='rsd.svg' height='40'> <h2>${(
      (input.value * data.rates.RSD) /
      input.value
    ).toFixed(2)}</h2>
    </div>
    <div class='brl'>
    <h2>BRL</h2> <img src='brl.svg' height='40'> <h2>${(
      (input.value * data.rates.BRL) /
      input.value
    ).toFixed(2)}</h2>
    </div>
    <div class='ars'>
    <h2>ARS</h2> <img src='ars.svg' height='40'> <h2>${(
      (input.value * data.rates.ARS) /
      input.value
    ).toFixed(2)}</h2>
    </div>
  `;
}
