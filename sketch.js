function setup() {
  createCanvas(500, 750);
}

function draw() {
  background(236, 221, 190);
  
  noStroke();
  fill(244,184,7);
  rect(31,93,15,524) //linea amarilla
  noStroke();
  fill (4,103,184)
  rect(56,226,24,534) //linea azul
  noStroke();
  fill(252,3,4);
  rect(89,399,9,350); //linea roja
  noStroke();
  fill(0);
  rect (0,710,212,5); //linea negra 
// lineas de colores
  
  noStroke();
  fill(244,184,7);
  triangle (329,212,212,331,329,287)
  noStroke();
  fill(244,184,7);
  triangle(185,271,212,331,329,212) //ala izquierda dividida en dos triangulos 
  
  noStroke();
  fill(244,184,7);
  triangle(329,212,329,286,469,270);
  noStroke();
  fill(244,184,7);
  triangle(469,270,329,286,445,329) // ala derecha divida en dos triangulos
  
  fill(0);
  rect(185,337,57,108) //rueda izquierda
  fill(0);
  rect(414,337,57,108);//rueda derecha
  
  fill(0);
  rect(242,379,175,14);//estructura negra 1 
  fill(0);
  triangle(240,393,240,416,293,456);
  triangle(296,441,240,393,293,456); //linea negra
  triangle(415,398,354,458,415,416);
  triangle(354,442,354,458,415,398); //segunda linea 
  rect(291,337,80,23);//rectangulo negro 
  
  fill(252,3,4);
  rect(236,531,186,218);// fondo rojo
   
  fill(4,103,184);
  triangle(329,184,281,544,376,544); // triangulo azul 
  
  
  fill(4,103,184);
  rect(264,543,130,207); //rectangulo azul
  
  fill(0);
  rect(295,566,68,113);
  rect(308,694,43,35)//detalles negros
  
  textSize(20);
  text("1950-2022",91,237)//texto año
  
  stroke(0);
  strokeWeight(4);
  textSize(60);
  text("FOR",32,105)
  text("MULA",32,160)
  text("ONE",32,215) //texto 
 

  
  
}