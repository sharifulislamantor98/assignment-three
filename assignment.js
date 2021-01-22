

function kilometerToMeter(kilometer){
    var meter =  kilometer * 1000;
    return meter;
}
var dhakaToKishoregonj = kilometerToMeter(107);
console.log(dhakaToKishoregonj);
var mymensinghToKishoregonj = kilometerToMeter(95);
console.log(mymensinghToKishoregonj);
var dhakaToSylhet = kilometerToMeter(320);
console.log(dhakaToSylhet);
//find out and add the warning when distance is negative


function hotelCost(days){
var rent = 0;
if(days <= 10){
    rent = days * 100;
}
else if(days <= 20) {
    var firstStay = 10 * 100;
    var remainDays = days - 10;
    var secondStay = remainDays * 80;
    rent = firstStay + secondStay;
}
else{
    var firstStay = 10 * 100;
    var secondStay = 10 * 80;
    var remainDays = days - 20;
    var thirdStay = remainDays * 50;
    rent = firstStay + secondStay + thirdStay;
}
return rent;
}
var totalRent = hotelCost(40);
console.log(totalRent);





function budgetCalculator(prices){
    var sum = 0;
    for( var i = 0; i < prices.length; i ++){
    var product = prices[i];
    sum = sum + product;
    }
    return sum * 5;
}
var prices = [50, 100, 500];
var result = budgetCalculator(prices);
console.log("total product cost", result);
//find out the result where each product quantity is different


