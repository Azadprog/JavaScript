var something = prompt("Hva heter du?");


if(something == "Asad"){
   console.log("Du er kul"); 
} else if(Number.isInteger(parseInt(something))){
    console.log("Error");
}else{
  console.log("IKKE NOE");
}
