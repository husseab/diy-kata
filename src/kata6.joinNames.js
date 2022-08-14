const joinNames = namesObj => {
    let test1 = namesObj.map(names => {return names.name});
    let test2 = test1.pop();
    return `${test1.join(', ')} & ${test2}`
};

module.exports = joinNames;
