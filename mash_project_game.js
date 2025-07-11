function mash() {
    return "You will live in a " + getHome() +
           ", travel to " + getTravelCount() + " countries" +
           ", own a " + getPets() +
           ", have a final occupation as " + occupation() +
           ", attend a college that starts with the letter " + futureCollegeInitial() +
           ", and the likelihood of you completing All Star Code is %" + ASC();
}

let result = mash();
console.log(result)

function randNumGenerator(int1){
   let randomNum = Math.random() * int1;
   let randomInt = Math.floor(randomNum);
   return randomInt;
}


function getHome() {
    let userInput = process.argv[2]; 
    let locations = ["Mansion", "Castle", "Shack", "House", "Villa"];

    
    if (userInput) {
        locations.push(userInput);
    }

    let randInt = randNumGenerator(locations.length);
    let chosenLocation = locations[randInt];
    return chosenLocation;
}

function getTravelCount(){
    return randNumGenerator(101)
}

function getPets(){
    let fifty = randNumGenerator(2)
    let pets = ["Cat", "Dog", "Fish", "Rabbit", "Kuruma",]
    
    if (fifty === 1 && process.argv[3] ) {
        return process.argv[3];

    
    } else {
        return pets[randNumGenerator(pets.length)];
    
    }
    }
    


function occupation(){
    let userInput = process.argv[4]
    let occupation = ["Software Engineer", "CEO", "Janitor", "Cia Cyber Operative","Teacher"]
    if (userInput) {
        occupation.push(userInput);
    }

    let randInt = randNumGenerator(occupation.length);
    let Finaloccupation = occupation[randInt];
    return Finaloccupation;
    
    

}

function ASC(){
    
    return randNumGenerator(101)
    

}

function futureCollegeInitial() {
    let userInput = process.argv[6]; // Custom letter input
    let letters = [
        "A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N",
        "O", "P", "Q", "R", "S", "T", "U",
        "V", "W", "X", "Y", "Z"
    ];

    if (userInput) {
        letters.push(userInput.toUpperCase());
    }

    let randInt = randNumGenerator(letters.length);
    return letters[randInt];
}