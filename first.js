
var times= 0;
// var crossImage = "/TIC_TAC_TOE/cross.png";
var ticTacToe= document.querySelector("#ticTacToeBox");
ticTacToe.addEventListener("click",function(event){
    times++;
    console.log(times);
    console.log(event);
    if(times%2!==0)
    {
        console.log(event.target);
        event.target.style.backgroundImage= "url('./cross.png')";
        event.target.style.backgroundSize="cover";
        event.target.classList.add("cross");
        // var cross = event.target.innerHTML;
    }
    else{
        console.log(event.target);
        event.target.style.backgroundImage= "url('./circle.png')";
        event.target.style.backgroundSize="cover";
        event.target.classList.add("circle");
    }
    

    






    var buttonOne = document.querySelector(".one");
    var buttonTwo = document.querySelector(".two");
    var buttonThree = document.querySelector(".three");
    var buttonFour = document.querySelector(".four");
    var buttonFive = document.querySelector(".five");
    var buttonSix = document.querySelector(".six");
    var buttonSeven = document.querySelector(".seven");
    var buttonEight = document.querySelector(".eight");
    var buttonNine = document.querySelector(".nine");

    if(buttonOne.classList.contains("cross") && buttonTwo.classList.contains("cross") && buttonThree.classList.contains("cross")){
        document.querySelector("#winner").innerHTML='Player 1 wins!</br>(Refresh to restart the game)';
    }
    else if (buttonFour.classList.contains("cross") && buttonFive.classList.contains("cross") && buttonSix.classList.contains("cross")){
        document.querySelector("#winner").innerHTML='Player 1 wins!</br>(Refresh to restart the game)';
    }
    else if (buttonSeven.classList.contains("cross") && buttonEight.classList.contains("cross") && buttonNine.classList.contains("cross")){
        document.querySelector("#winner").innerHTML='Player 1 wins!</br>(Refresh to restart the game)';
    }
    else if(buttonOne.classList.contains("cross") && buttonFour.classList.contains("cross") && buttonSeven.classList.contains("cross")){
        document.querySelector("#winner").innerHTML='Player 1 wins!</br>(Refresh to restart the game)';
    }
    else if(buttonTwo.classList.contains("cross") && buttonFive.classList.contains("cross") && buttonEight.classList.contains("cross")){
        document.querySelector("#winner").innerHTML='Player 1 wins!</br>(Refresh to restart the game)';
    }
    else if(buttonOne.classList.contains("cross") && buttonTwo.classList.contains("cross") && buttonThree.classList.contains("cross")){
        document.querySelector("#winner").innerHTML='Player 1 wins!</br>(Refresh to restart the game)';
    }
    else if(buttonThree.classList.contains("cross") && buttonSix.classList.contains("cross") && buttonNine.classList.contains("cross")){
        document.querySelector("#winner").innerHTML='Player 1 wins!</br>(Refresh to restart the game)';
    }
    else if(buttonOne.classList.contains("cross") && buttonFive.classList.contains("cross") && buttonNine.classList.contains("cross")){
        document.querySelector("#winner").innerHTML='Player 1 wins!</br>(Refresh to restart the game)';
    }
    else if(buttonThree.classList.contains("cross") && buttonFive.classList.contains("cross") && buttonSeven.classList.contains("cross")){
        document.querySelector("#winner").innerHTML='Player 1 wins!</br>(Refresh to restart the game)';
    }


    else if(buttonOne.classList.contains("circle") && buttonTwo.classList.contains("circle") && buttonThree.classList.contains("circle")){
        document.querySelector("#winner").innerHTML='Player 2 wins!</br>(Refresh to restart the game)'
    }
    else if (buttonFour.classList.contains("circle") && buttonFive.classList.contains("circle") && buttonSix.classList.contains("circle")){
        document.querySelector("#winner").innerHTML='Player 2 wins!</br>(Refresh to restart the game)';
    }
    else if (buttonSeven.classList.contains("circle") && buttonEight.classList.contains("circle") && buttonNine.classList.contains("circle")){
        document.querySelector("#winner").innerHTML='Player 2 wins!</br>(Refresh to restart the game)';
    }
    else if(buttonOne.classList.contains("circle") && buttonFour.classList.contains("circle") && buttonSeven.classList.contains("circle")){
        document.querySelector("#winner").innerHTML='Player 2 wins!</br>(Refresh to restart the game)';
    }
    else if(buttonTwo.classList.contains("circle") && buttonFive.classList.contains("circle") && buttonEight.classList.contains("circle")){
        document.querySelector("#winner").innerHTML='Player 2 wins!</br>(Refresh to restart the game)';
    }
    else if(buttonOne.classList.contains("circle") && buttonTwo.classList.contains("circle") && buttonThree.classList.contains("circle")){
        document.querySelector("#winner").innerHTML='Player 2 wins!</br>(Refresh to restart the game)';
    }
    else if(buttonThree.classList.contains("circle") && buttonSix.classList.contains("circle") && buttonNine.classList.contains("circle")){
        document.querySelector("#winner").innerHTML='Player 2 wins!</br>(Refresh to restart the game)';
    }
    else if(buttonOne.classList.contains("circle") && buttonFive.classList.contains("circle") && buttonNine.classList.contains("circle")){
        document.querySelector("#winner").innerHTML='Player 2 wins!</br>(Refresh to restart the game)';
    }
    else if(buttonThree.classList.contains("circle") && buttonFive.classList.contains("circle") && buttonSeven.classList.contains("circle")){
        document.querySelector("#winner").innerHTML='Player 2 wins!</br>(Refresh to restart the game)';
    }
    else if(times==9)
    {
        document.querySelector("#winner").innerHTML="Tie!</br>(Refresh to restart the game)";
    }
        
    
});

//     // console.log("Button 1" +buttonOne);
//     // if(buttonOne===buttonTwo===buttonThree)
//     // {
//     //     document.querySelector("#winner").innerHTML='Player 1 wins!</br>(Refresh to restart the game)'
//     // }

// })

// // document.querySelector("#winner").innerHTML='Tie!</br>(Refresh to restart the game)';


// for(var i=0;i<9;i++)
// {
// let count=true;
// document.querySelectorAll(".box")[i].addEventListener("click",function(event){
//     count=!count;
//     if(count){
//         this.innerHTML="xoxo";
//     }
//     else{
//         this.innerHTML="oxox";
//     }
// });
// }
