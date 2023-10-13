var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");
ctx.lineWidth = 10;

let boxheight = 185;
let offset = 10;
let Xcoordinate;
let Ycoordinate;
let squarefilled=0;
let win=false;

let turnX = true;

let winArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let text = [];

for (let i = 1; i <= 2; i++) {
  Xcoordinate = i * boxheight;
  Ycoordinate = 0;
  ctx.moveTo(Xcoordinate, Ycoordinate);
  ctx.lineTo(Xcoordinate, c.height);
  ctx.strokestyle = "blue";
  ctx.stroke();
}

for (let i = 1; i <= 2; i++) {
  Xcoordinate = 0;
  Ycoordinate = i * boxheight;
  ctx.moveTo(Xcoordinate, Ycoordinate);
  ctx.lineTo(c.width, Ycoordinate);
  ctx.strokestyle = "blue";
  ctx.stroke();
}
for(let i=1;i<=9;i++)
{
  var canvas = document.createElement('canvas');
  canvas.id     = `Canvas${i}`;
  canvas.width  = 185;
  canvas.height = 185;
  canvas.style.zIndex   = 8;
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(canvas);
}

let gameover = true;


// document.addEventListener("click", (event) => {

//   let rect = c.getBoundingClientRect();
//   let x = event.clientX - rect.left;
//   let y = event.clientY - rect.top;
//   squarefilled++;
//   let turn = checkturn();
 
//   if(squarefilled<9)
//   {
//   if (turn == "X") {
//     drawCross(x, y);
//     text.push("X");
//   }
//   else {
//     drawCircle(x, y);
//     text.push("O");
//   }
//   }
//   else
//   {
   
//      checkWin();
//   }
// });

document.getElementById(`canvas${i}`).onclick=hello;
var hello = function()
{
    alert(this.id);
}

// document.addEventListener("click", (this.id) => {
  
  
//   squarefilled++;
//   let turn = checkturn();
 
//   if(squarefilled<9)
//   {
//   if (turn == "X") {
//     drawCross(x, y);
//     text.push("X");
//   }
//   else {
//     drawCircle(x, y);
//     text.push("O");
//   }
//   }
//   else
//   {
   
//      checkWin();
//   }
// });

function checkWin(){
    for(var i=0;i<8;i++)
    {
        let index=winArray[i][0];
        //window.alert(text[index]);
        if(text[winArray[i][0]]==text[winArray[i][1]] && text[winArray[i][1]]==text[winArray[i][2]])
        {
            win=true;
             //window.alert(text[winArray[i][0]]);
             break;
        }
    }
    if(win)
     {
        document.getElementById("gameState").innerText = `You Won ${text[winArray[i][0]]}`;
      document.getElementById("gameovertext").innerText = "Congratulations";
        document.getElementById("gameoverscreen").style.display = "block";
        document.getElementById("myCanvas").style.display = "None";
        document.getElementById("restart").innerText = "Play Again";

      }
   else
   {
    document.getElementById("gameState").innerText = "You Loose";
    document.getElementById("gameovertext").innerText = "Game Over";
        document.getElementById("gameoverscreen").style.display = "block";
        document.getElementById("myCanvas").style.display = "None";
        document.getElementById("restart").innerText = "Play Again";

      
   }
}

function drawCircle(x, y) {
 // window.alert("0");
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, Math.PI * 2);
  ctx.fillStyle = " #88880d";
  ctx.strokestyle = "balck";
  ctx.fill();
  ctx.closePath();
  ctx.stroke();
}

function drawCross(x, y) {

           
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, Math.PI * 2);
  ctx.fillStyle = "pink";
  ctx.strokestyle = "red";
  ctx.fill();
  ctx.closePath();
  ctx.stroke();
// cxt.beginPath();
//             cxt.moveTo(x-5,y-5);
            
//             cxt.lineTo(x+10,y-10);
//             cxt.moveTo(x+5,y+5);
//             cxt.lineTo(x-10,y-10);
//             cxt.stroke();
//             cxt.closePath();
}


function checkturn() {
    if(squarefilled<9)
    {
  var z = turnX ? "X" : "O";
  turnX = turnX ? false : true;
  return z;
    }
}
