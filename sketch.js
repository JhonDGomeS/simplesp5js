let cor;

let posicaoHorizontal; // x

let posicaoVertical; // y

let tamanho = 120;

function setup() {

createCanvas(400, 400);

background("gray");

cor = color(random(255), random(255), random(255));

posicaoHorizontal = 200;

posicaoVertical = 200;

}

function draw() {

fill(cor);

circle(mouseX, mouseY, tamanho);
  
if (mouseIsPressed){
  cor = color(random(255), random(255), random(255));
  tamanho = random(20, 150);
}

if(mouseX < posicaoHorizontal){

posicaoHorizontal--;

}

if(mouseX > posicaoHorizontal){

posicaoHorizontal++;

}

if(mouseY < posicaoVertical){

posicaoVertical--;

}

if(mouseY > posicaoVertical){

posicaoVertical++;

}

}