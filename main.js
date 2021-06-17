var canvas = new fabric.canvas('myCanvas');
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object= "";
var block_image_object= "";
function player_update()
{
fabric.Image.fromURL("player.png", function(Img) {
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);

    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_image_object);

    });

}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
console.log("p and shift pressed together");
block_image_width = block_image_width + 10;
block_image_height = block_image_height + 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_Height").innerHTML = block_image_height;
}
if(e.shiftKey && keyPressed == '77')
{
    console.log("m and shift pressed together");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}

if (keyPressed == '38')
{
up();
console.log("up");
}
if (keyPressed == '40')
{
down();
console.log("down");
}
if (keyPressed == '37')
{
left();
console.log("left");
}
if (keyPressed == '39')
{
right();
console.log("right");
}
if (keyPressed == '65')
{
new_image('dad image1.jpg');
console.log("a");
}
if (keyPressed == '66')
{
new_image('dad image 2.jpg');
console.log("b");
}
if (keyPressed == '67')
{
new_image('dad image 3.jpg');
console.log("c");
}
if (keyPressed == '67')
{
new_image('dad image 4.jpg');
console.log("d");
}
if (keyPressed == '68')
{
new_image('dad image 5.jpg');
console.log("e");
}
if (keyPressed == '69')
{
new_image('dad image 6.jpg');
console.log("f");
}
if (keyPressed == '70')
{
new_image('dad image 7.jpg');
console.log("g");
}
if (keyPressed == '71')
{
new_image('dad image 8.jpg');
console.log("h");
}
if (keyPressed == '72')
{
new_image('dad image 9.jpg');
console.log("i");
}
if (keyPressed == '73')
{
new_image('dad image 10.jpg');
console.log("j");
}
if (keyPressed == '74')
{
new_image('dad image 11.jpg');
console.log("k");
}
if (keyPressed == '75')
{
new_image('dad image 12.jpg');
console.log("l");
}
if (keyPressed == '76')
{
new_image('dad image 13.jpg');
console.log("m");
}
if (keyPressed == '77')
{
new_image('dad image 14.jpg');
console.log("n");
}
if (keyPressed == '78')
{
new_image('dad image 15.jpg');
console.log("o");
}
if (keyPressed == '79')
{
new_image('dad image16.jpg');
console.log("p");
}
if (keyPressed == '80')
{
new_image('dad image17.jpg');
console.log("q");
}
if (keyPressed == '81')
{
new_image('dad image 18.jpg');
console.log("r");
}
if (keyPressed == '82')
{
new_image('dad image back ground.jpg');
console.log("s");
}
}

