var myVar;
let myLet;
const myConst = 3.1416;


console.log(`myVar: ${myVar}, mylet: ${myLet}, myConst: ${myConst}, HoistedVariable: ${hoistedVariable}`)
// Hoisting

var hoistedVariable = 25 //Var Hoisted


//Local Scope!

if (typeof myVar === "undefined"){//Execution Context
        console.log(myLet);
};