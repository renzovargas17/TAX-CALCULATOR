

/*//VALUES
var firstBracketRate;
var secondBracketRate;
var thirdBracketRate;
var fourthBracketRate;
var fifthBracketRate;
var sixthBracketRate;
var seventhBracketRate;

var firstBracket_treshold;                
var secondBracket_treshold;
var thirdBracket_treshold; 
var fourthBracket_treshold;
var fifthBracket_treshold;
var sixthBracket_treshold;

var firstBracket_mount;
var secondBracket_mount;
var thirdBracket_mount;
var fourthBracket_mount;
var fifthBracket_mount;
var sixthBracket_mount;

var firstBracket;
var secondBracket;
var thirdBracket;
var fourthBracket;
var fifthBracket;
var sixthBracket;
var taxValue;
var socialValue;

var resultTaxText = document.getElementById("resultTax");
var resultSocial_Security = document.getElementById("resultSocialSecutiry");

var calculateButtonTaX = document.getElementById("taxButton");
var inputIncome = document.getElementById("inputIncomeForTaxes");

//EVENT LISTENER FOR THE TWO FUNCTIONS
inputIncome.addEventListener("keyup", clickByEnter);
calculateButtonTaX.addEventListener("click", calculateALL);

//EVENT LISTENER FOR PERIOD CHANGE       
var periodSelect = document.getElementById("period");
periodSelect.addEventListener("change", changeAllValues);

// CLICK ON ENTER EVENT FUNCIOTN
function clickByEnter(e){
        e.preventDefault();
        if(e.keyCode == 13){
                calculateButtonTaX.click();
        }
}
//INICIALIZE BOTH FUNCTIONS
function changeAllValues(){
        changeValues_Taxes();
        changeValues_SocialSecurity();
}
//INICIALIZE BOTH FUNCTIONS
function calculateALL(){
        calculateTax();
        calculateSocial();
}

//CHANGE VALUES (ANNUAL/MONTHLY) FOR calculateTax()
function changeValues_Taxes(){
        firstBracketRate = 0.1;
        secondBracketRate = 0.14;
        thirdBracketRate = 0.2;
        fourthBracketRate = 0.31;
        fifthBracketRate = 0.35;
        sixthBracketRate = 0.47;
        seventhBracketRate = 0.5;    
        firstBracket_treshold = [6450, 77400];                
        secondBracket_treshold = [9240, 110880]; 
        thirdBracket_treshold = [14840, 178080]; 
        fourthBracket_treshold = [20620, 247440];
        fifthBracket_treshold = [42910, 514920];
        sixthBracket_treshold = [55270, 663240];

        firstBracket_mount = [6450, 77400];
        secondBracket_mount =  [2790, 33480];
        thirdBracket_mount =  [5600, 67200];
        fourthBracket_mount =  [5780, 69360];
        fifthBracket_mount =  [22290, 267480];
        sixthBracket_mount =  [12360, 148320];
        if(periodSelect.value == "monthly"){
                firstBracket_mount = firstBracket_mount[0];
                secondBracket_mount = secondBracket_mount[0];
                thirdBracket_mount = thirdBracket_mount[0];
                fourthBracket_mount = fourthBracket_mount[0];
                fifthBracket_mount = fifthBracket_mount[0];
                sixthBracket_mount = sixthBracket_mount[0];

                firstBracket_treshold = firstBracket_treshold[0];
                secondBracket_treshold = secondBracket_treshold[0];
                thirdBracket_treshold = thirdBracket_treshold[0];
                fourthBracket_treshold =  fourthBracket_treshold[0];
                fifthBracket_treshold = fifthBracket_treshold[0];
                sixthBracket_treshold = sixthBracket_treshold[0];
                
        }       
        else if(periodSelect.value == "annual"){ 
                firstBracket_mount = firstBracket_mount[1];
                secondBracket_mount = secondBracket_mount[1];
                thirdBracket_mount = thirdBracket_mount[1];
                fourthBracket_mount = fourthBracket_mount[1];
                fifthBracket_mount = fifthBracket_mount[1];
                sixthBracket_mount = sixthBracket_mount[1];

                firstBracket_treshold = firstBracket_treshold[1];
                secondBracket_treshold = secondBracket_treshold[1];
                thirdBracket_treshold = thirdBracket_treshold[1];
                fourthBracket_treshold = fourthBracket_treshold[1];
                fifthBracket_treshold = fifthBracket_treshold[1];
                sixthBracket_treshold = sixthBracket_treshold[1];
        }
        
        firstBracket = firstBracket_mount * firstBracketRate;
        secondBracket = secondBracket_mount * secondBracketRate;
        thirdBracket = thirdBracket_mount * thirdBracketRate;
        fourthBracket = fourthBracket_mount * fourthBracketRate;
        fifthBracket = fifthBracket_mount * fifthBracketRate;
        sixthBracket = sixthBracket_mount * sixthBracketRate;
}

//CHANGE VALUES (ANNUAL/MONTHLY) FOR calculateSocial()
function changeValues_SocialSecurity(){
        firstBracketRate = 0.0597;
        secondBrafirstBracketRate = 0.1783;
        firstBracket_treshold = [6331, 75972];
        secondBracket_treshold = [45075, 540900];
        firstBracket_mount = [6331, 75972];
        secondBracket_mount = [38744, 464928];
        if(periodSelect.value == "monthly"){
                firstBracket_mount = firstBracket_mount[0];
                secondBracket_mount = secondBracket_mount[0];
                firstBracket_treshold = firstBracket_treshold[0];
                secondBracket_treshold = secondBracket_treshold[0];
        }
        else if(periodSelect.value == "annual"){
                firstBracket_mount = firstBracket_mount[1];
                secondBracket_mount = secondBracket_mount[1];
                firstBracket_treshold = firstBracket_treshold[1];
                secondBracket_treshold = secondBracket_treshold[1];
        }
        
        firstBracket = firstBracket_mount * firstBracketRate;
        secondBracket = secondBracket_mount * secondBrafirstBracketRate;
        

}

//CALCULATE INCOME TAX
function calculateTax(){
        
        changeValues_Taxes();
        incomeValue = inputIncome.value;
        if(periodSelect.value == "choose"){
                alert("choose aperiod first");
                return;  
        }
        switch(true){
                case incomeValue == "":
                        alert("Value must be filled");  
                        return;          
                case incomeValue >= 0 && incomeValue <= firstBracket_mount:
                        taxValue = incomeValue * firstBracketRate;       
                        break;
                case incomeValue > firstBracket_treshold && incomeValue <= secondBracket_treshold:
                         var bracketDifference = incomeValue - firstBracket_treshold;
                        taxValue = firstBracket + (bracketDifference * secondBracketRate);
                        break;
                case incomeValue > secondBracket_treshold && incomeValue <= thirdBracket_treshold:
                         var bracketDifference = incomeValue - secondBracket_treshold;
                         taxValue = firstBracket + secondBracket + (bracketDifference * thirdBracketRate);
                        break;
                case incomeValue > thirdBracket_treshold && incomeValue <= fourthBracket_treshold:
                         var bracketDifference = incomeValue - thirdBracket_treshold;
                         taxValue = firstBracket + secondBracket + thirdBracket + (bracketDifference * fourthBracketRate);
                        break;
                case incomeValue > fourthBracket_treshold && incomeValue <= fifthBracket_treshold:
                         var bracketDifference = incomeValue - fourthBracket_treshold;
                        taxValue = firstBracket + secondBracket + thirdBracket + fourthBracket + (bracketDifference * fifthBracketRate);
                        break;
                case incomeValue > fifthBracket_treshold && incomeValue <= sixthBracket_treshold:
                         var bracketDifference = incomeValue - fifthBracket_treshold;
                         taxValue = firstBracket + secondBracket + thirdBracket + fourthBracket + fifthBracket + (bracketDifference * sixthBracketRate);
                        break;
                case incomeValue > sixthBracket_treshold:
                         var bracketDifference = incomeValue - sixthBracket_treshold;
                         taxValue = firstBracket + secondBracket + thirdBracket + fourthBracket + fifthBracket + sixthBracket + (bracketDifference * seventhBracketRate);
                        break;
                default:
                        alert("Invalid Value");
                        return;
        }     
                taxValue = (taxValue.toFixed(1));
                resultTaxText.innerText = taxValue + " ILS";
                console.log(taxValue);
}
//CALCULATE SOCIAL SECURITY TAX
function calculateSocial(){
        changeValues_SocialSecurity();
        incomeValue = inputIncome.value;
        if(periodSelect.value == "choose"){
                resultSocial_Security.innerText = "";
                return;  
        }

        switch(true){
                case incomeValue == "":
                        resultSocial_Security.innerText = "";
                        return;
                case incomeValue >= 0 && incomeValue <= firstBracket_treshold:
                        socialValue = incomeValue * firstBracketRate;
                        break;
                case incomeValue > firstBracket_treshold && incomeValue <= secondBracket_treshold:
                        var bracketDifferenceSocial = incomeValue - firstBracket_treshold;
                        socialValue = firstBracket + (bracketDifferenceSocial * secondBrafirstBracketRate);
                        break;
                case incomeValue > secondBracket_treshold:
                        socialValue = firstBracket + secondBracket;
                        break;
                default:
                        resultSocial_Security.innerText = "";
                        return;
        }
        
        socialValue = (socialValue.toFixed(1));
        resultSocial_Security.innerText = socialValue + " ILS";
        console.log(socialValue);
}*/






//INCOME TAX VALUES
var incomeTax_Rates = [0.1, 0.14, 0.2, 0.31, 0.35, 0.47, 0.5];
var incomeTax_MonthlyBrackets = [6450, 2790, 5600, 5780, 22290, 12360];
var taxesBracketsNumber = 6
var incomeTax_AnnualBrackets = [77400, 33480, 67200, 69360, 267480, 148320];

function calculateincomeTax(income,rates, brakets){
        var totalTax = 0;
        var differenceFormBracket;
        for(var i = 0; i < taxesBracketsNumber; i++){
                differenceFormBracket = income - brakets[i]
                if(differenceFormBracket <= 0){
                 totalTax += income * rates[i];
                 break;
                }
                totalTax += (brakets[i] * rates[i]);
                income = differenceFormBracket; 
        }
        return totalTax;
}

//NACIONAL ENSUREMENT VALUES
firstBracketRate = 0.0597;
secondBrafirstBracketRate = 0.1783;
firstBracket_treshold = [6331, 75972];
secondBracket_treshold = [45075, 540900];
firstBracket_mount = [6331, 75972];
secondBracket_mount = [38744, 464928];





                