let sphere
let height = window.innerHeight
let width = window.innerWidth
let d = 1
let timeout

function setup() {
    createCanvas(window.innerWidth - 20, window.innerHeight - 60);
    sphere = new Sphere()
}

function draw() {
    createCanvas(window.innerWidth - 20, window.innerHeight - 60);
    background(204, 204, 255)
    sphere.display()
    title()
    height = window.innerHeight
    width = window.innerWidth
    sphere.x  = width / 2
    sphere.y = height / 2

    if (width > height) {
        if (sphere.r >= height / 2) {
            d = 2
            timeout = setTimeout(zero, 7000)
            sphere.r -= 1
        }
        if (sphere.r <= height / 4) {
            d = 2
            timeout = setTimeout(one, 3000)
            sphere.r += 1
        }
    }
    else {
        if (sphere.r >= width / 2) {
            d = 2
            timeout = setTimeout(zero, 7000)
            sphere.r -= 1
        }
        if (sphere.r <= width / 4) {
            d = 2
            timeout = setTimeout(one, 3000)
            sphere.r += 1
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
            this.r = height / 4
        }
        else {
            this.r = width / 4
        }
        
        if (width > height) {
            this.dr = height / 1000
        }
        else {
            this.dr = width / 1000
        }
    }

    display() {
        fill(60, 114, 201)
        circle(this.x, this.y, this.r)
    }

    expand() {
        this.r += this.dr
    }

    contract() {
        this.r -= this.dr / 2
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
    textSize(sphere.r / 10)
    textAlign(CENTER)

    if (d == 2) {
        if (sphere.r >= height / 2.1) {
            text("Hold", width / 2, (height / 2) - (sphere.r / 15))
            text("for 7 seconds", width / 2, (height / 2) + (sphere.r / 15))
        }
        else {
            text("Hold", width / 2, (height / 2) - (sphere.r / 15))
            text("for 3 seconds", width / 2, (height / 2) + (sphere.r / 15))
        }
        
    }
    else if (d == 1) {
        text("Breathe in", width / 2, (height / 2) - (sphere.r / 15))
        text("for 4 seconds", width / 2, (height / 2) + (sphere.r / 15))
    }
    else if(d == 0) {
        text("Breathe out", width / 2, (height / 2) - (sphere.r / 15))
        text("for 8 seconds", width / 2, (height / 2) + (sphere.r / 15))
    }
}

function change() {
    x++
}