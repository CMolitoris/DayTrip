"use strict"

class database {
    constructor() {
        this.dbdestination = ["Hawaii","Austraila","UK","Poland","Italy","Canada"];
        this.dbrestuarant = ["Buka","Taco Bell","Chic-fila","Carrabas","Papa Johns","Cafe of Rock"];
        this.dbtransportation = ["Motorcycle","Bus","Boat","Private plane","Limo","SUV"];
        this.dbentertainment = ["Singing","Dancing","Movie","Live Band","Out-door activities"];
    }

    getDestinations() {
        return this.dbdestination;
    }
    getRestuarants() {
        return this.dbrestuarant;
    }
    getTransportation() {
        return this.dbtransportation;
    }
    getEntertainment() {
        return this.dbentertainment;
    }
}

class selectionHistory {
    constructor(dest,rest,trans,entert) {
        this.dest = dest;
        this.rest = rest;
        this.trans = trans;
        this.entert = entert;
    }

    setDest(newDest) {
        this.dest = newDest;
    }
    setRest(newRest) {
        this.rest = newRest;
    }
    setTrans(newTrans) {
        this.trans = newTrans;
    }
    setEntert(newEntert) {
        this.entert = newEntert;
    }
}

let data = new database();
let selHist = new selectionHistory(
    data.getDestinations()[randNum(data.getDestinations().length)],
    data.getRestuarants()[randNum(data.getDestinations().length)],
    data.getTransportation()[randNum(data.getTransportation().length)],
    data.getEntertainment()[randNum(data.getEntertainment().length)]
);

let done = false;
let choice;
let selection;

console.log(
    "Welcome to the day trip scheduler!" 
    + " Your randomly generated trip can be seen below: "
    + "\nDestination: " + selHist.dest 
    + "\nRestuarant: " + selHist.rest 
    + "\nTransportation: " + selHist.trans 
    + "\nEntertainment: " + selHist.entert
);

while(!done) {
    choice = prompt("\nWould you like to reselect a component of your trip? (Y/N)").toUpperCase();
    if(choice==="Y") {
        console.log("1: Destination\n2: Restuarant\n3: Transportation\n4: Entertainment");
        selection = parseInt(prompt("\nWhich would you like to reselect?"));
        switch(selection) {
            case 1:
                selHist.setDest(reRoll(data.getDestinations()));
                break;
            case 2:
                selHist.setRest(reRoll(data.getRestuarants()));
                break;
            case 3:
                selHist.setTrans(reRoll(data.getTransportation()));
                break;
            case 4:
                selHist.setEntert(reRoll(data.getEntertainment()));
                break;
            default:
                console.log("Your selection was invalid.");
                break;
        }
    } else if(choice==="N") {
        console.log("Thank you for using Molitoris.INC software!");
        displayItinerary(selHist);
        done = true;
    } else {
        console.log("Please enter a valid input.");
    }

}

function reRoll(data) {
    let newEntry = data[randNum(data.length)];                
    console.log("New Entry: " + newEntry);
    let selection = prompt("Is this selection ok? (Y/N)").toUpperCase();
    while(selection!=="Y" && selection!=="N") {
        console.log("Invalid input, please enter a legal value. ")
        selection = prompt("Is the selection ok? (Y/N)").toUpperCase();
    }
    if(selection==="N") {
        reRoll(data);
    } 
    return newEntry;  
}

function randNum(arrLen) {
    let min = 0;
    let max = arrLen;
    return Math.floor(Math.random() * (max - min) + min);
}

function displayItinerary(selHist) {
    console.log("You are scheduled for the following options:"
    + "\nDestination: " + selHist.dest 
    + "\nRestuarant: " + selHist.rest 
    + "\nTransportation: " + selHist.trans 
    + "\nEntertainment: " + selHist.entert
    );
}