

function countdown(x) {
    let secondsRemaining = x;
    let secondsInterval = setInterval(function(){
        if(secondsRemaining <= 0){
            clearInterval(secondsInterval);
            console.log("DONE!");
        } else {
            console.log(secondsRemaining);
        }
        secondsRemaining -= 1;
    }, 1000);
}

// Note: randomGameV1 (version #1) returns values greater than 0.75 
// I assume it's because the Math.random() function is running two separate times, both independent of each other

function randomGameV1() {
    let attemptNumber = 1;
    let randomInterval = setInterval(function(){
        if(Math.random() >= 0.75){
            clearInterval(randomInterval);
            console.log("Number of tries it took: " + (attemptNumber - 1));
        } else {
            console.log("Attempt #" + attemptNumber, Math.random());
        }
        attemptNumber += 1;
    }, 1000);
}

// Note: randomGameV2 (version #2) returns the same random value over and over
// I assume it's because I have the Math.random() function stored in a variable

function randomGameV2() {
    let attemptNumber = 1;
    let randomNumber = Math.random();
    let randomInterval = setInterval(function(){
        if(randomNumber >= 0.75){
            clearInterval(randomInterval);
            console.log("Number of tries it took: " + (attemptNumber - 1));
        } else {
            console.log("Attempt #" + attemptNumber, randomNumber);
        }
        attemptNumber += 1;
    }, 1000);
}
