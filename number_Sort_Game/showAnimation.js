function moveRightAnimation(board){
       var x;
       var y;
       for(var i=0;i<board.length;i++)
       {
           for(var j=0;j<board[i].length;j++)
           {
               if(board[i][j]==0)
               {
                   x=i;
                   y=j;
                   break;
               }
           }
       }
       var cell=document.getElementById("box-"+x+"-"+y);
       cell.style.zIndex="1000";
       var count=100*y;
       var time=setInterval(function()
       {
           count+=5;
           cell.style.left=count+"px";
           if(count>=100*(y+1))
           {
               clearInterval(time);
           }
       },15)
}
function moveLeftAnimation(board){
       var x;
       var y;
       for(var i=0;i<board.length;i++)
       {
           for(var j=0;j<board[i].length;j++)
           {
               if(board[i][j]==0)
               {
                   x=i;
                   y=j;
                   break;
               }
           }
       }
       var cell=document.getElementById("box-"+x+"-"+y);
       cell.style.zIndex="1000";
       var count=100*y;
       var time=setInterval(function()
       {
           count-=5;
           cell.style.left=count+"px";
           if(count<=100*(y-1))
           {
               clearInterval(time);
           }
       },15)
}
function moveUpAnimation(board){
       var x;
       var y;
       for(var i=0;i<board.length;i++)
       {
           for(var j=0;j<board[i].length;j++)
           {
               if(board[i][j]==0)
               {
                   x=i;
                   y=j;
                   break;
               }
           }
       }
       var cell=document.getElementById("box-"+x+"-"+y);
       cell.style.zIndex="1000";
       var count=100*x;
       var time=setInterval(function()
       {
           count-=5;
           cell.style.top=count+"px";
           if(count<=100*(x-1))
           {
               clearInterval(time);
           }
       },15)
}
function moveDownAnimation(board){
       var x;
       var y;
       for(var i=0;i<board.length;i++)
       {
           for(var j=0;j<board[i].length;j++)
           {
               if(board[i][j]==0)
               {
                   x=i;
                   y=j;
                   break;
               }
           }
       }
       var cell=document.getElementById("box-"+x+"-"+y);
       cell.style.zIndex="1000";
       var count=100*x;
       var time=setInterval(function()
       {
           count+=5;
           cell.style.top=count+"px";
           if(count>=100*(x+1))
           {
               clearInterval(time);
           }
       },15)
}