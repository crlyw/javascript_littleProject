var colors=["hotpink","darkkhaki","green","orange","blue","yellow","red"];

var index=2

function oneDemensionArray(board)
{
   var arr=[];
   for(var i=0;i<board.length;i++)
    {
        for(var j=0;j<board[i].length;j++)
        {
            arr.push(board[i][j]);
        }
    }
    return arr;
}

function colorChange_1(board)
{
    var oneDemensionBoard=oneDemensionArray(board);
    for(var m=0;m<oneDemensionBoard.length;m++)
    {
        if(oneDemensionBoard[m]!=0){
            document.getElementsByClassName("box")[m].style.backgroundColor=colors[0];
        }
    }
    index=0;
}
function colorChange_2(board)
{
    var oneDemensionBoard=oneDemensionArray(board);
    for(var m=0;m<oneDemensionBoard.length;m++)
    {
        if(oneDemensionBoard[m]!=0){
            document.getElementsByClassName("box")[m].style.backgroundColor=colors[1];
        }
    }
    index=1;
}
function colorChange_3(board)
{
    var oneDemensionBoard=oneDemensionArray(board);
    for(var m=0;m<oneDemensionBoard.length;m++)
    {
        if(oneDemensionBoard[m]!=0){
            document.getElementsByClassName("box")[m].style.backgroundColor=colors[2];
        }
    }
    index=2;
}
function colorChange_4(board)
{
    var oneDemensionBoard=oneDemensionArray(board);
    for(var m=0;m<oneDemensionBoard.length;m++)
    {
        if(oneDemensionBoard[m]!=0){
            document.getElementsByClassName("box")[m].style.backgroundColor=colors[3];
        }
    }
    index=3;
}
function colorChange_5(board)
{
    var oneDemensionBoard=oneDemensionArray(board);
    for(var m=0;m<oneDemensionBoard.length;m++)
    {
        if(oneDemensionBoard[m]!=0){
            document.getElementsByClassName("box")[m].style.backgroundColor=colors[4];
        }
    }
    index=4;
}
function colorChange_6(board)
{
    var oneDemensionBoard=oneDemensionArray(board);
    for(var m=0;m<oneDemensionBoard.length;m++)
    {
        if(oneDemensionBoard[m]!=0){
            document.getElementsByClassName("box")[m].style.backgroundColor=colors[5];
        }
    }
    index=5;
}

function colorChange_7(board)
{
    var oneDemensionBoard=oneDemensionArray(board);
    for(var m=0;m<oneDemensionBoard.length;m++)
    {
        if(oneDemensionBoard[m]!=0){
            document.getElementsByClassName("box")[m].style.backgroundColor=colors[6];
        }
    }
    index=6;
}