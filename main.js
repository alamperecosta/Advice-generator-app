const mobile = window.innerWidth;
const imgMobile = document.querySelector('img');

if(  mobile <= 739){
    trocaImg();
}else {
    imgMobile.src = "images/pattern-divider-desktop.svg"
}
function trocaImg() {
    imgMobile.src = "images/pattern-divider-mobile.svg"
} 


const div =  document.querySelector('.concelho');
const p = document.createElement('p');
const btn = document.querySelector('.btn');
const id = document.querySelector('.value');
btn.addEventListener('click', geradorDeConcelho);

function geradorDeConcelho(){
    fetch('https://api.adviceslip.com/advice')
    .then(r => r.json())
    .then(concelho => {
        id.textContent = ` #${concelho.slip.id}` 
        div.innerHTML = p.appendChild = `" ${concelho.slip.advice} " ` 
    })
}
geradorDeConcelho();
