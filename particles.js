NUM_PARTICLES = 120;
NUM_MOONS = 5;

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
container = document.getElementById("hero-background");
canvas.width = container.offsetWidth;
canvas.height = container.offsetHeight;
var particles = [];
var moons = [];

var Particle = function() {
  this.x = canvas.width * Math.random();
  this.y = canvas.height * Math.random();
  this.vx = 0.25 * (Math.random());
  this.vy = 0;
  this.Color = 'rgba(255,255,255,' + (0.2 + (Math.random() * 1.2) ) +  ')';
  this.size = 1 + (Math.random() * 1.5);
}

Particle.prototype.Draw = function(ctx) {
  ctx.fillStyle = this.Color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
  ctx.fill();
}

Particle.prototype.Update = function() {
  this.x += this.vx;
  this.y += this.vy;
  
  if(this.x < 0) {
    this.x = canvas.width * 1;
  } else if(this.x > canvas.width) {
    this.x = 0;
  }
  
  if(this.y < 0) {
    this.y = canvas.height * 1;
  } else if(this.y > canvas.height) {
    this.y = 0;
  }
}

var Moon = function() {
  this.x = canvas.width * Math.random();
  this.y = canvas.height * Math.random();
  this.vx = 0.25 * (Math.random());
  this.vy = 0;
  this.size = 20 + (Math.random() * 5);
  this.Color = 'rgba(255,255,255,' + (0.2 + (Math.random() * 1.2) ) +  ')';
}

Moon.prototype.Draw = function(ctx) {
  ctx.fillStyle = this.Color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
  ctx.fill();
}


Moon.prototype.Update = function() {
  this.x += this.vx;
  this.y += this.vy;
  
  if(this.x < 0) {
    this.x = canvas.width * 1;
  } else if(this.x > canvas.width) {
    this.x = 0;
  }
  
  if(this.y < 0) {
    this.y = canvas.height * 1;
  } else if(this.y > canvas.height) {
    this.y = 0;
  }
}





function loop() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  if(particles.length > 0) {
    for(var i = 0; i < NUM_PARTICLES; i++) {
      particles[i].Update();
      particles[i].Draw(ctx);
    }
  }
  if(moons.length > 0 ) {
    for(var i = 0; i < NUM_MOONS; i++) {
      moons[i].Update();
      moons[i].Draw(ctx);
    }
  }
  requestAnimationFrame(loop);
}

for (var i = 0; i < NUM_PARTICLES; i++) {
  particles.push(new Particle());
}

for (var i = 0; i <  NUM_MOONS; i++) {
  moons.push(new Moon());
}

loop();