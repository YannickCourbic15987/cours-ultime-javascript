let couleur = "noir"

switch (couleur) {
    case 'orange' : 
    console.log("Prix : 21.90€");
    break;
    case 'noir' : 
    console.log("Prix : 22.90€");
    break;
    case 'vert' : 
    console.log("Prix : 16.90€");
    break;
    case 'violet' : 
    console.log("Prix : 18.90€");
    break;
    default : 
    console.log(`désoler nous pas de ${couleur} en stock`);
    break;
}