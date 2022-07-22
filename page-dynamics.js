const incomeTaxRates = [0.1, 0.14, 0.2, 0.31, 0.35, 0.47, 0.5];
const incomeTaxMonthlyBrackets = [6450, 2790, 5600, 5780, 22290, 12360, Infinity];
const incomeTaxAnnualBrackets = [77400, 33480, 67200, 69360, 267480, 148320, Infinity];
if (incomeTaxMonthlyBrackets.length !== incomeTaxRates.length) {
  console.error("Check the arrays");
}
if (incomeTaxAnnualBrackets.length !==  incomeTaxRates.length){
  console.error("Check the arrays");
}
const nacionalEnsurementRates = [0.0597, 0.1783];
const nacionalEnsurementMonthlyBrackets = [6331, 38744];
const nacionalEnsurementAnnualBrackets = [75971, 464928];
const nacionalEnsurementMonthlyLimit = 45075;
const nacionalEnsurementAnnualLimit = 540900;

let incomeTaxBrackets;  
let nationalEnsurementBrackets;
let incomeLimit;
let userIncome;



const calculateBtn = document.getElementById("calculate-btn");
const userInput = document.getElementById("income");
const periodSelect = document.getElementById("period");
const resultTaxText = document.getElementById("resultTax");
const resultSocial_Security = document.getElementById("resultSocialSecutiry");

calculateBtn.addEventListener("click", calculateAll);
userInput.addEventListener("keyup", clickByEnter);
periodSelect.addEventListener("change", periodChange);


function clickByEnter(e){
  e.preventDefault();
  if(e.keyCode == 13){
    console.log("Enter clicked");
    calculateBtn.click();
  }
}

function periodChange(){
  if(periodSelect.value == "annual"){
    console.log("period is set to annual");
    incomeTaxBrackets = incomeTaxAnnualBrackets;
    nationalEnsurementBrackets = nacionalEnsurementAnnualBrackets;
    incomeLimit = nacionalEnsurementAnnualLimit;
  }
  else if(periodSelect.value == "monthly"){
    console.log("period is set to monthly");
    incomeTaxBrackets = incomeTaxMonthlyBrackets;
    nationalEnsurementBrackets = nacionalEnsurementMonthlyBrackets;
    incomeLimit = nacionalEnsurementMonthlyLimit;
  } 
}

function calculateAll(){
  userIncome = userInput.value;
  
  if(periodSelect.value == "choose"){
    alert("Please choose a period first");
    return;
  }
  else if(userIncome <= 0){
    alert("Please enter a valid value");
    return;
  }
      console.log("btn pressed");
      const incomeTaxResult = calculateTaxes(userIncome, incomeTaxRates, incomeTaxBrackets );
      resultTaxText.innerText = incomeTaxResult + " ILS";
      console.log(`Income tax to pay is ${incomeTaxResult}`);
      const nationalEnsurenceResult =  calculateTaxes(userIncome, nacionalEnsurementRates, nationalEnsurementBrackets, incomeLimit);
      resultSocial_Security.innerText = nationalEnsurenceResult + " ILS";
      console.log(`National Ensurement to pay is ${nationalEnsurenceResult}`);     
}

function calculateTaxes(income, rates, brackets, limit) {
  let totalTax = 0;
  let differenceFormBracket;

  if (typeof limit !== "undefined") {
    if (income > limit) {
      income = limit;
    }
  }

  for (let i = 0; i < rates.length; i++) {
    differenceFormBracket = income - brackets[i];
    if (differenceFormBracket <= 0) {
      totalTax += income * rates[i];
      break;
    }
    totalTax += brackets[i] * rates[i];
    income = differenceFormBracket;
  }
  totalTax = (totalTax.toFixed(1));
  return totalTax;
}