var canvas = document.querySelector('canvas')  

canvas.width = window.innerWidth
canvas.height = window. innerHeight   // Definição dos limites da tela

const c = canvas.getContext('2d') 

let x = 200    // Coordenada x onde o círculo iniciará
let y = 200    // Coordenada y onde o círculo iniciará
let raio = 50  // Tamanho inicial do raio

function bola () { // Função utilizada para desenhar o círculo
    c.beginPath()
    c.arc(x, y, raio, 0, Math.PI*2, false)
    c.strokeStyle = 'blue'
    c.fillStyle = 'blue'
    c.fill()
    c.stroke()

    if (x > innerWidth - raio || x < raio || y > innerHeight - raio || y < raio) { // Caso o círculo
        x = innerWidth / 2 
        y = innerHeight / 2
        alert('Volte para o centro!')
    }
}

canvas.addEventListener('keydown', function(e){ // Função que reconhece a tecla pressionada e executa 
    switch(e.keyCode) {
        case 37: //Valores relacionados ao keycode
            console.log('ESQUERDA')
            x = x - 3
        break
        case 38:
            console.log('CIMA')
            y = y - 3
        break
        case 39:
            console.log('DIREITA')
            x = x + 3
        break
        case 40:
            console.log('BAIXO')
            y = y + 3
        break
        default:
            console.log('COMANDO INVÁLIDO')
    }
    
})

setInterval(function(){ //Função que permite o loop de limpeza da tela e desenho do circulo criando a ilusão de movimento
    c.clearRect(0, 0, innerWidth, innerHeight)
    bola()}, 1000/60)




