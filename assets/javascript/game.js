var randomNumber = $("#rndNum");
var winNumber = $("#win");
var lossNumber = $("#loss");
var blueCrystal = $("#blueCrystal");
var redCrystal = $("#redCrystal");
var greenCrystal = $("#greenCrystal");
var purpleCrystal = $("#purpleCrystal");
var crystalPoints = $("#points");
var button = $(".button"); 
var winText = $("#win-text");

var sumPoints = 0;
var win = 0;
var loss = 0;
var blueNum = btnNum();
var redNum = btnNum();
var greenNum = btnNum();
var purpleNum = btnNum();

function randNum(){
    return (Math.floor((Math.random()*102)) + 19);
}

function btnNum(){
    return (Math.floor(Math.random()*12) + 1);
}

function compareSum() {
    if(sumPoints == randomNumber.text()){
        //console.log("win")
        win++;
        //console.log(win);
        winText.text("You Win!");
        winNumber.text(win);
        //$("#body").style.backgroundImage="url(../images/blue-crystal.png)";
        clearAll();
    }
    else if(sumPoints > randomNumber.text()){
        console.log("loss");
        loss++;
        //console.log("number of loss: "+loss);
        winText.text("You Lost!")
        lossNumber.text(loss);
        $("#body").css("background", "red");
        setTimeout(function(){
        debugger;
            $("#body").css("background-image", "(../images/just-waves.png)");            
        }, 1000)
        clearAll();
    }
}

function clearAll(){
    crystalPoints.empty();
    (randomNumber.text(randNum()));
    sumPoints = 0;
    blueNum = btnNum();
    redNum = btnNum();
    greenNum = btnNum();
    purpleNum = btnNum();
}

$(document).ready(function() {    

    (randomNumber.text(randNum()));

    console.log(randomNumber.text());

    blueCrystal.on("click", function(){
        winText.empty();
        blueCrystal.attr("value", blueNum);
        //console.log("blue crystal: " +blueCrystal.val());
        sumPoints += parseInt(blueCrystal.val());
        //console.log("sum: "+sumPoints);
        crystalPoints.text(sumPoints);
        compareSum();
    });

    redCrystal.on("click", function(){
        winText.empty();
        redCrystal.attr("value", redNum);
        //console.log("red crystal: " +redCrystal.val()); 
        sumPoints += parseInt(redCrystal.val()); 
        //console.log("sum: "+sumPoints);       
        crystalPoints.text(sumPoints);  
        compareSum();  
    });

    greenCrystal.on("click", function(){
        winText.empty();
        greenCrystal.attr("value", greenNum);
        //console.log("green crystal: " +greenCrystal.val());    
        sumPoints += parseInt(greenCrystal.val()); 
        //console.log("sum: "+sumPoints);
        crystalPoints.text(sumPoints);
        compareSum();
    });

    purpleCrystal.on("click", function(){
        winText.empty();
        purpleCrystal.attr("value", purpleNum);
        //console.log("purple crystal: " +purpleCrystal.val());
        sumPoints += parseInt(purpleCrystal.val());
        //console.log("sum: "+sumPoints);
        crystalPoints.text(sumPoints);
        compareSum();
    });

})
