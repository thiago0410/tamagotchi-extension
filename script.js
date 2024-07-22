let fome = 0;
let felicidade = 10;
let limpeza = 10;

const btnAlimentar = document.getElementById('alimentar');
const btnBrincar = document.getElementById('brincar');
const btnLimpar = document.getElementById('limpar');

btnAlimentar.addEventListener('click', alimentar());
btnBrincar.addEventListener('click', brincar());
btnLimpar.addEventListener('click', limpar());


function updateStatus() {
    document.getElementById('fome').innerText = fome;
    document.getElementById('felicidade').innerText = felicidade;
    document.getElementById('limpeza').innerText = limpeza;
}

function alimentar() {
    fome = Math.max(fome - 1, 0);
    felicidade = Math.min(felicidade + 1, 10);
    updateStatus();
}

function brincar() {
    felicidade = Math.min(felicidade + 2, 10);
    limpeza = Math.max(limpeza - 1, 0);
    updateStatus();
}

function limpar() {
    limpeza = 10;
    updateStatus();
}

function decreaseStatus() {
    fome = Math.min(fome + 1, 10);
    felicidade = Math.max(felicidade - 1, 0);
    limpeza = Math.max(limpeza - 1, 0);
    updateStatus();

    /*if (fome === 10 || felicidade === 0 || limpeza === 0) {
        alert('Seu Tamagotchi está em mau estado!');
    }*/
}

setInterval(decreaseStatus, 5000);

document.addEventListener('DOMContentLoaded', updateStatus);