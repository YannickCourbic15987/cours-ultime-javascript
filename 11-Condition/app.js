const nb = 50;

if(nb > 20){
    console.log('condition vérifié')
}
if(nb < 20){
    console.log('condition vérifié')
}
if(nb === 50){
    console.log('condition vérifié')
}


/**
 * 
 * 
 * 
 * < , > , >= , <= , === égalité strict  même type te même valeur, !== 
 */


if(nb === 100 ){
    console.log(`nb est égal à ${nb}`);
}
else if(nb <100){
    console.log(`nb est inférieur à 100`);
}

/**
 * compâraison éléborées
 */

nb1 = 1200;

if(nb1 === 100 ){
    console.log(`nb est égal à ${nb}`);
}
else if(nb1 >=600 && nb1 <= 900){
    console.log(`nb est supérieur à 600`);
}
else if(nb1 > 1000 ){
    console.log(`nb1 est supérieur à 1000`);
}


let bool = true   
bool = 5000 //truly
bool = 0 //false
bool = undefined
if(!bool){
    console.log("condition vérifier");
}