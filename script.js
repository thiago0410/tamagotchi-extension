let fome = 10;
let felicidade = 10;
let limpeza = 10;
ab = 100;
ac = 100;
ad = 100;

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

document.querySelector('.barintLimpeza').style.width = ab + "%";
document.querySelector('.barintBrincar').style.width = ac + "%";
document.querySelector('.barintFome').style.width = ad + "%";

function alimentar() {
  fome = Math.max(fome - 1, 10);
  felicidade = Math.min(felicidade + 1, 10);
  document.querySelector('.barintFome').style.width = ad + "%";
  ad = ad + 10;
  console.log("alimentando:" + ad);
}

function brincar() {
  felicidade = Math.min(felicidade + 1, 10);
  limpeza = Math.max(limpeza - 1, 0);
  ab = ab - 10;
  ac = ac + 10;
  ad = ad + 10;
  document.querySelector('.barintLimpeza').style.width = ab + "%";
  document.querySelector('.barintBrincar').style.width = ac + "%";
  document.querySelector('.barintFome').style.width = ad + "%";

}

function limpar() {
  limpeza = 10;
  ab = 100;
  document.querySelector('.barintLimpeza').style.width = ab + "%";
  document.querySelector('.barintBrincar').style.width = ac + "%";
  document.querySelector('.barintFome').style.width = ad + "%";
}

function decreaseStatus() {
  fome = Math.min(fome - 1, 10);
  ad = ad - 10;
  felicidade = Math.max(felicidade - 1, 0);
  ac = ac - 10;
  limpeza = Math.max(limpeza - 1, 0);
  ab = ab - 10;
  document.querySelector('.barintLimpeza').style.width = ab + "%";
  document.querySelector('.barintBrincar').style.width = ac + "%";
  document.querySelector('.barintFome').style.width = ad + "%";
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
    console.log("aa" + data);
  }
  else if(data == 'limpar'){
    limpar();
  }
}