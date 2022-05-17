
var firstBracketRate = 0.1;
var secondBracketRate = 0.14;
var thirdBracketRate = 0.2;
var fourthBracketRate = 0.31;
var fifthBracketRate = 0.35;
var sixthBracketRate = 0.47;
var seventhBracketRate = 0.5;

var firstBracket_treshold = [6450, 77400];                
var secondBracket_treshold = [9240, 110880]; 
var thirdBracket_treshold = [14840, 178080]; 
var fourthBracket_treshold = [20620, 247440];
var fifthBracket_treshold = [42910, 514920];
var sixthBracket_treshold = [55270, 663240];

var firstBracket_mount = [6450, 77400];
var secondBracket_mount =  [2790, 33480];
var thirdBracket_mount =  [5600, 67200];
var fourthBracket_mount =  [5780, 69360];
var fifthBracket_mount =  [22290, 267480];
var sixthBracket_mount =  [12360, 148320];

var firstBracket_taxCalc = firstBracket_mount * firstBracketRate;
var secondBracket_taxCalc = secondBracket_mount * secondBracketRate;
var thirdBracket_taxcCalc = thirdBracket_mount * thirdBracketRate;
var fourthBracket_taxCalc = fourthBracket_mount * fourthBracketRate;
var fifthBracket_taxCalc = fifthBracket_mount * fifthBracketRate;
var sixthBracket_taxCalc = sixthBracket_mount * sixthBracketRate;
var taxValue;

var resultTaxText = document.getElementById("resultTax");
var resultSocial_Security = document.getElementById("resultSocialSecutiry");



var calculateButtonTaX = document.getElementById("taxButton");
var inputIncome = document.getElementById("inputIncomeForTaxes");

inputIncome.addEventListener("keyup", clickByEnter);
calculateButtonTaX.addEventListener("click", calculateTax);




//ENTER ON CLICK FUNCTION
function clickByEnter(e){
        e.preventDefault();
        if(e.keyCode == 13){
                calculateButtonTaX.click();
        }
}

//FUNCTION FOR THE TAX CALCULATOR
function calculateTax(){
    var incomeValue = inputIncome.value;
    
        switch(true){
                case incomeValue == "":
                        alert("Value must be filled");            
                        break;
                case incomeValue >= 0 && incomeValue <= firstBracket_mount:
                        taxValue = incomeValue * firstBracketRate;       
                        break;
                case incomeValue > firstBracket_treshold && incomeValue <= secondBracket_treshold:
                         var bracketDifference = incomeValue - firstBracket_treshold;
                        taxValue = firstBracket_taxCalc + (bracketDifference * secondBracketRate);
                        break;
                case incomeValue > secondBracket_treshold && incomeValue <= thirdBracket_treshold:
                         var bracketDifference = incomeValue - secondBracket_treshold;
                         taxValue = firstBracket_taxCalc + secondBracket_taxCalc + (bracketDifference * thirdBracketRate);
                        break;
                case incomeValue > thirdBracket_treshold && incomeValue <= fourthBracket_treshold:
                         var bracketDifference = incomeValue - thirdBracket_treshold;
                         taxValue = firstBracket_taxCalc + secondBracket_taxCalc + thirdBracket_taxcCalc + (bracketDifference * fourthBracketRate);
                        break;
                case incomeValue > fourthBracket_treshold && incomeValue <= fifthBracket_treshold:
                         var bracketDifference = incomeValue - fourthBracket_treshold;
                        taxValue = firstBracket_taxCalc + secondBracket_taxCalc + thirdBracket_taxcCalc + fourthBracket_taxCalc + (bracketDifference * fifthBracketRate);
                        break;
                case incomeValue > fifthBracket_treshold && incomeValue <= sixthBracket_treshold:
                         var bracketDifference = incomeValue - fifthBracket_treshold;
                         taxValue = firstBracket_taxCalc + secondBracket_taxCalc + thirdBracket_taxcCalc + fourthBracket_taxCalc + fifthBracket_taxCalc + (bracketDifference * sixthBracketRate);
                        break;
                case incomeValue > sixthBracket_treshold:
                         var bracketDifference = incomeValue - sixthBracket_treshold;
                         taxValue = firstBracket_taxCalc + secondBracket_taxCalc + thirdBracket_taxcCalc + fourthBracket_taxCalc + fifthBracket_taxCalc + sixthBracket_taxCalc + (bracketDifference * seventhBracketRate);
                        break;
                default:
                            alert("Invalid Value");
        }
                   
                taxValue = (taxValue.toFixed(1));
                resultTaxText.innerText = "Your taxes to pay are " + taxValue + " ILS";    
}