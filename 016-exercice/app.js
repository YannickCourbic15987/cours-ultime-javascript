//* EXERCICE 4 :  condition , comparaisons , boucles ... 


//* 1. Loggez dans la console , le resultat de l'expression 
//* d'une opération ternaire.
//*Si metreCarre est supérieur à 70 , loggez "Grand Logement"
//*si c'est inférieur , loggez "logement petit/moyen"

let metreCarre = 70; 

let result = metreCarre > 70 ? "Grand Logement" : "Logement petit/moyen";

console.log(result);

//*2 Créez une boucle for qui affiche dans la console
//* une suite de nombres de 100 à 0 en pas de 1

//*100,99,98,97,96....


for(let i = 100; i >= 0 ; i--){
   console.log(`Var i = ${i}`);
}