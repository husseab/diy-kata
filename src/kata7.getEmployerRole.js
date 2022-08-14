const getEmployerRole = (employeeName, employees) => {
    let test1 = employees.map(names => {
        if (names.name == employeeName) { return names.role}});
    ;let test2 = test1.filter(function(roles) {return roles !== undefined});
  return test2.join()  
};

module.exports = getEmployerRole;
