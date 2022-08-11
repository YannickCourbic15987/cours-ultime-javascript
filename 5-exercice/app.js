/**
 * *Exercice n°2 
 * 
 * 
 * *Ecrivez une fonction qui 
 * *retourne un nombre multiplié par deux  en utilisant un paramétre
 */

function multipar2(nb){
   let multi = nb * 2 
   return `${nb} x 2 = ${multi}`
}

console.log(multipar2(15));


// Déterminez ce qui est faux ou vrai

let solde = 150000;

solde += 50000;
console.log(solde);

//faux
//**vrai elle permet d'assigner solde , car solde = solde + 50000 */

let resultat = 10 % 7 /**retourne reste = 3 */
console.log(resultat);
/**faux */
let nbPneus = 4
let str = `J'ai besoin de ${nbPneus} pour ma voiture `;
//mauvaise façon , error syntax 
//non car c'est des accolades 
console.log(str);
