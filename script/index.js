// Skapa en function som heter valfritt namn och skapa en användare med hjälp av let & prompt
function theGame (){
  let spelare1 = prompt("Sten sax eller påse");

  // skapa en slumpgenerator för datorns val
  let val = ["sten", "sax", "påse"];
  let spelare2 = val[Math.floor(Math.random() * 3)];

  
  console.log("Du valde: " + spelare1);
  console.log("Datorn valde: " + spelare2);

// skapa dom olika valen och kör console.log med svar om vinst
if (spelare1 === spelare2) {
    console.log("Ingen vann, försök igen")
  } else if (
    (spelare1 === "sten" && spelare2 === "sax") ||
    (spelare1 === "sax" && spelare2 === "påse") ||
    (spelare1 === "påse" && spelare2 === "sten")
  ) {
    console.log("DU vinner, grymt jobbat")
  } else {
    console.log("Du förlorade, kör igen")
  }



}
// anropa function för att få den att köras
theGame()