const convertButton = document.querySelector("#convert-button");
const inputAmount = document.querySelector("#amount-input");
const resultDisplay = document.querySelector("#result-display");
const currencyfrom = document.querySelector("#currency-from");

function convertValues() {
    const inputValue = inputAmount.value;

    if (currencyfrom.value === "JPY") {

    const result = inputValue * 27;

    resultDisplay.innerHTML = "¥ " + result;

    }

    if (currencyfrom.value === "USD") {

    const result = inputValue / 5.10;

    resultDisplay.innerHTML = "US$ " + result.toFixed(2);
    }
    console.log("Valor digitado:", inputValue);
    console.log("Resultado em Iene:", result);

}

convertButton.addEventListener("click", convertValues);