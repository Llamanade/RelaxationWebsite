let sphere
let height = window.innerHeight
let width = window.innerWidth
let d = 1
let timeout
let img;
let img2;

function preload() {
    img = loadImage('/images/pufferfish.png');
    img2 = loadImage('/images/underwater.jpg');

}

function setup() {
    createCanvas(window.innerWidth - 20, window.innerHeight - 60);
    sphere = new Sphere()
}

function draw() {
    createCanvas(window.innerWidth - 20, window.innerHeight - 60);
    background(255)
    height = window.innerHeight
    width = window.innerWidth
    image(img2, 0, 0, window.innerWidth - 20, window.innerHeight - 60)
    sphere.display()
    title()
    sphere.x = width / 2
    sphere.y = height / 2

    fill(0)
    noStroke()
    textSize(20)
    textAlign(CENTER)

    if (width > height) {
        if (sphere.height >= height / 2) {
            d = 2
            timeout = setTimeout(zero, 7000)
            sphere.height -= 1
            sphere.width -= 1
        }
        if (sphere.height <= height / 4) {
            d = 2
            timeout = setTimeout(one, 3000)
            sphere.height += 1
            sphere.width += 1
        }
    }
    else {
        if (sphere.width >= width / 2) {
            d = 2
            timeout = setTimeout(zero, 7000)
            sphere.width -= 1
            sphere.height -= 1
        }
        if (sphere.width <= width / 4) {
            d = 2
            timeout = setTimeout(one, 3000)
            sphere.width += 1
            sphere.height += 1
        }
    }

    if (d == 1) {
        sphere.expand()
    }
    if (d == 0) {
        sphere.contract()
    }
}



class Sphere {
    constructor() {
        this.x  = width / 2
        this.y = height / 2
        if (width > height) {
            this.height = height / 4
            this.width = height / 4
        }
        else {
            this.width = width / 4
            this.height = width / 4
        }
        
        if (width > height) {
            this.dy = height / 1000
            this.dx = height / 1000
        }
        else {
            this.dx = width / 1000
            this.dy = width / 1000
        }
    }

    display() {
        image(img, this.x - (this.width / 2), this.y - (this.height / 2), this.width, this.height)
    }

    expand() {
        this.width += this.dx
        this.height += this.dy
    }

    contract() {
        this.width -= this.dx / 2
        this.height -= this.dy / 2
    }
}

function zero() {
    d = 0
}

function one() {
    d = 1
}

function title() {
    fill(255)
    noStroke()
    textSize(sphere.width / 10)
    textAlign(CENTER)

    if (d == 2) {
        if (sphere.height >= height / 2.1) {
            fill(0)
            textSize(30)
            textAlign(CENTER)
            text("Hold for 7 seconds", width / 2, (height / 4) - 10)
        }
        else {
            fill(0)
            textSize(30)
            textAlign(CENTER)
            text("Hold for 3 seconds", width / 2, (height / 4) - 10)
        }
        
    }
    else if (d == 1) {
        fill(0)
        textSize(30)
        textAlign(CENTER)
        text("Breathe in for 4 seconds", width / 2, (height / 4) - 10)
    }
    else if(d == 0) {
        fill(0)
        textSize(30)
        textAlign(CENTER)
        text("Breathe out for for 8 seconds", width / 2, (height / 4) - 10)
    }
}