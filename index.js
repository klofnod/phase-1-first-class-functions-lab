const returnFirstTwoDrivers = function(drivers){
    return (drivers.slice(0, 2))
}

const returnLastTwoDrivers = function(drivers){
    return (drivers.slice (-2))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (num){
    return (fare) => ( fare * num )
}           
 


const fareDoubler = function (fare){
    return fare * createFareMultiplier(1)(2)
}

const fareTripler = function(fare){
    return fare * createFareMultiplier(1)(3)
}
function selectDifferentDrivers(drivers , list){
    if (list === returnFirstTwoDrivers)
    return returnFirstTwoDrivers(drivers)
    if (list === returnLastTwoDrivers)
    return returnLastTwoDrivers(drivers)
}