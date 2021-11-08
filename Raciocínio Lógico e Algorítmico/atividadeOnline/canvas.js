var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window. innerHeight 

const c = canvas.getContext('2d') 

let x = 300
let y = 300
let raio = 50

function bola (x, y, raio) {
    c.beginPath()
    c.arc(x, y, raio, 0, Math.PI*2, false)
    c.strokeStyle = 'blue'
    c.fillStyle = 'blue'
    c.fill()
    c.stroke()
}

canvas.addEventListener('keydown', function(e){
    switch(e.keyCode) {
        case 37:
            console.log('ESQUERDA')
            x = x - 10
        break
        case 38:
            console.log('CIMA')
            y = y - 10
        break
        case 39:
            console.log('DIREITA')
            x = x + 10
        break
        case 40:
            console.log('BAIXO')
            y = y + 10
        break
        default:
            console.log('ERROOOU')
    }
    
})

setInterval(function(){
    c.clearRect(0, 0, innerWidth, innerHeight)
    bola(x,y,raio)}, 1000/60)


