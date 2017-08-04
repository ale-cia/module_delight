//Pulls in randomNumber function
var randomNumber = require('./randomNumber.js');
var numeral = require('numeral');

function convertToDollars(num){
  var string = numeral(num).format('$0,0.00');
  //num will be random number
  return string;
}

// convertToDollars(rnum);

module.exports =  {
  convertToDollars: convertToDollars
}