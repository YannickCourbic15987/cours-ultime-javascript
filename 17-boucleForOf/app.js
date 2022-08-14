//* la boucle for of , qui sert à itérer à travers des objet
//* ittérable , cela peut être par exemple une chaîne de 
//* de caractére , tableau 

const  tab1 = [1,2,3,4,5]; 

for(const index of tab1){
    console.log(index);
}

//* dans une boucle classique , on ne peut mettre de const 
//* pour une boucle for of , une nouvelle const 
//*est de nouveau crée


//* cependant , elle ne peut itérer pour les objet pur avec des accolades {}