// Code your solution in this file!
let hq = 42;
let feet = 264;
distanceFromHqInBlocks = (input) => {
    let distance = input - hq;
    return distance < 0 ? distance * (-1) : distance;
}

function distanceFromHqInFeet(distance) {
    let returnVal = distanceFromHqInBlocks(distance);
    return returnVal * feet;

}

function distanceTravelledInFeet(start, end) {
    let distanceTravelled = end - start;
    return distanceTravelled < 0 ? (distanceTravelled * (-1)) * feet : distanceTravelled * feet;
}

function calculatesFarePrice(start, destination) {
    let returnFeetVal = distanceTravelledInFeet(start, destination);
    if (returnFeetVal < 399) { return 0 }
    else if (returnFeetVal > 400 && returnFeetVal < 2000) {
        return ((returnFeetVal - 400) * 2) / 100
    } else if (returnFeetVal > 2001 && returnFeetVal < 2500) {
        return 25;
    } else if (returnFeetVal > 2500) {
        return 'cannot travel that far';
    }

}