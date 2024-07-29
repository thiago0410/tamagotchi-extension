let fome = 0;
let felicidade = 10;
let limpeza = 10;
ab = 100;
ac = 100;
ad = 0;

const btnAlimentar = document.getElementById('alimentar');
const btnBrincar = document.getElementById('brincar');
const btnLimpar = document.getElementById('limpar');

btnAlimentar.addEventListener('click', alimentar);
btnBrincar.addEventListener('click', brincar);
btnLimpar.addEventListener('click', limpar);

const gif = document.getElementById("gif");
const gifDuration = 12000;

gif.addEventListener("DOMContentLoaded", troca_gif());

function troca_gif(){
    if(gif){
        setTimeout(function() {
            gif.src = 'images/teste.jpg';
          }, gifDuration);
    } else {
        console.error("Deu não");
    }
    
}

/*document.addEventListener('DOMContentLoaded', function() {
    const gif = document.getElementById("gif");
    
    if (gif) {
      const gifDuration = 12000; // Duração estimada do GIF em milissegundos
      
      setTimeout(function() {
        // Substitui o GIF pela imagem estática
        gif.src = 'images/teste.png';
      }, gifDuration);
    } else {
      console.error("Elemento com ID 'meuGif' não encontrado.");
    }
  });
  */

function updateStatus() {
    document.getElementById('fome').innerText = fome;
    document.getElementById('felicidade').innerText = felicidade;
    document.getElementById('limpeza').innerText = limpeza;
}

document.querySelector('.barintL').style.width = ab + "%";
document.querySelector('.barintB').style.width = ac + "%";
document.querySelector('.barintF').style.width = ad + "%";

function alimentar() {
    fome = Math.max(fome - 1, 0);
    felicidade = Math.min(felicidade + 1, 10);
    updateStatus();
    document.querySelector('.barintF').style.width = ad + "%";
    ad = ad - 10;
}

function brincar() {
    felicidade = Math.min(felicidade + 1, 10);
    limpeza = Math.max(limpeza - 1, 0);
    updateStatus();
    ab = ab - 10;
    ac = ac + 10;
    ad = ad + 10;
    document.querySelector('.barintL').style.width = ab + "%";
    document.querySelector('.barintB').style.width = ac + "%";
    document.querySelector('.barintF').style.width = ad + "%";
    
}

function limpar() {
    limpeza = 10;
    updateStatus();
    ab = 100;
    document.querySelector('.barintL').style.width = ab + "%";
    document.querySelector('.barintB').style.width = ac + "%";
    document.querySelector('.barintF').style.width = ad + "%";
}

function decreaseStatus() {
    fome = Math.min(fome + 1, 10);
    ad = ad + 10;
    felicidade = Math.max(felicidade - 1, 0);
    ac = ac - 10;
    limpeza = Math.max(limpeza - 1, 0);
    ab = ab - 10; 
    document.querySelector('.barintL').style.width = ab + "%";
    document.querySelector('.barintB').style.width = ac + "%";
    document.querySelector('.barintF').style.width = ad + "%";
    updateStatus();
}

setInterval(decreaseStatus, 5000);

document.addEventListener('DOMContentLoaded', updateStatus);
