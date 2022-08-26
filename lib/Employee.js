class Employee {
    constructor(id, name, email)    {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getId() {
        return this.id
    }
    getName()   {
        return this.name
    }
    getEmail()  {
        return this.email
    }
    getRole()   {
        return 'Employee'
    }
}

module.exports = Employee

// const bob = new Employee(2, 'Bob', 'bob@bob.com')
// console.log(bob.getRole()) 