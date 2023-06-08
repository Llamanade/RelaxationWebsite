let bubble = [];
let n = 2000;
let s = 5
let angle, dx, dy

function setup() {
  createCanvas(window.innerWidth - 20, window.innerHeight - 60);
  for (let i = 0; i < n; i++) {
    bubble[i] = {
      x: 1,
      y: 1,
      angle: 1,
      dx: 1,
      dy: 1,
      color: {
        r: random(0, 255),
        g: random(0, 255),
        b: random(0, 255)
      },
      size: random(20, 100)
    };
  bubble[i].x = random(0, width)
  bubble[i].y = random(0, height)
  bubble[i].angle = random(0, 360)
  }
  document.querySelector("#nBalls").value = 100
  document.querySelector("#sBalls").value = 5
}

function draw() {
  createCanvas(window.innerWidth - 20, window.innerHeight - 60);
  background(0)
  for (let i = 0; i < n; i++) {
    fill(bubble[i].color.r, bubble[i].color.g, bubble[i].color.b);
    circle(bubble[i].x, bubble[i].y, bubble[i].size);
    bubble[i].dx = Math.cos(bubble[i].angle)
    bubble[i].dy = Math.sin(bubble[i].angle)
    bubble[i].x += bubble[i].dx / 10 * s
    bubble[i].y += bubble[i].dy / 10 * s
    bubble[i].angle += random(-.1, .1)
    
    if (bubble[i].x >= window.innerWidth) {
        bubble[i].angle = 180
    }
    else if (bubble[i].x <= 0){
        bubble[i].angle = 0
    }
    else if (bubble[i].y >= window.innerHeight){
        bubble[i].angle = 270
    }
    else if (bubble[i].y <= 0){
        bubble[i].angle = 90
    }
  }

  let input = document.querySelector("#nBalls").value
  if (input > 2000) {
    input = 2000
    document.querySelector("#nBalls").value = 2000
  }
  n = input

  let input2 = document.querySelector("#sBalls").value
  if (input2 > 100) {
    input2 = 100
    document.querySelector("#sBalls").value = 100
  }
  if (input2 < 0) {
    input2 = 0
    document.querySelector("#sBalls").value = 0
  }
  s = input2
}