//Business Logic
var romans1to9 = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
var romansTensPlace = ["","X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var romansHundredsPlace = ["","C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var romansThousandsPlace = ["","M", "MM", "MMM"];
// Alert if userInput >= 4000
var inputTooBig = function(userInput) {
  if(parseInt(userInput) > 3999) {
    return "that is not valid input!";
  }
};


// Function for one digit input to return the corresponding roman numeral
var inputOneDigit = function(inputArray){
  for(i = 0; i <= romans1to9.length - 1; i++){
    if(inputArray[inputArray.length - 1] === i.toString()){
      return romans1to9[i];
    }
  }
};

// Function for two digit input to return the corresponding roman numeral
var inputTwoDigit = function(inputArray){
  for(i = 0; i <= romansTensPlace.length - 1; i++){
    if(inputArray[inputArray.length - 2] === i.toString()){
      return romansTensPlace[i] + inputOneDigit(inputArray);
    }
  }
};

// Function for three digit input to return the corresponding roman numeral
var inputThreeDigit = function(inputArray){
  for(i = 0; i <= romansHundredsPlace.length - 1; i++){
    if(inputArray[inputArray.length - 3] === i.toString()){
      return romansHundredsPlace[i] + inputTwoDigit(inputArray);
    }
  }
};

// Function for four digit input to return the corresponding roman numeral
var inputFourDigit = function(inputArray){
  for(i = 0; i <= romansThousandsPlace.length - 1; i++){
    if(inputArray[inputArray.length - 4] === i.toString()){
      return romansThousandsPlace[i] + inputThreeDigit(inputArray);
    }
  }
};

// Breaks userInput string into an array, determines length of array.  If array length is 1 - 4, return the value from function inputOneDigit, inputTwoDigit, inputThreeDigit, inputFourDigit.
var arrayLength = function (userInput) {
  var inputArray =  userInput.split("");
  if(inputArray.length === 1){
    return inputOneDigit(inputArray);
  }
  else if(inputArray.length === 2){
    return inputTwoDigit(inputArray);
  } else if(inputArray.length === 3){
    return inputThreeDigit(inputArray);
  } else {
    return inputFourDigit(inputArray);
  }
};


// User Interface Logic
$(function(){
  $("form").submit(function(e){
    e.preventDefault();

    var userInput = $("input").val();

    $(".output").text(inputTooBig(userInput));
    $(".output").text(arrayLength(userInput));
  });
});
