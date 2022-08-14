/**
 * ! toute les valeurs qui existent , ce sont des valeurs 
 * ! truthy
 * *toue les valeurs qui n'existaent pas , 
 * *ce sont des valeurs falsy
 * 
 */


let bool = 0 ; //*false  , cela n'existe pas 
bool = 100 //*true parce que existe , -100 , 12.5 , mais pas -0 , 0
bool = null //*falsy car c'est le néant
bool = undefined //*indéfinie mais existe , puiqu'il a pas de valeur , on le considére comme falsy
bo0l = NaN //* not a number , cela retourne falsy
//* tout le reste existe normalement 
console.log(Boolean(bool));


let modale = false; 

//* le ! , c'est un non logique 
modale = !modale; 
//* c'est l'inserve 
console.log(modale);
