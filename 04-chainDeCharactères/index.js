/**
 * les chaînes
 */

let str = "Hello World";
//**concaténation */
/**
 * ! ancienne version
 */
let str2 = "Yannick"

let str3 =  str + " " + str2

let chain = "bac" + " " + 9 ;
/**
 * convertit en chain le  9 */

chain = "une ligne \n" + "une seconde \n" + "une troisième\n";
console.log( chain);

/**
 * ES6 2015 , elle permet une nouvelle manière de faire
 */

/**
 * les backstick
 */
let nb = 999;
str = `number + ${nb}
une seconde 
une troisième
`;

console.log(str);

let number = 10;
/**
 * on peut introduire des variable , des opértion ,
 *  des chiffres , tant que c'est une expressio 
 */

/*
! templates litterals */
let result = `ma moyenne est de ${number + 5}`;

console.log(result);

