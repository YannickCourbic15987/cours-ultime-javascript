/**
 * *Créez un tableau avec 3 valeurs à l'intérieur :
 * *5124 , tru , et un objet qui contient une propriété 
 */
let i =0;
const tableau = [
    5124, 
    true,
    myObjt= {
      yourname:"yannick",
      lastname : "courbic"

    }
]

//créez un objet avec trois props 

let myObjt2 = {
    name: 'yannick',
    lastname: 'courbic',
    years: 24,
    working: 'dévellopeur web'
}

const text  = document.querySelector("p");
text.textContent = `je m'appelle ${myObjt2.name} ${myObjt2.lastname} et j'ai ${myObjt2.years} et je suis ${myObjt2.working}`

text.addEventListener('mouseover' , changeColor);

function changeColor(){
  i++;
    if(i%2 === 1){

        text.style.color = "red"
        text.style.textTransform = "uppercase"
    }
    else{
        text.style.color = "black"
        text.style.textTransform = "none"
    }
}