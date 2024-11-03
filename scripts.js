const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
  const inputCurrencyValue = document.querySelector(".imput-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
  const currencyValueToConverted = document.querySelector(".currency-value")

  console.log(currencySelect.value)
  const dolarToday = 5.2
  const euroToday = 6.2




  if (currencySelect.value == "dolar") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolarToday)


  }
  if (currencySelect.value == "euro") {

    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)

  }


  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)


  currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(convertedValue)

}
function changeCurrency() {
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")
  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dolar americano"
    currencyImage.src = "./assets/estados-unidos (1) 1.png"

  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "euro"
    currencyImage.src = "./assets/euro.png"

  }


  convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)






