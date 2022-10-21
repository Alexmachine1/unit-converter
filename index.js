
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const showResult1 = document.getElementById("show-result1")
const showResult2 = document.getElementById("show-result2")
const showResult3 = document.getElementById("show-result3")

const meterToFeet =  3.281
const feetToMeter = 0.3048
const literToGallon =  0.264
const gallonToLiter = 3.78541
const kiloToPound =  2.204
const poundToKilo = 0.453592

convertBtn.addEventListener("click", function(){
    let inputValue = inputEl.value
    
    showResult1.innerHTML = `${inputValue} meter = ${inputValue * meterToFeet.toFixed(2)} feet
    | ${inputValue} feet = ${inputValue * feetToMeter.toFixed(2)} meter`

    showResult2.innerHTML = `${inputValue} litre = ${inputValue * literToGallon.toFixed(2)} gallon
    | ${inputValue} gallon = ${inputValue * gallonToLiter.toFixed(2)} litre`

    showResult3.innerHTML = `${inputValue} kilogram = ${inputValue * kiloToPound.toFixed(2)} pound
    | ${inputValue} pound = ${inputValue * poundToKilo.toFixed(2)} kilogram`
})
