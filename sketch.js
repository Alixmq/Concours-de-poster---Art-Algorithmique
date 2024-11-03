const circleDetail = 500;
class Drop { // Oui j'ai créé ma classe ici mais j'avais des bug autrement pas de jugement svp
  constructor(x, y, r) {
    this.center = createVector(x, y);
    this.r = r;
    this.sommets = [];

    for (let i = 0; i < circleDetail; i++) {
      let angle = map(i, 0, circleDetail, 0, TWO_PI);
      let v = createVector(cos(angle), sin(angle));
      v.mult(this.r);
      v.add(this.center);
      this.sommets[i] = v;
    }

    let randomColor = random(colors);
    this.couleur = color(randomColor[0], randomColor[1], randomColor[2]);
  }

  tine(x, z, c) {
    let u = 1 / pow(2, 1 / c);
    for (let s of this.sommets) {
      s.y = s.y + z * pow(u, abs(s.x - x));
    }
  }

  marble(other) {
    for (let s of this.sommets) {
      let c = other.center;
      let r = other.r;
      let p = s.copy();
      p.sub(c);
      let m = p.mag();
      let root = sqrt(1 + (r * r) / (m * m));
      p.mult(root);
      p.add(c);
      s.set(p);
    }
  }

  show() {
    fill(this.couleur);
    noStroke();
    beginShape();
    for (let s of this.sommets) {
      vertex(s.x, s.y);
    }
    endShape(CLOSE);
  }
}


let drops = [];
const colors = [
  [152, 137, 184],   
  [240, 166, 210],   
  [239, 195, 235],   
  [184, 193, 221]    
];

function setup() {
  createCanvas(1684, 2384);

  
  for (let i = 0; i < 500; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(50, 100);  
    addInk(x, y, r);
  }

  
  if (random() < 0.95) {  
    let xl = random(width);     
    let z = random(-20, 20);    
    let c = random(5, 10);     
    tineLine(xl, z, c);
  }
}

function mousePressed() {
  let xl = mouseX;          
  let z = random(-30, 30);  
  let c = random(10, 20);    
  tineLine(xl, z, c);        
}

function tineLine(xl, z, c) {
  for (let drop of drops) {
    if (random() < 0.8) {  
      drop.tine(xl, z, c); 
    }
  }
}
function addInk(x,y,r){
  let drop = new Drop(x,y,r);
  for (let other of drops){
    other.marble(drop);
  }
  drops.push(drop);
}

function draw() {
  background(240, 230, 240);  // Couleur de fond //

  
  for (let drop of drops) {
    drop.show();
  }
}