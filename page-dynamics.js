
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

var firstBracket;
var secondBracket;
var thirdBracket;
var fourthBracket;
var fifthBracket;
var sixthBracket;
var taxValue;

var resultTaxText = document.getElementById("resultTax");
var resultSocial_Security = document.getElementById("resultSocialSecutiry");



var calculateButtonTaX = document.getElementById("taxButton");
var inputIncome = document.getElementById("inputIncomeForTaxes");


//PERIOD SELECTION FUNCTION        
var periodSelect = document.getElementById("period");
periodSelect.addEventListener("change", changeValues);

function changeValues(){    
        if(periodSelect.value == "choose"){
                console.log("choose a period first");
                  
        }
        else if(periodSelect.value == "monthly"){
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

        console.log(periodSelect.value);
        
}
                


//ENTER ON CLICK FUNCTION
inputIncome.addEventListener("keyup", clickByEnter);
calculateButtonTaX.addEventListener("click", calculateTax);

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
        }
                   
                taxValue = (taxValue.toFixed(1));
                resultTaxText.innerText = "Your taxes to pay are " + taxValue + " ILS";    
}



                