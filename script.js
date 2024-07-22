let fome = 0;
let felicidade = 10;
let limpeza = 10;

const btnAlimentar = document.getElementById('alimentar');
const btnBrincar = document.getElementById('brincar');
const btnLimpar = document.getElementById('limpar');

btnAlimentar.addEventListener('click', alimentar);
btnBrincar.addEventListener('click', brincar);
btnLimpar.addEventListener('click', limpar);

function updateBars() {
    updateBarColor('bar-fome-inner', fome, true);
    updateBarColor('bar-felicidade-inner', felicidade, false);
    updateBarColor('bar-limpeza-inner', limpeza, false);
}

function updateBarColor(barId, value, inverse) {
    const barElement = document.getElementById(barId);
    let percentage = inverse ? value * 10 : 100 - value * 10;
    barElement.style.backgroundColor = percentage >= 50 ? 'red' : 'green';
}

function updateStatus() {
    document.getElementById('fome').innerText = fome;
    document.getElementById('felicidade').innerText = felicidade;
    document.getElementById('limpeza').innerText = limpeza;
    updateBars();
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
}

setInterval(decreaseStatus, 5000);

document.addEventListener('DOMContentLoaded', updateStatus);
