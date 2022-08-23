function distanceFromHqInBlocks() {
    let scuberHq = 42
    let streetName = 'street'
    let hqBlock = scuberHq + streetName
    let pickUpLocation = 50
    let pickUpLocation2 = 43
    let pickUpLocation3 = 34
    if (pickUpLocation = 50){
        return distanceFromHqInBlocks = pickUpLocation - scuberHq
    } else if (pickUpLocation2 = 43){
        return distanceFromHqInBlocks = pickUpLocation2 - scuberHq
    } else if (pickUpLocation3 = 34){
        return distanceFromHqInBlocks = pickUpLocation3 - scuberHq
    }
}
function distanceFromHqInFeet() {
    if (distanceFromHqInFeet = 264)
    return distanceFromHqInBlocks * distanceFromHqInFeet
}
function distanceTravelledInFeet() {
    let distanceFromHqInFeet = 264
    let a = 43
    let b = 48
    let c = 50
    let d = 60
    let e = 34
    let f = 28
    if (a,b){
        return Math.abs (a - b) * distanceFromHqInFeet
    }else if (c,d){
        return Math.abs (c - d) * distanceFromHqInFeet
    }else if (e,f){
        return (e - f) * distanceFromHqInFeet
    }
}
function calculatesFarePrice(start,destination) { 
    let distanceFromHqInFeet = 264
    if (Math.abs(43-44) * distanceFromHqInFeet < 400){
        return 'gives customer a free sample'

    }else if (400 < (34-42) * distanceFromHqInFeet < 2000){
        return 'charges 2 cents per foot when total feet travelled is between 400 and 2000'
    }else if (Math.abs(50-58) * distanceFromHqInFeet > 2000){
        return 'charges 25 dollars for a distance over 2000 feet'
    }else if ((34-24) * distanceFromHqInFeet > 2500){
        return 'does not allow rides over 2500 feet'
    }
}
