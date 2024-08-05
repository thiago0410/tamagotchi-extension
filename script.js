let fome = 10;
let felicidade = 10;
let limpeza = 10;
limpo = 100;
feliz = 100;
satisfeito = 100;

const btnAlimentar = document.getElementById('alimentar');
const btnBrincar = document.getElementById('brincar');
const btnLimpar = document.getElementById('limpar');

const gif = document.getElementById("gif");
const gifDuration = 12000;

gif.addEventListener("DOMContentLoaded", troca_gif());

function troca_gif() {
  if (gif) {
    setTimeout(function () {
      gif.src = 'images/teste.jpg';
    }, gifDuration);
  } else {
    console.error("Deu não");
  }
}

document.querySelector('.barintLimpeza').style.width = limpo + "%";
document.querySelector('.barintBrincar').style.width = feliz + "%";
document.querySelector('.barintFome').style.width = satisfeito + "%";

function barras() {
  document.querySelector('.barintLimpeza').style.width = limpo + "%";
  document.querySelector('.barintBrincar').style.width = feliz + "%";
  document.querySelector('.barintFome').style.width = satisfeito + "%";
}

//a barra de felicidade é autonoma
// esse if do alimentar e brincar funciona como limitador, 
function alimentar() {
  fome = Math.max(fome + 1, 10);
  felicidade = Math.max(felicidade + 1, 10);
  document.querySelector('.barintFome').style.width = satisfeito + "%";
  satisfeito = satisfeito + 10;
  if(satisfeito > 100){
    satisfeito = 100;
  }
  console.log("alimentando:" + satisfeito);
  barras();
}

function brincar() {
  felicidade = Math.max(felicidade + 1, 10);
  limpeza = Math.max(limpeza - 1, 0);
  limpo = limpo - 10;
  feliz = feliz + 10;
  if(feliz > 100){
    feliz = 100;
  }
  console.log("FELICIDADE:" + feliz);
  barras();
}

function limpar() {
  limpeza = 10;
  limpo = 100;
  barras();
}

function decreaseStatus() {
  fome = Math.max(fome - 1, 10);
  satisfeito = satisfeito - 10;
  felicidade = Math.max(felicidade - 1, 0);
  feliz = feliz - 10;
  limpeza = Math.max(limpeza - 1, 0);
  limpo = limpo - 10;
  console.log
  barras();
}

setInterval(decreaseStatus, 5000);

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function drag(event, el) {
  event.dataTransfer.setData("Text", event.target.id);
  console.log('--> ' + el.id);
}

function dragging(event) {
  document.getElementById("demo").innerHTML = "The p element is being dragged";
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event,target) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  console.log("--" + data);
  if (data == 'alimentar') {
    alimentar();
  } else if(data == 'limpar'){
    limpar();
  } else if(data == 'brincar'){
    brincar();
  }
}