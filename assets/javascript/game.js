var runningScore = []
var totalSum = []
var resetButton

//function startGame() { 

var randomNumber = Math.floor(Math.random() * 100 + 20);
console.log(randomNumber);
document.getElementById("beatThis").innerHTML = (randomNumber)

$(document).ready(function () {

         

    var buttonNumber = Math.floor(Math.random() * 12 + 1);

    $("#button-number1, #button-number2, #button-number3, #button-number4").on("click", function () {
        var buttonNumber = Math.floor(Math.random() * 12 + 1)
        $("#button-number").html(buttonNumber);
        runningScore.push(buttonNumber);

        var indexValue = runningScore.length;
        var totalSum = 0;
        for (var x = 0; x < indexValue; x++) {
            totalSum += runningScore[x];
        }

        if (totalSum === randomNumber) {
            alert("You win!");
        }

        else if (totalSum >= randomNumber) {
            alert("You lose!!");
            confirm("Play Again?")
            if (confim=true){
                location.reload();
            }
            
            
            
            
        }
        
        
           

        console.log(buttonNumber)
        console.log(totalSum)
        document.getElementById("current").innerHTML = (totalSum)








    });




});