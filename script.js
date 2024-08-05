localStorage 
var estado = {
  fome: 10, 
  felicidade: 10,
  limpeza : 10,
  limpo: 100,
  feliz: 100,
  satisfeito: 100
};

var estado;

function salvaEstado(){
  const estadoJSON = JSON.stringify(estado);
  localStorage.estado = estadoJSON;
  console.log("Salva estado");
}

function recuperaEstado(){
  const estadoRec =  localStorage.estado;
  estado = JSON.parse(estadoRec);
  console.log("Recupera estado");
}

// window.onload = function(){
//   if (localStorage.estado){
//     recuperaEstado();
//   }
//   else {
//     var estado = {
//       fome: 10, 
//       felicidade: 10,
//       limpeza : 10,
//       limpo: 100,
//       feliz: 100,
//       satisfeito: 100
//     };
//   }

const btnAlimentar = document.getElementById('alimentar');
const btnBrincar = document.getElementById('brincar');
const btnLimpar = document.getElementById('limpar');

/* GIF */
const gif = document.getElementById("gif");
const gifDuration = 11800;

gif.addEventListener("DOMContentLoaded", troca_gif());

function troca_gif() {
  if (gif) {
    setTimeout(function () {
      gif.src = 'images/pintinho_parado.png';
    }, gifDuration);
  } else {
    console.error("Deu não");
  }
}

document.querySelector('.barintLimpeza').style.width = estado.limpo + "%";
document.querySelector('.barintBrincar').style.width = estado.feliz + "%";
document.querySelector('.barintFome').style.width = estado.satisfeito + "%";

function barras() {
  document.querySelector('.barintLimpeza').style.width = estado.limpo + "%";
  document.querySelector('.barintBrincar').style.width = estado.feliz + "%";
  document.querySelector('.barintFome').style.width = estado.satisfeito + "%";
  salvaEstado();
}

//a barra de felicidade é autonoma
// esse if do alimentar e brincar funciona como limitador, 
function alimentar() {
  estado.fome = Math.max(estado.fome + 1, 10);
  estado.felicidade = Math.max(estado.felicidade + 1, 10);
  document.querySelector('.barintFome').style.width = estado.satisfeito + "%";
  estado.satisfeito = estado.satisfeito + 10;
  if(estado.satisfeito > 100){
    estado.satisfeito = 100;
  }
  console.log("alimentando:" + estado.satisfeito);
  barras();
}

function brincar() {
  estado.felicidade = Math.max(estado.felicidade + 1, 10);
  estado.limpeza = Math.max(estado.limpeza - 1, 0);
  estado.limpo = estado.limpo - 10;
  estado.feliz = estado.feliz + 10;
  if(estado.feliz > 100){
    estado.feliz = 100;
  }
  console.log("FELICIDADE:" + estado.feliz);
  barras();
}

function limpar() {
  estado.limpeza = 10;
  estado.limpo = 100;
  barras();
}

function decreaseStatus() {
  estado.fome = Math.max(estado.fome - 1, 10);
  estado.satisfeito = estado.satisfeito - 10;
  estado.felicidade = Math.max(estado.felicidade - 1, 0);
  estado.feliz = estado.feliz - 10;
  estado.limpeza = Math.max(estado.limpeza - 1, 0);
  estado.limpo = estado.limpo - 10;
  if (estado.feliz < 0){
    estado.feliz = 0;
  } 
  if (estado.satisfeito < 0){
    estado.satisfeito = 0;
  }
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