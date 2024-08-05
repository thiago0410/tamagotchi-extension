let fome = 10;
let felicidade = 10;
let limpeza = 10;
limpo = 100;
feliz = 100;
faminto = 100;

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
document.querySelector('.barintFome').style.width = faminto + "%";

function barras() {
  document.querySelector('.barintLimpeza').style.width = limpo + "%";
  document.querySelector('.barintBrincar').style.width = feliz + "%";
  document.querySelector('.barintFome').style.width = faminto + "%";
}

//a barra de felicidade é autonoma

function alimentar() {
  fome = Math.max(fome + 1, 10);
  felicidade = Math.max(felicidade + 1, 10);
  document.querySelector('.barintFome').style.width = faminto + "%";
  faminto = faminto + 10;
  if(faminto > 100){
    faminto = 100;
  }
  console.log("alimentando:" + faminto);
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
  faminto = faminto - 10;
  felicidade = Math.max(felicidade - 1, 0);
  feliz = feliz - 10;
  limpeza = Math.max(limpeza - 1, 0);
  limpo = limpo - 10;
  document.querySelector('.barintLimpeza').style.width = limpo + "%";
  document.querySelector('.barintBrincar').style.width = feliz + "%";
  document.querySelector('.barintFome').style.width = faminto + "%";
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
    console.log("a" + data);
  } else if(data == 'limpar'){
    limpar();
    console.log("f" + data);
  } else if(data == 'brincar'){
    brincar();
    console.log("b" + data);
  }
}