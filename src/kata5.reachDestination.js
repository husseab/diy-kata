const reachDestination = (distance, speed) => {
    test1 = distance / speed
    test2 = Math.round(test1*2)/2;
    return `I should be there in ${test2} hours.`
}

module.exports = reachDestination;
