function times2 (num) {
    var var2 = 2 ;
    
    return num * var2 ;

};

 function times3(num) {
    return num * 3;


 };
 function multiply (func, num) {
    return func(num);
    
 };

 //document.write("var2" , var2, "<br />");
document.write("2 * 15  =", multiply(times2, 15), "<br />");
document.write("3 * 15  =", multiply(times3, 15), "<br />");


/* Function Expression */

var triple = function(num) {
    return num * 3;
}
document.write("3 * 45  =", multiply(triple, 45), "<br />");


/* */

function getSum() {

  var sum = 0 ;
  for(var i = 0 ; i < arguments.length; i++ ){
    sum += arguments[i];


  }  
  return sum;


}

document.write("Sum =", getSum(1,2,3,4,5,6) , "<br /> ");


function times5 (theArray) {
    
    var newArray = [];
    for(var i = 0 ; i < theArray.length ; i++) {

        newArray.push(theArray[i] * 2);
    }
    return newArray;
}
document.write("Array Double =", times5([1,2,3,4,5]).toString(), "<br /> ");

/* Recurcive Function*/

function factorial (num) {

    if (num <= 1 ) {
        return 1;

    }else  {
        return num * factorial(num-1);
    }

}
document.write("Factorial of 4  =", factorial(4), "<br />");

// 1st: num = 4 * factorial(3) = 4 * 6 = 24
// 2st: num = 3 * factorial(2) = 3 * 2 = 6
// 3st: num = 2 * factorial(1) = 2 * 1 = 2