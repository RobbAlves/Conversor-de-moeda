const convertButton = document.querySelector("button")
const currencySelect = document.querySelector(".currency-select")



function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".valor-convertido")
    const currencyValueConverted = document.querySelector(".valor")

    console.log(currencySelect.value)
    const dolarToday = 4.95
    const euroToday = 5.38
    const libraToday = 6.30
    const bitcoinToday = 326.571

    const convertedValue = inputCurrencyValue / dolarToday

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday )

}


if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday )

}



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const curencyImage = document.querySelector(".currency-img")



    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        curencyImage.src = "./img/estados-unidos (1) 1.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        curencyImage.src = "./img/Design sem nome 3.png"
    }


    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        curencyImage.src = "./img/libra 1.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        curencyImage.src = "./img/bitcoin 1.png"
    }



    convertValues()

    }


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
