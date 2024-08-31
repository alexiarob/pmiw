 //Alexia Roberts
//Legajo: 120361/2
//Link al video explicativo: https://youtu.be/8MVpSHah53g

let img;
let posX, posY, tamX, tamY;

function preload() {
  img = loadImage('data/F_37.jpg');
}


function setup() {
 createCanvas(800, 400);
 imagen(0, 1, 390, 390);
}


function draw() {
  background(255);
  dosgrillas(15, 26);
  imagen(0, 1, 390, 390);
}

function dosgrillas(cant, tam) {
  for (let x = 1; x < cant; x++) {
    for (let y = 0; y < cant; y++) {
      if (x <= y) {
        let distanciaMouse = dist(400, 800, x * tam, y * tam);
        let grosorTrazo = map(distanciaMouse, 10, 100, 0, 3);
        
        let d = dist(x * tam, y * tam, mouseX, mouseY);
        let aumentaGrosor = map(d, 0, 200, 10, 0);
        grosorTrazo += aumentaGrosor;
        grosorTrazo = max(grosorTrazo, 0);

        strokeWeight(grosorTrazo);
        circle(width / 2 + x * tam, y * tam, tam);
      }
    }
  }

  for (let i = 1; i < cant; i++) {
    for (let j = 0; j < cant; j++) {
      if (i <= j) {
        let distanciaMouse = dist(400, 800, i * tam, j * tam);
        let grosorTrazo = map(distanciaMouse, 10, 100, 0, 3);
        
        let d = dist(i * tam, j * tam, mouseX, mouseY);
        grosorTrazo += grosorIncrementa(d);
        grosorTrazo = max(grosorTrazo, 0);

        strokeWeight(grosorTrazo);
        circle(width / 2 + j * tam, i * tam, tam);
      }
    }
  }
}

function imagen(posX, posY, tamX, tamY) {
  image(img, posX, posY, tamX, tamY);
}

function reiniciar() {
  mouseX = (width / 2) + 200;
  mouseY = height / 2;
}

function mousePressed() {
  reiniciar();
}

//funcion que devuelve valor 
function grosorIncrementa(d) {
  return map(d, 0, 200, 10, 0);
}
