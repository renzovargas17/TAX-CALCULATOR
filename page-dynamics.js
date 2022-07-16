var incomeTaxRates = [0.1, 0.14, 0.2, 0.31, 0.35, 0.47, 0.5];
var incomeTaxMonthlyBrackets = [6450, 2790, 5600, 5780, 22290, 12360, Infinity];
var incomeTaxAnnualBrackets = [77400, 33480, 67200, 69360, 267480, 148320, Infinity];
if (incomeTaxMonthlyBrackets.length !== incomeTaxRates.length) {
  console.error("Check the arrays");
}
if (incomeTaxAnnualBrackets.length !==  incomeTaxRates.length){
  console.error("Check the arrays");
}
var nacionalEnsurementRates = [0.0597, 0.1783];
var nacionalEnsurementMonthlyBrackets = [6331, 38744];
var nacionalEnsurementAnnualBrackets = [75971, 464928];
var nacionalEnsurementMonthlyLimit = 45075;
var nacionalEnsurementMonthlyLimit = 540245;

function calculateTax(income, rates, brackets, limit) {
  var totalTax = 0;
  var differenceFormBracket;

  if (typeof limit !== "undefined") {
    if (income > limit) {
      income = limit;
    }
  }

  for (var i = 0; i < rates.length; i++) {
    differenceFormBracket = income - brackets[i];
    if (differenceFormBracket <= 0) {
      totalTax += income * rates[i];
      break;
    }
    totalTax += brackets[i] * rates[i];
    income = differenceFormBracket;
  }
  return totalTax;
}
console.log(
  calculateTax(1000000, incomeTaxRates, incomeTaxAnnualBrackets)
);
console.log(
  calculateTax(
    29000,
    nacionalEnsurementRates,
    nacionalEnsurementMonthlyBrackets,
    nacionalEnsurementMonthlyLimit
  )
);
console.log(
  calculateTax(
    50000,
    nacionalEnsurementRates,
    nacionalEnsurementMonthlyBrackets,
    nacionalEnsurementMonthlyLimit
  )
);
