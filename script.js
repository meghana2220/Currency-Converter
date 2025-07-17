const api = "https://api.exchangerate-api.com/v4/latest/USD";

let search=document.getElementById("searchBox");
let convert=document.getElementById("convert");
let fromCurrency=document.getElementById("from");
let toCurrency=document.getElementById("to");
let finalValue=document.getElementById("finalValue");
let finalAmount=document.getElementById("finalAmount");
let resultFrom;
let resultTo;
let searchValue;

fromCurrency.addEventListener('change',(event)=>{
    resultFrom=event.target.value ;
});

toCurrency.addEventListener('change',(event)=>{
    resultTo=event.target.value;
});

search.addEventListener('input',updateValue);

function updateValue(e)
{
    searchValue=e.target.value;
}

convert.addEventListener("click",getResults);

function getResults()
{
    fetch(api)
    .then(currency=>{
        return currency.json();
    }).then(displayResults);
}

function displayResults(currency)
{
    let fromRate=currency.rates[resultFrom];
    let toRate=currency.rates[resultTo];
    finalValue.innerHTML=((toRate/fromRate)*searchValue).toFixed(2);
    finalAmount.style.display="block"
}

function clearVal(){
    window.location.reload();
    document.getElementById("finalValue").innerHTML="";
};