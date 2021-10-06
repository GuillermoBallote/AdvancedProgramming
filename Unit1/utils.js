
var module = "Este es mi modulo"

export default class myUtils{
        constructor(){

        };
        validateWord(variable, palabra){
            if(variable.includes(palabra)){
                return true;
            };
            return false;
        }
}