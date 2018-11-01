

// * There will be four crystals displayed as buttons on the page.

var userWins = 0;
var userLoses = 0;
var guesses= 0;
var totalScore = 0;
var userGuess = "";
var targetNumber = 0;
var userNumber = 0;

console.log("Getting Started");

function reset() {
    $('#crystalsDiv').empty()
    userNumber = 0;
    $("#userNumber").text(userNumber)
    targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    document.getElementById("targetNumber").innerHTML = targetNumber;
    genCrystals()

}
var targetNumber;

function genCrystals(params) {
     //forloop for generating crystals
     //crystal image
     //store random num between 1-12
     // id for each crystal so we can click on them
     //height and width
     for (var i = 0; i < 4; i++) {
        var genCrystal = $('<div class="col-md-3"><img class="gemClick" id="gem' + i + '"src="./assets/images/gem' + i + '.png" data-value="' + (Math.floor(Math.random() * 12) + 1) + '" alt="gem2" class="img-thumbnail" height="160px" width="150px"></div>')
        //find an id to append all our fancy crystals to
        $('#crystalsDiv').append(genCrystal)
     }
}

function startGame() {
    targetNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    document.getElementById("targetNumber").innerHTML = targetNumber;
    console.log(targetNumber);
    genCrystals()
    
}
startGame();

$("#crystalsDiv").on("click", ".gemClick" , function(){
    // Use parseInt to convert our string representation of numbers into actual integers
        //get the gem
            //data-value that hold the gem number
            //coverth that into a string with parse int
    var gemClick = parseInt($(this).attr('data-value'))

    console.log(gemClick)
    userNumber = userNumber + gemClick;
    console.log(userNumber, 'THIS IS USER NUMBER');
    $("#userNumber").text(userNumber)
    //document.getElemenById('userNumber').innerHTML = usernumber
    yourNumber()
})

console.log("test1");

function yourNumber () {
    if (userNumber > targetNumber) {
        alert("Sorry not your day sucker!")
        userLoses++;
        $("#losses").text(userLoses);
        reset()
        return;
    } 
    else if (userNumber === targetNumber) {
        alert("Winner Winner Chicken Dinner");
        userWins++;
        $("#wins").text(userWins);
        reset()
        return;
    }
    console.log("test2");
};
