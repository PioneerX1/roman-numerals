

var inputNumber = 3999;
var carryOver = 3999;
var arrayOfTens = [];
var count = 0;

for(var i=1000; i>=1; i/=10) {
var quotient = (Math.floor(carryOver/i))*i;
  if (quotient >= 1) {
  arrayOfTens[count] = quotient;
    alert(arrayOfTens[count]);
    carryOver = carryOver%i;
    count++;
  }
}
//alert(arrayOfTens.toString());

var arrayOfRoman = [];
var ones = "";
var fives = "";
var tens = "";

for (var i=0; i < arrayOfTens.length; i++) {
  //figure out which tens spot your at, assign vars ones, fives, and tens to proper numeral
  //send the base10 number to a function that concatenates the numeral variables together
  if (arrayOfTens[i] >= 1000) {
    var sendNumber = arrayOfTens[i]/1000;
    ones = "M";
    //call createRoman function -> deliver sendNumber and i variables
    alert(ones + fives + tens);
  } else if (arrayOfTens[i] >= 100) {
    var sendNumber = arrayOfTens[i]/100;
    ones = "C";
    fives = "D";
    tens = "M";
    alert(ones + fives + tens);
  } else if (arrayOfTens[i] >= 10) {
    var sendNumber = arrayOfTens[i]/10;
    ones = "X";
    fives = "L";
    tens = "C";
    alert(ones + fives + tens);
  } else if (arrayOfTens[i] >= 10) {
    var sendNumber = arrayOfTens[i]/10;
    ones = "X";
    fives = "L";
    tens = "C";
    alert(ones + fives + tens);
  } else if (arrayOfTens[i] >= 1) {
    var sendNumber = arrayOfTens[i]/10;
    ones = "I";
    fives = "V";
    tens = "X";
    alert(ones + fives + tens);
  }
}

function createRoman (var base10; var i) {

}
