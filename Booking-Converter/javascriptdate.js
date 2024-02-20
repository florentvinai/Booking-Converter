
/* formulaire = variable globale */





/* fonction appele qd onBlur evenement
* input : form1
* name  : diffDates(form1)
* output:return true si OK sinon false
* what  : recupere les valeurs des champs du formulaire date1/date1 pour les comparer
* et calcule le nombre de jours associe et le place dans le formulaire
* affiche une alerte si ya des erreurs avec date1/date2

*/
function diffDates() {

formulaire = document.forms["form1"]; 

/* on recup les valeurs des celule */
var date1 = formulaire.date1.value;
var date2 = formulaire.date2.value;

/*on cree des objet date */
var d1 = new Date(date1);
var d2 = new Date(date2);

/* on convertit les dates en ms1 et ms2 millisecond */
var ms1 = d1.getTime();
var ms2 = d2.getTime();

var temps; /* valeur de la difference en nuitee */

/*difference entre les 2 date en ms */
var diff = ms2 - ms1;

alert (' date1 ='+ ms1.toString() +' date2 =' + ms2.toString() + '; diff =' + diff.toString());

/* si la date d'entree est + grande que la date de sortie ( impossible */
if ( diff < 0 ) {
  alert ('Problem : date1 ='+ ms1.toString() +' est > a date2 =' + ms2.toString() + '; diff =' + diff.toString());

  /* on reinitialise le champs nuits & les dates a la date de today si c 'est pas possible*/
  formulaire.nuits.value = 0 ;

  var date = new Date();

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  var today = year + "-" + month + "-" + day;

  formulaire.date1.value = today;
  formulaire.date2.value = today;

  console.log('Problem : date1 ='+ today.toString() +'  date2 =' + today.toString());

  return false

} else {
// La conversion en nombre de jours (entiers)
      temps = Math.floor( diff / 1000 );  // Passage de millisecondes en secondes
      temps = Math.floor( temps / 3600 );  // Math.floor - retourne l'entier le plus proche.
      temps = Math.floor( temps / 24 );    // nombre de jours

	  /*on met a jour la valeur du nbre de nuit*/

	  var jour = parseInt(temps);

      formulaire.nuits.value = jour ;

	  return true

}
}

/* fonction appele qd onBlur sur le button anuler
* input : form1
* name : reset
* output nothing
* what : permet de reinitialiser les champs du formulaire + tout les check

*/
function Reset(form) {
	

/*reinit le formulaire*/

formulaire.reset();
	



}


/* fonction appele qd onclick sur le button valider
* input : form1
* name  : ValidateForm
* what  : permet de valider controler   le  formulaire avec
* fonctions ci dessus avant d'envoyer
*/
function Calculer(form) {

diffDates();
}
