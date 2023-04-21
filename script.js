/* MAP JS*/

var zerod = 0;
var images = [
  
  "https://cdn.glitch.global/c14f8f40-c999-4e02-b856-4ea4bb89ec38/LOVERS.png?v=1679792417495",
  "https://cdn.glitch.global/c14f8f40-c999-4e02-b856-4ea4bb89ec38/GRASS.png?v=1679792414291",
  "https://cdn.glitch.global/c14f8f40-c999-4e02-b856-4ea4bb89ec38/CARS.png?v=1679792412285",
  "https://cdn.glitch.global/c14f8f40-c999-4e02-b856-4ea4bb89ec38/TEXT.png?v=1679792426051",
  "https://cdn.glitch.global/c14f8f40-c999-4e02-b856-4ea4bb89ec38/NATURE.png?v=1679792420004",
  "https://cdn.glitch.global/c14f8f40-c999-4e02-b856-4ea4bb89ec38/SKATER.png?v=1679792423071",
  "https://cdn.glitch.global/c14f8f40-c999-4e02-b856-4ea4bb89ec38/TREES.png?v=1679792431560",
  "https://cdn.glitch.global/c14f8f40-c999-4e02-b856-4ea4bb89ec38/TRAIN.png?v=1679792429088"
  
]


function goNext() {
  zerod = (zerod < images.length - 1) ? ++zerod : 0;
  console.log(zerod)
  $("#sky").attr("src", images[zerod])
}

function goBack() {
  zerod = (zerod != 0) ? --zerod : images.length -1;
    console.log(zerod)
  $("#sky").attr("src", images[zerod])
};
/*-------------------------------------------------------------------------------------------------------*/
/*BANNER JS*/

var colors = [
  "#000000",
  "#0147FF",
  "#0BEEAA",
  "#FD3301",
  "#9250FF",
  "#E6FF00"
];
var lines;

function setup() {
  var canvas = createCanvas(windowWidth, 180);
  canvas.parent('sketch-holder');
  lines = new Array(25).fill(0).map(function(l) {
    return new Line();
  });
  drawingContext.shadowOffsetX = 10;
  drawingContext.shadowOffsetY = 10;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "rgba(0,0,0,0.3)";
}

function draw() {
  background(colors[0]);
  if (frameCount % 1500 == 1) {
    lines.forEach(function(l) {
      if (l.ready) {
        l.init();
        l.anim();
      }
    });
  }

  lines.forEach(function(l) {
    return l.display();
  });
}

function mousePressed() {
  lines.forEach(function(l) {
    if (l.ready) {
      l.init();
      l.anim();
    }
  });
}

function windowResized() {
  resizeCanvas(windowWidth, 180);
}

function Line(x1, y1, x2, y2) {
  this.init(x1, y1, x2, y2);
}

Line.prototype.init = function(x1, y1, x2, y2) {
  this.x1 = this.x2 = x1 || random(-100, width + 100);
  this.y1 = this.y2 = y1 || random(-100, height + 100);
  this.tx = x2 || random(-100, width + 100);
  this.ty = y2 || random(-100, height + 100);
  this.c = ~~random(1, colors.length);
  this.ready = true;
  this.sw = random(20, 400);
};

Line.prototype.display = function() {
  stroke(colors[this.c]);
  strokeCap(SQUARE);
  strokeWeight(this.sw);
  line(this.x1, this.y1, this.x2, this.y2);
};

Line.prototype.anim = function() {
  this.ready = false;
  var tx = this.tx,
    ty = this.ty;

  var step2 = function() {
    TweenMax.to(this, 0.3, {
      x1: tx,
      y1: ty,
      delay: 2 + random(1),
      onComplete: setReady.bind(this)
    });
  }.bind(this);

  var setReady = function() {
    this.ready = true;
  }.bind(this);

  TweenMax.to(this, 0.3, {
    x2: tx,
    y2: ty,
    delay: random(1),
    onComplete: step2
  });
};
