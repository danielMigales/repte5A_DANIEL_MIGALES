var personas = ["ataulfo", "teodorico", "atanagildo", "leogivildo", "sisebuto", "recesvinto", "ervigio"];
var fechas = ["410-415", "418-451", "555-567", "571-586", "612-621", "653-672", "680-687"];
// Següent línia si fas el bonus track
var reis_afegits = [];
//variable contador
var contadorReis = 0;
window.onload = inici;
function inici() {
   // Posar el codi inicial i l'event onclick   
   //punt 2: codi inicial dins d'una funció
   carregarReis();
   //punt 3: event del botó
   document.querySelector("#bt").onclick = seguentRei;
}
//funcio del punt 2:
function carregarReis() {
   //punt 2a:
   document.getElementById("imatge").src = ("img/" + personas[0] + ".png");
   //punt 2b:
   document.getElementById("nombre").innerHTML = "Rey " + personas[0].substr(0, 1).toUpperCase() + personas[0].substr(1).toLowerCase();
   //punt 2c:
   document.getElementById("reinado").innerHTML = fechas[0];
}
//funció del punt 3:
function seguentRei() {
   //punt 5: 3e S’afegeix el valor al final del nou array “reis_afegits” . Ho he de posar abans del contador++ perque sino no m'agafa el primer valor de l'array. 
   reis_afegits.push(personas[contadorReis]);
   //augment del contador cada vegada que s'avança
   contadorReis++;
   //punt 4: Si el valor del rei es igual o menor del total de elements del array es mostran les dades que corresponen
   if (contadorReis <= personas.length - 1) {
      document.getElementById("imatge").src = ("img/" + personas[contadorReis] + ".png");
      //en aquesta linia encara que es repeteix codi, he posat la part per posar majuscules al nom
      document.getElementById("nombre").innerHTML = "Rei " + personas[contadorReis].substr(0, 1).toUpperCase() + personas[contadorReis].substr(1).toLowerCase();
      document.getElementById("reinado").innerHTML = fechas[contadorReis];
   }
   else { //en cas contrari s'oculta el div
      //punt 4a:
      document.querySelector("#personalidad").style.display = "none";
      document.querySelector("#bt").style.display = "none";
   }
   //punt 5: 3d : s'afegeix la imatge al final del div invitados
   document.querySelector("#invitados").innerHTML += '<img src="img/' + personas[contadorReis - 1] + '.png">';
   //punt 5: 3f: consulta de la quantitat de valors de l'array reis_efegits i es coloca al div cantidad
   document.querySelector("#cantidad").innerHTML = reis_afegits.length;
}


