var init_board=[
            [1,2,3,4],
            [5,6,7,8],
            [7,10,11,12],
            [13,14,15,0]
          ];

var board=[
            [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12],
            [13,14,15,0]
          ];

var score=0;

var randomNum=[];

var randomTimes=100;

window.onload=function()
{
    drawboard(board);
}

var callEventFunction=function(event)
{
    var e=event||window.event;
    switch(e.keyCode)
    {
        case 37:
        e.preventDefault();
        if(canMoveLeft(board))
        {
            document.onkeydown=null;
            boardMoveLeft(board);
            moveLeftAnimation(board);
            setTimeout("drawboard(board)",320);
            setTimeout("checkWin(board)",350);
            setTimeout(function(){
                document.onkeydown=callEventFunction;
            },355);
            score++;
            getScore(score);
        }
        break;
        case 38:
        e.preventDefault();
        if(canMoveUp(board))
        {
            document.onkeydown=null;
            boardMoveUp(board);
            moveUpAnimation(board);
            setTimeout("drawboard(board)",320);
            setTimeout("checkWin(board)",350);
            setTimeout(function(){
                document.onkeydown=callEventFunction;
            },355);
            score++;
            getScore(score);
        }
        break;
        case 39:
        e.preventDefault();
        if(canMoveRight(board))
        {
            document.onkeydown=null;
            boardMoveRight(board);
            moveRightAnimation(board);
            setTimeout("drawboard(board)",320);//要传入函数的字符串！！
            setTimeout("checkWin(board)",350);
            setTimeout(function(){
                document.onkeydown=callEventFunction;
            },355);
            score++;
            getScore(score);
        }
        break;
        case 40:
        e.preventDefault();
        if(canMoveDown(board))
        {
            document.onkeydown=null;
            boardMoveDown(board);
            moveDownAnimation(board);
            setTimeout("drawboard(board)",320);
            setTimeout("checkWin(board)",350);
            setTimeout(function(){
                document.onkeydown=callEventFunction;
            },355);
            score++;
            getScore(score);
        }
        break;
        default:
        e.preventDefault();
        break;
    }
}

document.onkeydown=callEventFunction;
