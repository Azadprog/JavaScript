function inArray (arrayToCheck, value){
    for (var i = 0 ; i < arrayToCheck.length; i++){
        if (arrayToCheck[i] === value) {
    return true;

        }

    }
 return false;
}
var randArray = [1,2,3,4,5];
var name = "This is a Sentence "
document.write("In Array :", inArray(randArray, "3") + "<br />");