let tableau = [1,2,3,4,5 , "abc" , true , false , 25.50];
/**
 * * ce sont des objet avec des méthodes rattachée
 */

console.log(tableau[0]);
/**
 * * tableau multidirectionnel
 */

let tab = [
    [
         50 ,
    "yannick"
    ], 
    [
       110,
     'pierre'
    ]
]




console.log(tab[1][0]);



function presentation(name , years , working){
    let salaryMen = {
       name : name,
       years : years,
       working: working
    }

    return salaryMen
   }
   
let tabObjet = [
     
    presentation("yannick" , 24 , "develloper web"),
    presentation("marcel" , 55 , " maçon"),
    presentation("enzo" , 25 , " intégrateur front")  
]

console.log(tabObjet);

/**
 * * méthode spéciale push
 */

tableau.push(7,8,9,10,11);

console.log(tableau);
/**
 * taille du tableau
*/
console.log(tableau.length);