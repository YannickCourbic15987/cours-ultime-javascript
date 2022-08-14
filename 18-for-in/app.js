/**
 * *Boucle For In 
 */

//* la boucle objet 

const tesla = {
    couleur :"grise",
    portes:5,
    prix:100000
}


for(const props in tesla){
    console.log(`les propriété de ma tesla sont => ${props} : ${tesla[props]}`);
    
}

//* si on veut on veut accéder à une propriété , 
//*si elle est en string , doit mettre des crochet []

console.log(tesla['couleur']);
