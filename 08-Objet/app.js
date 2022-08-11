/**
 * * un objet c'est hyper partique 
 * *pour déclarer des caractériqtique d'un objet
 */
let pays = {
      nom : 'Japon',
      pop : 100000000,
      classement:3,
      PIB:377915,
      myArr : [1,2,3,4],
      culture:{
        mangaPopulaire : 'One Piece',
        nourriturePrincipale : "riz",
        couvert: "baguette",
        methode : function(){
            console.log("Hello depuis le japon");
        }
      }
}


console.log(pays.PIB);
pays.culture.methode();

