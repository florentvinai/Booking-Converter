/* fonction appele qd onBlur evenement 
* input : form1
* name : CheckMail(form1)
* output nothing
* recupere les valeurs des emails pour les comparer
* affiche une alerte si Email1 est different de Email2

*/

function CheckMail(form1) {
	
 /* on recup les valeurs des celules du formulaire  */
  var email1 = document.form1.emailone.value;
  var email2 = document.form1.emailtwo.value;

    /* comparaison de semail*/
    if (email1 != email2)
    {
      alert('Emails don\'t match! ' + email1.toString() + ' avec ' + email2.toString());
      }

}

/* fonction appele qd onBlur evenement 
* input : form1
* name : CheckNbrePersonne(form1)
* output nothing
* recupere les valeurs des champs du formulaire (nbre pers) pour les comparer
* avec le choix de chambre 
* affiche une alerte si ya des erreurs 

*/
function CheckNbrPersonne(form1) {
	
 /* on recup les valeurs des celule */
  var typechambre = document.getElementById("listechambre");
  var i = typechambre.selectedIndex;
   
  var p1 = document.).form1.getElementById("1");
  var p2 = document.form1.getElementById("2");
  var p3 = document.form1.getElementById("3");
  var p4 = document.form1.getElementById("4");


alert( 'TEST=');


 /*alert( 'TEST= '+ i + ' p1=  ' + p1.value.toString());*/
			
    
}
		
     /* affichage valeur formulaire   
	 alert( 'type de chambre = ' + typechambre.options[i].text + 
			' p1=  ' + p1.value.toString() +
			' p2=  ' + p2.value.toString() + 
			' p3=  ' + p3.value.toString() + 
			' p4=  ' + p4.value.toString()
			);	
    
		
        if (typechambre.options[i].text == "single" && n !=1) {
            alert('type de chambre = ' + typechambre.toString() + ' nombres de personnes =  ' +nombrespersonnes.toString());
        }
        if (typechambre.options[i].text == "double" && n > 2) {
            alert('type de chambre = ' + typechambre.toString() + ' nombres de personnes =  ' +nombrespersonnes.toString());
        }
        if (typechambre.options[i].text == "appart" && n > 4) {
            alert('type de chambre = ' + typechambre.toString() + ' nombres de personnes =  ' +nombrespersonnes.toString());
        }
        if (typechambre.options[i].text == "suite" && n > 10) {
            alert('type de chambre = ' + typechambre.toString() + ' nombres de personnes =  ' +nombrespersonnes.toString());
        }
        alert("Corriger le nombre de personnes");
        document.getElementById("liste").focus();
    

      alert('type de chambre = ' + typechambre.toString() + ' nombres de personnes =  ' +nombrespersonnes.toString());
*/



/* fonction appele qd onBlur evenement 
* input : form1
* name : diffDates(form1)
* output nothing
* recupere les valeurs des champs du formulaire date1/date1 pour les comparer
* et calcule le nombre de jours associe et le place dans le formulaire 
* affiche une alerte si ya des erreurs avec date1/date2

*/
function diffDates(form1) {
 /* on recup les valeurs des celule */
  var date1 = document.form1.date1.value;
  var date2 = document.form1.date2.value;
  var d1 = new Date(date1);
  var d2 = new Date(date2);

var ms1 = d1.getTime();
var ms2 = d2.getTime();
var temps;

var diff = ms2 - ms1;
if ( diff < 0 ) {
  alert ('date1 ='+ ms1.toString() +' date2 =' + ms2.toString() + ' diff =' + diff.toString());


} else {
// La conversion en nombre de jours (entiers)
      temps = Math.floor( diff / 1000 );  // Passage de millisecondes en secondes
      temps = Math.floor( temps / 3600 );  // Math.floor - retourne l'entier le plus proche.
      temps = Math.floor( temps / 24 );    // nombre de jours
      document.form1.nuits.value = temps ;

}
}

/* fonction appele qd onBlur sur le button anuler 
* input : form1
* name : diffDates(form1)
* output nothing
* permet de reinitialiser les champs du formulaire

*/
function Reset(form1) {
  document.form1.nbrjours.value=0;
  document.form1.date1.value="2019-09-01";
  document.form1.date2.value="2019-09-01";
}
