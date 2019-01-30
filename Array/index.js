var tomSmith = ["Tom Smith" , "123 Main" , 120.50];
document.write("1st Index" ,  tomSmith[0], "<br />");

tomSmith[3] = "ettellerannet@.com"; // legger verdi i index 3 i  array liste tomSmith

tomSmith.splice(2, 1 ,"Pittsburgh", "PA" );  // endre verdi i index 2 i array liste tomSmith 


tomSmith.splice(4,1);

document.write ("Array : " , tomSmith.valueOf(), "<br />");
document.write("Array : " , tomSmith.join(" , "), "<br />");
delete tomSmith[3];
tomSmith.sort();


var numbers = [4,3,9,1,20,43];
numbers.sort(function(x,y) { return x-y });
document.write("Num Array : " , numbers.toString(), "<br />");

var combinedArray = numbers.concat(tomSmith);

tomSmith.pop(); // fjerner den sitte index verdien i  et  Array Liste

tomSmith.push("Hello World");  // legger til verdi helt lengts bak i et array liste siste plass
tomSmith.shift(); // fjerner den første verdien  i et array listen 
tomSmith.unshift("Tom Smith"); //legger til verid helt fremst i et array liste 

for ( var i=0; i<tomSmith.length; i++) { 
document.write(tomSmith[i], "<br />");

}
