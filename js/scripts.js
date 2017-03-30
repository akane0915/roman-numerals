//Business Logic

// Alert if userInput >= 4000
var inputTooBig = function(userInput) {
  if(parseInt(userInput) > 3999) {
    return "that is not valid input!";
  }
};


// Function for one digit input to return...
var inputOneDigit = function(inputArray){
  if (inputArray[0] === "2"){
    return "II";
  };
}

// Breaks userInput string into an array, determines length of array.  If array length is 1, return the value from function inputOneDigit.
var arrayLength = function (userInput) {
  var inputArray =  userInput.split("");
  if(inputArray.length === 1){
    return inputOneDigit(inputArray);
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
