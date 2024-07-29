//click to change
//This isn't really a texture but inspired by  #cpc-flora-fauna  #codepenchallenge

//doodled flowers from my pairings here: https://medium.com/@sophiawood/cinquains-for-the-oregon-fawn-lily-f186b1ccb76e


let fawnlilies = []
let p
let b = 100
function preload(){
  for(let i = 1;i<=6;i++){
    fawnlilies[i-1] = loadImage('https://assets.codepen.io/4559259/Fl'+str(i)+'.png');
  }
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  t = floor(random(0,5.999));
  background(100,200,100)
  noLoop()
  angleMode(DEGREES)
   cnt = 0
  p = floor(random(0,2.99))
  
}
function draw(){
  translate(width/2,height/2)
  compositions(p)
  

  
}

function compositions(n){
  if(n===0){
    for (let i = 0;i<100;i++){
    background(0,50,10,1)
    t = floor(random(0,5.999));
    r = fawnlilies[t].width/fawnlilies[t].height
    image(fawnlilies[t],randomGaussian(0,width/2),-height/2+i*2,(b + i*4)/r,b+i*4);
  }
  }
  if(n===1){
    a = random(10,30)
    t = floor(random(0,5.999));
    r = fawnlilies[t].width/fawnlilies[t].height
    image(fawnlilies[t],-40,-40,(b )/r,b);
    
    for (let i = 0;i<100;i++){
      push()
    background(0,50,10,1)
    t = floor(random(0,5.999));
      
      rotate(180+i*a)
    r = fawnlilies[t].width/fawnlilies[t].height
    image(fawnlilies[t],0,0,(b + i*4)/r,b+i*4);
      pop()
  }
  
  }
  
  if(n===2){
    for(let i = 0;i<100;i++){
      background(0,50,10,1)
    }
    a = random(10,30)
    t = floor(random(0,5.999));
    r = fawnlilies[t].width/fawnlilies[t].height
    image(fawnlilies[t],-150,-100,(b*3 )/r,b*3);
    
    
  
  }
}

function mousePressed(){
  setup()
  draw()
  p = floor(random(0,2.99))
}

function keyPressed(){
  setup()
  draw()
  p = floor(random(0,2.99))
}