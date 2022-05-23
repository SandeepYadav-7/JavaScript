const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d")

canvas.style.display = "none"
canvas.width = 1000
canvas.height = 500

var width = canvas.width
var height = canvas.height


// drawing something on canvas
var radius = 100

ctx.beginPath()
ctx.arc(
  (width - (radius / 2)) / 2,
  (height - (radius / 2)) / 2,
  radius,
  0, 
  Math.PI * 2
)
ctx.shadowColor = "rgba(0, 0, 0, .4)"
ctx.shadowOffsetX = 5
ctx.shadowOffsetY = 5
ctx.shadowBlur = 13
ctx.fillStyle = "#af4fff"
ctx.fill()



function set_url(){
  return canvas.toDataURL("image/png")
}

const img = document.getElementById("image")
const download_btn = document.getElementById("download_btn")
img.src = set_url()
download_btn.href = set_url()

//console.log(img.src)
