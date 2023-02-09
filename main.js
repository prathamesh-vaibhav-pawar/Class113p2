image = ""

function setup(){
    Canvas = createCanvas(640,500)
    Canvas.position(360,250)
    img = createCapture(VIDEO)
    img.hide()
}
function draw(){
    image(img,0,0,640)
}
function take_sanpshot(){
    save("Snap.png")
}
