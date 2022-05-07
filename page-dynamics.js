
var firstBracketRate = 0.1;
var secondBracketRate = 0.14;
var thirdBracketRate = 0.2;
var fourthBracketRate = 0.31;
var fifthBracketRate = 0.35;
var sixthBracketRate = 0.47;
var seventhBracketRate = 0.5;

var firstBracket_treshold = 6450; //
var secondBracket_treshold = 9240; // difference = 2790
var thirdBracket_treshold = 14840; // difference = 5600
var fourthBracket_treshold = 20620; // difference = 5780
var fifthBracket_treshold = 42910; // difference = 22290
var sixthBracket_treshold = 55270; //difference = 12360

var firstBracket_mount = 6450;
var secondBracket_mount = 2790;
var thirdBracket_mount = 5600;
var fourthBracket_mount = 5780;
var fifthBracket_mount = 22290;
var sixthBracket_mount = 12360;

var firstBracket_taxCalc = firstBracket_mount * firstBracketRate;
var secondBracket_taxCalc = secondBracket_mount * secondBracketRate;
var thirdBracket_taxcCalc = thirdBracket_mount * thirdBracketRate;
var fourthBracket_taxCalc = fourthBracket_mount * fourthBracketRate;
var fifthBracket_taxCalc = fifthBracket_mount * fifthBracketRate;
var sixthBracket_taxCalc = sixthBracket_mount * sixthBracketRate;



var taxValue;
var resultText = document.getElementById("resultTax");


var calculateButttonTaX = document.getElementById("taxButton");
calculateButttonTaX.addEventListener("click", calculateTax);



//FUNCTION FOR THE TAX CALCULATOR
function calculateTax(){
    var inputIncome = document.getElementById("inputIncomeForTaxes");
    var incomeValue = inputIncome.value;
    

    if(incomeValue >= 0 && incomeValue <= firstBracket_mount){
            taxValue = incomeValue * firstBracketRate;
            taxValue = (taxValue.toFixed(1));
            
    }
    else if(incomeValue > firstBracket_treshold && incomeValue <= secondBracket_treshold){
            var bracketDifference = incomeValue - firstBracket_treshold;
            taxValue = firstBracket_taxCalc + (bracketDifference * secondBracketRate);
            taxValue = (taxValue.toFixed(1));
        
    }
    else if(incomeValue > secondBracket_treshold && incomeValue <= thirdBracket_treshold){
            var bracketDifference = incomeValue - secondBracket_treshold;
            taxValue = firstBracket_taxCalc + secondBracket_taxCalc + (bracketDifference * thirdBracketRate);
            taxValue = (taxValue.toFixed(1));
    }
    else if(incomeValue > thirdBracket_treshold && incomeValue <= fourthBracket_treshold){
            var bracketDifference = incomeValue - thirdBracket_treshold;
            taxValue = firstBracket_taxCalc + secondBracket_taxCalc + thirdBracket_taxcCalc + (bracketDifference * fourthBracketRate);
            taxValue = (taxValue.toFixed(1));
    }
    else if(incomeValue > fourthBracket_treshold && incomeValue <= fifthBracket_treshold){
            var bracketDifference = incomeValue - fourthBracket_treshold;
            taxValue = firstBracket_taxCalc + secondBracket_taxCalc + thirdBracket_taxcCalc + fourthBracket_taxCalc + (bracketDifference * fifthBracketRate);
            taxValue = (taxValue.toFixed(1));
    }
    else if(incomeValue > fifthBracket_treshold && incomeValue <= sixthBracket_treshold){
            var bracketDifference = incomeValue - fifthBracket_treshold;
            taxValue = firstBracket_taxCalc + secondBracket_taxCalc + thirdBracket_taxcCalc + fourthBracket_taxCalc + fifthBracket_taxCalc + (bracketDifference * sixthBracketRate);
            taxValue = (taxValue.toFixed(1));
    }
    else if(incomeValue > sixthBracket_treshold){
            var bracketDifference = incomeValue - sixthBracket_treshold;
            taxValue = firstBracket_taxCalc + secondBracket_taxCalc + thirdBracket_taxcCalc + fourthBracket_taxCalc + fifthBracket_taxCalc + sixthBracket_taxCalc + (bracketDifference * seventhBracketRate);
            taxValue = (taxValue.toFixed(1));
    }
    else{}
    resultText.innerText = "Your taxes to pay are " + taxValue + " ILS";
}





















