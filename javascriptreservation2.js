
function loadedPage() {
	formulaire = document.forms["form1"]; 
}

/* fonction appele qd onBlur evenement
* input : this
* output : true or false
* name  : checkField(this)
* what  :permet d'afficher le check du champs
* on recupere le name et on passe en ID (voir le code html) 

*/
function checkField(obj) {
	
	console.log("obj value : " + obj.name.toString());
	var objid = obj.name.toString();
	
	/*on recupere l'objet Check par ID car Idcheck = name input */
	var obj2 = document.getElementById(objid);
	
	if (obj.checkValidity()) {
	   obj2.innerHTML="&#10004";
	}
}

/* fonction appele qd onBlur evenement
* input : this
* output : true or false
* name  : CheckMail(form1)
* what  :output return True si email1=email2 sinon False
* recupere les valeurs des emails pour les comparer
* affiche une alerte si Email1 est different de Email2

*/

function CheckMail(obj) {


 /* on recup les valeurs des celules du formulaire  */
  var email1 = formulaire.emailone;
  var email2 = formulaire.emailtwo;

    /* Test de la validite des @email saisie avec le. et @ */
    if (email1.value.indexOf("@")<0 && (email1.value.indexOf(".")<0)) {
	  alert("Adresse mail invalide : "+ email1.value.toString());
	  return false;
    }

	/* Test de la validite des @email saisie avec le. et @ */
    if (email2.value.indexOf("@")<0 && (email2.value.indexOf(".")<0)) {
	  alert("Adresse mail invalide : "+ email2.value.toString());
	  return false;
    }

    /* comparaison des 2 emails*/
    if (email1.value.localeCompare(email2.value)) {
      alert('Différence dans les Adresses Emails :  ' + email1.value.toString() + ' avec ' + email2.value.toString());
	  email2.value = "";
	  email2.placeholder = "@ mail différentes";
	  email2.style="color:red;"
	  return false;
      }

/*trace console*/
console.log("obj value : " + formulaire.emailtwo.name.toString());
console.log("obj value : " + obj.name.toString());

/*on erit le check*/
/*--------------------*/
/*checkField(this);*/

var objid = formulaire.emailtwo.name.toString();
	/*on recupere l'objet Check par ID car Idcheck = name input */
var obj2 = document.getElementById(objid);
/* on ecrit le symbole*/	
obj2.innerHTML="&#10004";
	

/*tous les test sont OK on  peut renvoyer true */
return true;
}

/* fonction appele qd onBlur evenement
* input : this
* output : true or false
* name  : confirmMail()
* what  :output return True si email1=email2 sinon False
* teste la conformite des 2 mail @

*/

function confirmMail() {
	
  /* on recup les valeurs des celules du formulaire  */
  var email1 = formulaire.emailone;
  var email2 = formulaire.emailtwo;
  
	if (email1.value.localeCompare(email2.value)) {
		
		email2.value = "";
		email2.placeholder = "Adresse mail différentes";
		email2.style="color:red;"
		
		return false;
	}
	else {
		email2.style="color:black;"
		/* on met symbol valide*/
		checkField( email2);
		
		return true;
	}
}


/* fonction appele qd onBlur evenement
* input : this
* output : true or false
* name  : updateNbrPers()
* what  :output return True si email1=email2 sinon False
* modifie le nbre de personne possible
* en fonction du type de chambre

*/
function updateNbrPers(objid) {
	
/* on recup les valeurs des celule */

var ch_selectionnee = formulaire.elements["typech"].value;
var radios = document.getElementsByName('nombres_personnes');

pers_max=0;


console.log( 'ok  type = ' +	ch_selectionnee.toString()   );
/* On teste la coherence du nbre de personne avec latype de chambre*/

if (ch_selectionnee.toString() == "single") {
	        /* on logue dans la console */
	        console.log( 'ok  type = ' +	ch_selectionnee.toString()   );
			
            pers_max = 1 
			var obj2 = document.getElementById(objid.name.toString());
			obj2.innerHTML="&#10004";
}

if (ch_selectionnee.toString() ==  "double") {
			/* on logue dans la console */
	        console.log( 'ok  type = ' +	ch_selectionnee.toString()   );
			pers_max = 2 ;
			var obj2 = document.getElementById(objid.name.toString());
			obj2.innerHTML="&#10004";

}
if (ch_selectionnee.toString() ==  "appartement" ) {
	        /* on logue dans la console */
			console.log( 'ok  type = ' +	ch_selectionnee.toString()   );
            pers_max = 3 ;
			var obj2 = document.getElementById(objid.name.toString());
			obj2.innerHTML="&#10004";
}
if (ch_selectionnee.toString() == "suite") {
	        /* on logue dans la console */
			console.log( 'ok  type = ' +	ch_selectionnee.toString()  );
			
            pers_max = 4 ;
			var obj2 = document.getElementById(objid.name.toString());
			obj2.innerHTML="&#10004";
}
console.log( 'ok  type = ' +	ch_selectionnee.toString() + "persmax=" + pers_max );


	/* met a jour les formulaire en fonction des selections */
	for (var i = 0; i<4; i++) {
	
		if (i < pers_max) {
			radios[i].disabled=false;
		}
		else {
			radios[i].disabled=true;
			radios[i].checked=false;
		}
	}
}

