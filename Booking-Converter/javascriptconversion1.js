/* on passe en parametre la form1 */
function Convertir(form1) {
	
//* on recupere les valeur dans les 3 cases */
  var yun = form1.Euro.value;
  var eur = form1.Yen.value;
  var usd = form1.Dollar.value;
  
  /* si la case yen est diff de 0, on la converti en dollar et euro*/
  if (yun!=0) {
	document.form1.Euro.value=(yun*0.1240);
	document.form1.Dollar.value=(yun*0.16061);
  }
  /* si la case euro est diff de 0, on la converti en dollar et yen*/
  if (eur!=0) {
	document.form1.Yen.value=(eur*8.0479);
	document.form1.Dollar.value=(eur*1.294);
  }
   /* si la case dollar est diff de 0, on la converti en euro et yen*/
  if (usd!=0) {
	document.form1.Yen.value=(usd*6.2229);
	document.form1.Dollar.value=(usd*0.7726);
  }
}

