/*
  Avansert oppgave:
  I denne oppgaven skal du lage en enkel handleliste.
  Brukeren av handlelisten må kunne legge inn varer i handlelisten sin.
  
  Spesifikasjon/krav til oppgaven:
  1) Du må bruke prompt() for å få input fra brukeren.
  2) Brukeren må kunne skrive inn mer enn én vare, og varenavnet må kunne inneholde mellomrom.
  3) Sluttresultatet skal presenteres i et array, hvor hver vare har blitt et eget element i arrayet.
  Med andre ord, legger brukeren inn melk,cola,brød,boller, så skal arrayet se slik ut:
  ["melk", "cola", "brød", "boller"];
  
  4) Hvis du har lyst på en utfordring, prøv å finn en måte å sortere arrayet alfabetisk, med andre ord bør arrayet som vist i punkt 3) heller være sortert slik:
  ["boller", "brød", "cola", "melk"]
*/  
var handleliste = {
    
myList : prompt("Hva skal det være med i handle lista din?").split(",")
 

  
  
    
};

handleliste.myList.sort();


console.log(handleliste["myList"] );