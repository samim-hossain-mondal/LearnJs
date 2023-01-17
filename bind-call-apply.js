let objName = {
    firstName: 'Samim',
    lastName: 'Mondal',
    getName: function () {
        let fullname = this.firstName + ' ' + this.lastName;
        return fullname;
    }
};

let myName = function () {
    console.log(this.getName() + ' - I love CodeAcademy');
};

// creates new object and binds objName.
let logName = myName.bind(objName);
logName();