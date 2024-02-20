
/* fonction appele qd on click sur Sonvertir*/
function Convertir(form1) {
 /* on recup les valeurs des celule */	
  var yun = document.form1.Yen.value;
  var eur = document.form1.Euro.value;
  var usd = document.form1.Dollar.value;
  
  /* si la celule Yen diff de 0 on convertit en eruo et en dollar */
  if (yun!=0) {
	document.form1.Euro.value=(yun*0.1240);
	document.form1.Dollar.value=(yun*0.16061);
  }
    /* si la celule euro diff de 0 on convertit en yen et en dollar */
  if (eur!=0) {
	document.form1.Yen.value=(eur*8.0479);
	document.form1.Dollar.value=(eur*1.294);
  }
   /* si la celule usd diff de 0 on convertit en yen et en euro */
  if (usd!=0) {
	document.form1.Yen.value=(usd*6.2229);
	document.form1.Euro.value=(usd*0.7726);
  }
}

/* Fonction appele qd on click sur Annuler */
function Reset(form1) {
	
  document.form1.Yen.value=0;
  document.form1.Euro.value=0;
  document.form1.Dollar.value=0;
  
}

/* cette fonction verifie la valeur du champs */
/* ell est appele ds ch cellule qd on clique sur le button convertir*/
/* elle peut afficher une alerte si besoin*/

function CheckValue(form1){

/* on recup les valeurs des celule */	
  var yun = document.form1.Yen.value;
  var eur = document.form1.Euro.value;
  var usd = document.form1.Dollar.value;
  
    if (yun <  0 | eur < 0 | usd < 0) {
                alert('les valuers negatives ne sont pas convertibles');
				Reset(form1);
				
                return false;
            } else {
                
                alert('OK pour la valeur a convertir');
				
				Convertir(form1);
                return true;    	
            }
	
}