
// Create canvas variable
var canvas= new fabric.Canvas('myCanvas');
//Set initial positions for ball and hole images.
bally=0;
ballx=0;
holey=400;
holex=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromUrl("golf-h.png", function(Img){
holeobj=Img;
holeobj.scaleToWidth(50);
holeobj.scaleToHeight(50);
holeobj.set({
top:holey,left:holex


});
canvas.add(holeobj);
	});
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromUrl("ball.png", function(Img){
		ballobj=Img;
		ballobj.scaleToWidth(50);
		ballobj.scaleToHeight(50);
		ballobj.set({
		top:bally,left:bally
		
		
		});
		canvas.add(ballobj);
			});
		
		}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
if((ballx==holex)&&(bally==holey)){
	canvas.remove(ballobj);
document.getElementById("hd3").innerHTML="you have won";
document.getElementById("myCanvas").style.borderColor="red";

};
	
	
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	
	
	function up()
	{
		// Write a code to move ball upward.
		if(bally >=5){
			bally=bally+block_image_height;
			canvas.remove(ballobj);
			new_image();}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(bally <=450){
bally=bally+block_image_height;
canvas.remove(ballobj);
new_image();
		 }

	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			bally=bally+block_image_width;
			canvas.remove(ballobj);
			new_image();

		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
			bally=bally+block_image_width;
canvas.remove(ballobj);
new_image();
		}
	}
	
}
