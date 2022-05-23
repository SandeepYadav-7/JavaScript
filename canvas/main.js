console.log('Hello World!');
window.onload = () => {
  const canvas = document.getElementById("canvas");
}

const ctx = canvas.getContext("2d");
console.log(ctx);
console.log(canvas);

// ============== NOTES =================

// basic style
/*
ctx.fillStyle = "red"
ctx.fill()

ctx.strokeStyle = "#fff"
ctx.stroke()
*/


// basic shapes
/*
ctx.beginPath()
ctx.moveTo(x, y)
ctx.lineTo(x, y)
ctx.stroke()

// x, y, radius, startAngle, endEngle
ctx.arc(100, 100, 100, 0, Math.PI * 2)
ctx.fill()

ctx.rect(x, y, width, height)
ctx.fill()

// x, y, radiusX, radiusY, rotation, startAngle, endAngle
ctx.ellipse(150, 150, 50, 50, 0, 0, Math.PI * 2)
ctx.fillStyle = "#f00"
ctx.fill()
ctx.stroke()
*/


// loading an image to the canvas
/*
var img = new Image();
img.src = "images/image.jpeg";

img.onload = () => {
  ctx.drawImage(
    img,
    (canvas.width - img.width) / 2,
    (canvas.height - img.height) / 2
  )
}
*/


// adding some text
/*
var text = "My name is Eren Yaeger"
ctx.font = "20px sans-serif"
ctx.fillText(text, 100, 100, 100)
ctx.stroke()
*/
// ======================================



// circle animation...!!
/*
var size = 25
var step = 10
var centerX = 175 // (canvas.width - size) / 2
var centerY = 175 // (canvas.height - size) / 2

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  ctx.beginPath()
  ctx.arc(centerX, centerY, size, 0, Math.PI * 2)
  ctx.fillStyle = "#f00"
  ctx.fill()
  
  size += step
  if (size >= 100 || size <= 25){
    step *= -1
  }
  // window.requestAnimationFrame(draw)
}
// draw()
window.setInterval(draw, 50)
*/


// square animation...!!
/*
var step = 10
var width = 50
var height = 50
var x = 0
var y = (canvas.height - height) / 2

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  
  ctx.beginPath()
  ctx.rect(x, y, width, height)
  ctx.fillStyle = '#f00'
  ctx.fill()
  
  x += step
  if (x>= canvas.width){
    x = -100
  }
  
  requestAnimationFrame(draw)
}

draw()
*/


/*
var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.


window.location.href=image;
*/



ctx.arc(175, 175, 50, 0, Math.PI * 2)
ctx.shadowColor = "rgba(0, 0, 0, .4)"
ctx.shadowOffsetX = 5
ctx.shadowOffsetY = 5
ctx.shadowBlur = 13
ctx.fillStyle = "#af4fff"
ctx.fill()



ctx.beginPath()
ctx.createLinearGradient(0, 0, canvas.width, canvas.height)






var img_url = canvas.toDataURL("image/png")

var image = document.getElementById("image")
var button = document.getElementById("download_btn")
button.href = img_url
// image.src = img_url
// console.log(image.src)

function btn(){
  console.log("working... 1")
  if (image.src != img_url) {
    image.style.display = "block"
    image.src = img_url
    /* button.src = img_url */
    console.log("working... 2")
  }
  else {
    image.style.display = "none"
    image.src = "#"
    /* button.src = "#" */
    console.log("working... 3")
  }
}


/*
var img = new Image();
img.src = img_url;
img.onload = () => {
  ctx.drawImage(
    img,
    100, // (canvas.width - img.width) / 2,
    100 // (canvas.height - img.height) / 2
  )
}
*/
