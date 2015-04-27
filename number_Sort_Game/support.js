function drawboard(board)
{
    document.getElementById("_body").removeChild(document.getElementById("board"));
    var $newBoard=document.createElement("div");
    $newBoard.setAttribute("id","board");
    document.getElementById("_body").appendChild($newBoard);
    for(var i=0;i<board.length;i++)
    {
        for(var j=0;j<board[i].length;j++)
        {
            var boxCell=document.createElement("div");
            boxCell.setAttribute("id","box-"+i+"-"+j);
            boxCell.setAttribute("class","box");
            $newBoard.appendChild(boxCell);
            if(board[i][j]==0)
            {
                boxCell.style.backgroundColor="white";
                boxCell.style.top=i*100+"px";
                boxCell.style.left=j*100+"px";
                boxCell.style.height="98px";
                boxCell.style.width="98px";
            }
            else
            {
                boxCell.style.backgroundColor=colors[index];
                boxCell.innerHTML=board[i][j];
                boxCell.style.height="98px";
                boxCell.style.width="98px";
                boxCell.style.top=i*100+"px";
                boxCell.style.left=j*100+"px";
            }
        }
    }
}

function canMoveLeft(board)
{
    for(var i=0;i<board.length;i++)
    {
        for(var j=0;j<board[i].length;j++)
        {
            if(board[i][j]==0&&j==(board[i].length-1))
            {
                return false;
            }
        }
    }
    return true;
}
function canMoveRight(board)
{
    for(var i=0;i<board.length;i++)
    {
        for(var j=0;j<board[i].length;j++)
        {
            if(board[i][j]==0&&j==0)
            {
                return false;
            }
        }
    }
    return true;
}
function canMoveUp(board)
{
    for(var i=0;i<board.length;i++)
    {
        for(var j=0;j<board[i].length;j++)
        {
            if(board[i][j]==0&&i==(board.length-1))
            {
                return false;
            }
        }
    }
    return true;
}
function canMoveDown(board)
{
    for(var i=0;i<board.length;i++)
    {
        for(var j=0;j<board[i].length;j++)
        {
            if(board[i][j]==0&&i==0)
            {
                return false;
            }
        }
    }
    return true;
}
function boardMoveUp(board)
{
    for(var i=0;i<board.length;i++)
    {
        for(var j=0;j<board[i].length;j++)
        {
            if(board[i][j]==0)
            {
                board[i][j]=board[i+1][j];
                board[i+1][j]=0;
                return;
            }
        }
    }
}
function boardMoveDown(board)
{
    for(var i=0;i<board.length;i++)
    {
        for(var j=0;j<board[i].length;j++)
        {
            if(board[i][j]==0)
            {
                board[i][j]=board[i-1][j];
                board[i-1][j]=0;
                return;
            }
        }
    }
}
function boardMoveLeft(board)
{
    for(var i=0;i<board.length;i++)
    {
        for(var j=0;j<board[i].length;j++)
        {
            if(board[i][j]==0)
            {
                board[i][j]=board[i][j+1];
                board[i][j+1]=0;
                return;
            }
        }
    }
}
function boardMoveRight(board)
{
    for(var i=0;i<board.length;i++)
    {
        for(var j=0;j<board[i].length;j++)
        {
            if(board[i][j]==0)
            {
                board[i][j]=board[i][j-1];
                board[i][j-1]=0;
                return;
            }
        }
    }
}
function checkWin(board)
{
    var count=0;
    for(var i=0;i<board.length;i++)
    {
        for(var j=0;j<board[i].length;j++)
        {
            if(board[i][j]==init_board[i][j])
            {
              count++;
            }
        }
    }
    if(count==board.length*board.length-1)
    {
        alert("You are the WINNER!");
    }
}

function init_game(board)
{
    var count=0;
    var tempArray=[];
    for(var i=0;i<board.length;i++)
    {
        for(var j=0;j<board[i].length;j++)
        {
            
        }
    }
}

function getScore(score)
{
    document.getElementById("score").childNodes[1].innerHTML=score;
}

function randomBoard(board)
{
   var row,col;
   for(var i=0;i<board.length;i++)
   {
       for(var j=0;j<board[i].length;j++)
       {
           if(board[i][j]==0)
           {
               row=i;
               col=j;
           }
       }
   }
   var i=0;
   while(i<randomTimes)
   {
       randomNum.push(Math.floor(Math.random()*4));
       i++;
   }
   for(var i=0;i<randomNum.length;i++)
   {
       switch(randomNum[i])
       {
           case 0:
           if(canMoveUp(board))
           {
               boardMoveUp(board);
           }
           else
           {
               randomNum[i]=null;
           }
           break;
           case 1:
           if(canMoveRight(board))
           {
               boardMoveRight(board);
           }
           else
           {
               randomNum[i]=null;
           }
           break; 
           case 2:
           if(canMoveDown(board))
           {
               boardMoveDown(board);
           }
           else
           {
               randomNum[i]=null;
           }
           break; 
           case 3:
           if(canMoveLeft(board))
           {
               boardMoveLeft(board);
           }
           else
           {
               randomNum[i]=null;
           }
           break; 
       }
   }
   drawboard(board);
}