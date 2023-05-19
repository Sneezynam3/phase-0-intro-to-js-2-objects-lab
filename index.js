//Assign employee variable to object containing name and streetAddress.
var employee = {
    name: 'James', 
    streetAddress: '7059 Windimere St'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    var newObj = {...employee};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value){
    var newObj = {...employee};
    delete newObj[key];
    return newObj;

}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];
    return employee;
}