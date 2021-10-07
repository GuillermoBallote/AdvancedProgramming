var myInt = 24;
var myFloat = 3.1416;
var myString = "Memo";
var myNull = null;


// Typecasting imp.....exp using global function
console.log(typeof myFloat);
myFloat = String(myFloat)
console.log(typeof String(myFloat));

myString = Boolean(myString);
console.log(myString);

//False values
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean());
console.log(Boolean(undefined));
console.log(Boolean(myNull));
console.log(Boolean(false));

console.log(typeof(myNull));
//True Values
console.log(Boolean("Memo"));
console.log(Boolean(5));
console.log(Boolean({}));
console.log(Boolean([]));

console.log( isNAN( Number("5x")));

//TypeCasting Explicit Methods

console.log( Number.parseInt(myFloat));
console.log( Number.parseFloat(myString));

//TypeCasting Coersion Implicit

var result = "Hola" + "Mundo";
var resultnumberstring = 2 + "Hola";
console.log(resultnumberstring);

