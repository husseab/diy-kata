const humanCatDogYears = number => {
    let dog = ((number - 2) * 5 + 15 + 9);
    let cat = ((number - 2) * 4 + 15 + 9);
    let total = [];
    total.push(number);
    total.push(cat);
    total.push(dog);
    return total
    
};

module.exports = humanCatDogYears;
