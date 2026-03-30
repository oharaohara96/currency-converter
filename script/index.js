const convertButton = document.querySelector("#convert-button");
const inputAmount = document.querySelector("#amount-input");
const resultDisplay = document.querySelector("#result-display");
const currencySelect = document.querySelector("#change-currency");
const currencySelectFrom = document.querySelector("#select-currency-from")

function convertValues() {
    const inputValue = inputAmount.value;

    if (currencySelect.value === "JPY") {

    const result = inputValue * 27;

    resultDisplay.innerHTML = "¥ " + result;
    console.log("Valor digitado:", inputValue);
    console.log("Resultado em Iene:", result);
    }

    if (currencySelect.value === "USD") {

    const result = inputValue / 5.10;

    resultDisplay.innerHTML = "US$ " + result.toFixed(2);
    console.log("Valor digitado:", inputValue);
    console.log("Resultado em Dólar:", result);
    }

    if (currencySelectFrom.value === "JPY" && currencySelectFrom.value === "BRL") {

    const result = inputValue / 27;

    resultDisplay.innerHTML = "R$ " + result.toFixed(2);
  }

    if (currencySelectFrom.value === "JPY" && currencySelectFrom.value === "BRL") {

    const result = inputValue / 27;

    resultDisplay.innerHTML = "R$ " + result.toFixed(2);
  }

}
function changeCurrency() {
  const currencyName = document.querySelector("#currency-Name");
  const currencyImage = document.querySelector(".currency-Image");
  const currencyNameFrom = document.querySelector()

  if (currencySelect.value === "USD") {
    currencyName.innerHTML = "Dolar Americano";
    currencyImage.src ="../Images/USA.png";

  }
  if (currencySelect.value === "JPY") {
     currencyName.innerHTML = "Iene Japones";
     currencyImage.src ="../Images/JPN.png";

  }

  if (currencySelect.value === "BRL") {
     currencyName.innerHTML = "Real Brasileiro";
     currencyImage.src ="../Images/BR.png";

  }
}

convertButton.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrency);