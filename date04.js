<!-- Cachons ce script des navigateurs 
//   ne reconnaissant pas JavaScript


now= new Date()// Ajourd'hui
mois = now.getMonth()// Num�ro du mois
var mois_annee// Recherche de la cha�ne de caract�res correspondante

switch(mois)
{ 
  case 0 : mois_annee = " janvier "; break
  case 1 : mois_annee = " f�vrier "; break
  case 2 : mois_annee = " mars "; break
  case 3 : mois_annee = " avril "; break
  case 4 : mois_annee = " mai "; break
  case 5 : mois_annee = " juin "; break
  case 6 : mois_annee = " juillet "; break
  case 7 : mois_annee = " ao�t "; break
  case 8 : mois_annee = " septembre "; break
  case 9 : mois_annee = " octobre "; break
  case 10 : mois_annee = " novembre "; break
  case 11 : mois_annee = " d�cembre "; break
}
document.write("Nous sommes le " + now.getDate() 
               + mois_annee + now.getFullYear())

// Fin de la dissimulation du script  -->
