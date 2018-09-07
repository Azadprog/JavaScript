/*
  Under er det noe kode som er skrevet for å hjelpe i gang med oppgaven.
  Oppgaven går ut på å legge til dine favorittbøker i books-arrayet, altså.
  Istedenfor å legge de rett inn i deklarasjonen/definisjonen av variabelen, ta i bruk det du lærte i dagens forelesning om å legge til nye elementer i et array.
  
  Hvis du vil ha mer utfordring, utvid oppgaven til at books-arrayet heller inneholder objekter av litt mer komplisert natur, med ekstra data om bøkene du liker. For eksempel kan hvert objekt inneholde property'ene title, author og releaseYear. 
*/

//var books = ["Nextopia", "TulleBok", "SnusBoka" ]
//books.push("Røykefrittskole");


var BooksInfo = {     // lager et objekt BooksInfo
    
title : ["Nextopaia", "TulleBok", "SnusBoka"],   // lager en  array liste på bok tittel
 
author : ["Jordal Link", "Ingen Navn" , "Suns"],   // lager en array liste på forfattere for bøkene 
releaseYear : [1881 , 2342, 2012] ,                 // liste på utgivelse år 


members: {                                   // her lager jeg  et objekt som heter members 
 totalMebers : 5,                                   // antall medlemer 
 name: ["Asad", "Jhonas", "Daniel" , "Helium", "Heidi"] ,   // Navn på medlemene 
 
 ISBN: [5433463245, 34521456, 35677232,3456721],   // ISBN Nummer på bøkene
  
}
    
};
BooksInfo.title.push("Lær Å Kode");

BooksInfo.members.name.splice(0,1 ,"Unkown");  // sletter og erstatter medlems naven Asad med Unkown
 
BooksInfo.releaseYear.pop();
//console.log(BooksInfo.members["name"]);  // logger ut resultatene 


console.log( BooksInfo, BooksInfo.mebers);

//console.log("Her er info Om bøkene :" + BooksInfo + "Mine Favoritt bøker:" + books);