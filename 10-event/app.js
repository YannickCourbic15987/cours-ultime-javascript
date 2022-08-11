
const titre = document.querySelector('h1');
titre.addEventListener('click' , changeColor)
titre.addEventListener('mouseenter' , changeColor)
function changeColor(){
    titre.style.color="red";
    titre.style.textDecoration ="underline"
    titre.style.textAlign="center"
    titre.style.textTransform="Uppercase"
    titre.style.letterSpacing ="3px"
    titre.style.fontFamily="arial",
    titre.style.fontWeight ="300"
}

/**
 * * une function référence qu'on peut appliquer à d'autre event
 */