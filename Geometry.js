function setup() {
    // Crea un plano 2d 400 ancho * 400 largo de color negro
    createCanvas(400, 400)
}

// No para de dibujar
function draw() {
    background(0)

    // Centrar con x=200 y=200
    const vector = {
        x: mouseX,
        y: mouseY
    }
    
    // Cast rayos
    for (let i = 1; i < 400; i++) {
        for (let k = 1; k < 500; k += 75) {
            stroke('rgba(255, 255, 255, .007750)')
            line(vector.x, vector.y, k, i)
        }
    }
}
