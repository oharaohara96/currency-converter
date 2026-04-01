const convertButton = document.querySelector("#convert-button");
const inputAmount = document.querySelector("#amount-input");
const resultDisplay = document.querySelector("#result-display");
const currencySelect = document.querySelector("#change-currency");
const currencySelectFrom = document.querySelector("#select-currency-from")

function convertValues() {
    const inputValue = inputAmount.value;

      if (inputValue === "") {

      alert("Por favor, digite um valor!");

      return ;
     }

     if (currencySelect.value ===  currencySelectFrom.value) {

     resultDisplay.innerHTML = inputValue;

     return;
    }


  if (currencySelect.value === "BRL" && currencySelectFrom.value === "JPY") {

    const result = inputValue / 27;

    resultDisplay.innerHTML = "R$" + result.toFixed(2);
  }

  if (currencySelect.value === "JPY" && currencySelectFrom.value === "BRL") {

    const result = inputValue * 27;

    resultDisplay.innerHTML = "¥" + result.toFixed(2);
  }

  if (currencySelect.value === "BRL" && currencySelectFrom.value === "USD") {

    const result = inputValue * 5.10;

    resultDisplay.innerHTML = "R$" + result.toFixed(2);
  }

  if (currencySelect.value === "USD" && currencySelectFrom.value === "BRL") {

    const result = inputValue / 5.10;

    resultDisplay.innerHTML = "US$" + result.toFixed(2);
  }

 }

function changeCurrency() {
  const currencyNameFrom = document.querySelector("#currency-name-from");
  const currencyImageFrom = document.querySelector(".currency-img-from");
  const currencyNameTo = document.querySelector("#currency-name-to");
  const currencyImageTo = document.querySelector(".currency-image-to");


  if (currencySelectFrom.value === "JPY") {
     currencyNameFrom.innerHTML = "Iene Japones";
     currencyImageFrom.src ="../Images/JPN.png";
  }

  if (currencySelectFrom.value === "BRL") {
     currencyNameFrom.innerHTML = "Real Brasileiro";
     currencyImageFrom.src ="../Images/BR.png";
  }

  if (currencySelectFrom.value === "USD") {
     currencyNameFrom.innerHTML = "Dolar Americano";
     currencyImageFrom.src ="../Images/USA.png";
  }

  if (currencySelect.value === "JPY") {
     currencyNameTo.innerHTML = "ienes japones";
     currencyImageTo.src ="../Images/JPN.png";
  }

  if (currencySelect.value === "BRL") {
     currencyNameTo.innerHTML = "Real Brasileiro";
     currencyImageTo.src ="../Images/BR.png";
  }

  if (currencySelect.value === "USD") {
     currencyNameTo.innerHTML = "Dolar Americano";
     currencyImageTo.src ="../Images/USA.png";
  }
}

convertButton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrency);
currencySelectFrom.addEventListener("change", changeCurrency);
currencySelect.addEventListener("change", convertValues);
currencySelectFrom.addEventListener("change", convertValues);