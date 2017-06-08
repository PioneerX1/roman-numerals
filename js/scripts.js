

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
    createRoman(sendNumber, i);
  } else if (arrayOfTens[i] >= 100) {
    var sendNumber = arrayOfTens[i]/100;
    ones = "C";
    fives = "D";
    tens = "M";
    createRoman(sendNumber, i);
  } else if (arrayOfTens[i] >= 10) {
    var sendNumber = arrayOfTens[i]/10;
    ones = "X";
    fives = "L";
    tens = "C";
    createRoman(sendNumber, i);
  } else if (arrayOfTens[i] >= 10) {
    var sendNumber = arrayOfTens[i]/10;
    ones = "X";
    fives = "L";
    tens = "C";
    createRoman(sendNumber, i);
  } else if (arrayOfTens[i] >= 1) {
    var sendNumber = arrayOfTens[i]/1;
    ones = "I";
    fives = "V";
    tens = "X";
    createRoman(sendNumber, i);
  }
}

function createRoman(base10, i) {
  var romanNumeral = "";
  if (base10 === 1) {
    romanNumeral = ones;
  } else if (base10 === 2) {
    romanNumeral = ones + ones;
  } else if (base10 === 3) {
    romanNumeral = ones + ones + ones;
  } else if (base10 === 4) {
    romanNumeral = ones + fives;
  } else if (base10 === 5) {
    romanNumeral = fives;
  } else if (base10 === 6) {
    romanNumeral = fives + ones;
  } else if (base10 === 7) {
    romanNumeral = fives + ones + ones;
  } else if (base10 === 8) {
    romanNumeral = fives + ones + ones + ones;
  } else if (base10 === 9) {
    romanNumeral = ones + tens;
  }
  //alert(romanNumeral + " at index " + i);
  arrayOfRoman[i] = romanNumeral;
}

alert(arrayOfRoman.toString());
