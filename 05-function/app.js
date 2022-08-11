/**
 * ! Introduction  au function
 */

/**
 * * ce sont des bout de code réutilisable qu'on va pouvoir éxecuter des 
 * * dans notre code 
 */
/**
 * * parmètres = valeurs utile dans une function
 * * on peut déclarer , calculer
 */
function presentation(name , years , working){
 let salaryMen = {
    name : name,
    years : years,
    working: working
 }

let info = ` je m'appelle ${salaryMen.name} , j'ai ${salaryMen.years} ans et je travaille dans le secteur du ${salaryMen.working}.`;

console.log(info);
}

presentation('yannick' , 24,"développement web");


presentation('Enzo' , 25,'intégrateur front end');


/**
 * * une fonction peut retourner des valeurs 
 * c'est comme si la fonction était la valeur en quelque sorte
 */

function moyenne(){

    let name = "yannick a une moyenne de : " 
    return name + 10 + "/20";
}

console.log(moyenne());


/**
 * paramètre
 */

function addition(nb1 , nb2){
 let add = nb1 + nb2

 return `${nb1} + ${nb2} = ${add}`
}

console.log(addition(10 , 8));