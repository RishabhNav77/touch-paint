var mouseevent="empty";
var last_x,last_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    mouseevent="mousedown";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseevent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseevent="mouseup";
}
canvas.addEventListener("mousemove",my_Mousemove);
function my_Mousemove(e) {
    current_x=e.clientX - canvas.offsetLeft;
    current_y=e.clientY - canvas.offsetTop;
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;

    if (mouseevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last position of x and y coordinate is =");
        console.log("x=" + last_x + ",y=" + last_y);
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_x,current_y);
        console.log("current position of x and y coordinate is =");
        console.log("x=" + current_x + ",y=" + current_y);
        ctx.stroke()
          }
    last_x = current_x;
    last_y = current_y;
}
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    var width=screen.width;
    new_width=screen.width - 150;
    new_height=screen.height - 300;
    if (width<992){
        document.getElementById("myCanvas").width=new_width;
        document.getElementById("myCanvas").height=new_height;
        document.body.style.overflow="hidden";

    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        
        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         last_position_of_y = e.touches[0].clientY - canvas.offsetTop;   
    }


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
            ctx.beginPath();
            ctx.strokeStyle=color;
            ctx.lineWidth=width_of_line;
            console.log("last position of x and y coordinate is =");
            console.log("x=" + last_position_of_x + ",y=" + last_position_of_y);
            ctx.moveTo(last_position_of_x,last_position_of_y);
            ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
            console.log("current position of x and y coordinate is =");
            console.log("x=" + current_position_of_touch_x + ",y=" + current_position_of_touch_y);
            ctx.stroke();
            last_position_of_x=current_position_of_touch_x;
            last_position_of_y=current_position_of_touch_y;   
    }

 function cleararea(){
     ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
 }
