var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window. innerHeight 

var c = canvas.getContext('2d') 

c.beginPath()
c.arc(100, 200, 50, 0, Math.PI*2, false)
c.strokeStyle = 'blue'
c.fillStyle = 'blue'
c.fill()
c.stroke()


