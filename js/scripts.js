//Business Logic
var romans1to9 = ["I","II","III","IV","V","VI","VII","VIII","IX"];
var romansTensPlace = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];

// Alert if userInput >= 4000
var inputTooBig = function(userInput) {
  if(parseInt(userInput) > 3999) {
    return "that is not valid input!";
  }
};


// Function for one digit input to return the corresponding roman numeral
var inputOneDigit = function(inputArray){
  for(i = 0; i <= romans1to9.length; i++){
    if(inputArray[0] === i.toString()){
      return romans1to9[i - 1];
    }
  }
};

// Function for two digit input to return the corresponding roman numeral
var inputTwoDigit = function(inputArray){
  for(i = 0; i <= romansTensPlace.length; i++){
    if(inputArray[0] === i.toString()){
      return romansTensPlace[i - 1];
    }
  }
};

// Breaks userInput string into an array, determines length of array.  If array length is 1 or 2, return the value from function inputOneDigit and inputTwoDigit.
var arrayLength = function (userInput) {
  var inputArray =  userInput.split("");
  if(inputArray.length === 1){
    return inputOneDigit(inputArray);
  }
  else if(inputArray.length === 2){
    return inputTwoDigit(inputArray);
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