/* fonction appele qd onBlur evenement
* input : form1
* name  : CheckNbrePersonne(form1)
* output: return True si nbre personne OK sinon false
* what  : recupere les valeurs des champs du formulaire (nbre pers) pour les comparer
* avec le choix de chambre
* affiche une alerte si ya des erreurs

*/
function CheckNbrPersonne() {

/* on recup les valeurs des celule */

var radios = document.getElementsByName('nombres_personnes');

var type = document.getElementById("typech").value;


var valeur=0; /* index du radio button qui est selctionne/validé */

/* on affecte a valeur l'index selectionne*/
for(var i = 0; i < radios.length; i++){
 if(radios[i].checked){
 valeur = i+1 ;

 }
}

/* On teste la coherence du nbre de personne avec latype de chambre*/

if (type.toString() == "single" && valeur==1) {
	        /* on logue dans la console */
	        console.log( 'ok  type = ' +	type.toString()  + ' nbre personne  = ' + valeur );
            return true;
}

if (type.toString() ==  "double" && valeur <= 2) {
			/* on logue dans la console */
	        console.log( 'ok  type = ' +	type.toString()  + ' nbre personne  = ' + valeur );
            return true;
}
if (type.toString() ==  "appart" && valeur <= 3) {
	        /* on logue dans la console */
			console.log( 'ok  type = ' +	type.toString()  + ' nbre personne  = ' + valeur );
            return true;
}
if (type.toString() == "suite" && valeur <= 4) {
	        /* on logue dans la console */
			console.log( 'ok  type = ' +	type.toString()  + ' nbre personne  = ' + valeur );
            return true;
}


/* les test ci dessous ont echoues , donc on renvoi False 
alert("Incohèrence entre Type de chambre et nombre de personne ! Le nombre de personnes à corriger \n " + "ok  type = " +	type.toString()  + " nbre personne  = " + valeur );
*/
return false

}

/* fonction appele qd onBlur evenement
* input : form1
* name  : diffDates(form1)
* output:return true si OK sinon false
* what  : recupere les valeurs des champs du formulaire date1/date1 pour les comparer
* et calcule le nombre de jours associe et le place dans le formulaire
* affiche une alerte si ya des erreurs avec date1/date2

*/
function diffDates() {

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
function Reset() {
	

/*reinit le formulaire*/

formulaire.reset();
	
/*reinit les check :on recupere l'objet Check par ID car Idcheck = name input et on efface*/

var obj2 = document.getElementById(formulaire.nom.name.toString());	
obj2.innerHTML="";

var obj2 = document.getElementById(formulaire.prenom.name.toString());	
obj2.innerHTML="";
	
var obj2 = document.getElementById(formulaire.emailone.name.toString());	
obj2.innerHTML="";

var obj2 = document.getElementById(formulaire.emailtwo.name.toString());	
obj2.innerHTML="";

var obj2 = document.getElementById(formulaire.phone.name.toString());	
obj2.innerHTML="";

var obj2 = document.getElementById(formulaire.date1.name.toString());	
obj2.innerHTML="";

var obj2 = document.getElementById(formulaire.date2.name.toString());	
obj2.innerHTML="";

var obj2 = document.getElementById(formulaire.nuits.name.toString());	
obj2.innerHTML="";

var obj2 = document.getElementById(formulaire.liste.name.toString());	
obj2.innerHTML="";

var obj2 = document.getElementById(formulaire.petispanejeuner.name.toString());	
obj2.innerHTML="";





}


/* fonction appele qd onBlur sur le button anuler
* input : 
* name : calculduPrix()
* output le prix
* what : permet de calculer les prix en fonction
* prixdebase, option, nbredenuit, petitdejeu, et des coeff donne dans le pdf

*/
function calculduPrix() {
	
	/* on recup les valeur de champs/formulairfe */
	
	var nb_nuits = parseInt(formulaire.elements["nuits"].value);
    var nb_petitdej = parseInt(formulaire.elements["petispanejeuner"].value);
	var chprix = parseInt(pers_max); /* pers_max = variable globale */
	
	var prix_base = 60.0;
	
	
	
	/* 10e par option  balcon=20e valider*/
	var options = 10 * formulaire.elements["TV"].checked + 10 * formulaire.elements["BAR"].checked + 20 * formulaire.elements["BALCON"].checked + 10 * formulaire.elements["PARKING"].checked;
	
	/* formule enonce*/
	prixtotal = nb_nuits * ((prix_base + (prix_base * 0.2 *chprix))+ parseInt(options) + nb_petitdej * 10);
	
	console.log(" Le formulaire est pret à être envoyer" + prix_base + " "+ options + " " +nb_nuits+" "+nb_petitdej + " "+ chprix);
	
	
	
}

/* fonction appele qd onclick sur le button valider
* input : form1
* name  : ValidateForm
* what  : permet de valider controler   le  formulaire avec
* fonctions ci dessus avant d'envoyer
*/
function ValidateForm() {


  if ( diffDates() != true  || confirmMail() != true || formulaire.checkValidity() != true) {
	  alert (" Formulaire Invalide ! Verifiez votre saisie");
	  console.log(" Formulaire Dates à être corriger");
      } else {
					calculduPrix();
					confirm("Le  séjour va  coûter "+prixtotal+"€ HT soit "+(prixtotal*1.19).toFixed(2)+"€ TTC");
					console.log(" Le formulaire est pret à être envoyer");
					
			}
}
