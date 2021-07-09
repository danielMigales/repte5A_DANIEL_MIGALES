var personas = ["ataulfo", "teodorico", "atanagildo", "leogivildo", "sisebuto", "recesvinto", "ervigio"];
var fechas = ["410-415", "418-451", "555-567", "571-586", "612-621", "653-672", "680-687"];

// Següent línia si fas el bonus track
var reis_afegits = [];

//variable contador
var contadorReis = 0;

window.onload = inici;

function inici() {
   // Posar el codi inicial i l'event onclick   

   //punt 2a:
   document.getElementById("imatge").src = ("img/" + personas[0] + ".png");
   //punt 2b:
   document.getElementById("nombre").innerHTML = "Rey " + personas[0];
   //punt 2c:
   document.getElementById("reinado").innerHTML = fechas[0];
   //punt 3:
   document.querySelector("#bt").onclick = seguentRei;


}

//funció del punt 3:
function seguentRei() {
   //augment del contador cada vegada que s'avança
   contadorReis++;

   //punt 4: Si el valor del rei es igual o menor del total de elements del array es mostran les dades que corresponen
   if (contadorReis <= personas.length - 1) {
      document.getElementById("imatge").src = ("img/" + personas[contadorReis] + ".png");
      document.getElementById("nombre").innerHTML = "Rei " + personas[contadorReis];
      document.getElementById("reinado").innerHTML = fechas[contadorReis];
   }
   else { //en cas contrari s'oculta el div
      //punt 4a:
      document.querySelector("#personalidad").style.display = "none";
      document.querySelector("#bt").style.display = "none";
   }

   document.getElementById("invitados").innerHTML += '<img src="img/' + personas[contadorReis -1] + '.png">';


}

