// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id ,email) {
        this.name=name;
        this.id=id;
        this.email=email
    }
    getName () {
        return this.name;
    }
    getId () {
        return this.id;
    }
    getRole () {
        return "employee";
    }
    getEmail(){
        return this.email;
    }
}

module.exports = Employee;

//fs read file
//fs is how you merge files
//read in manager html put the values of inquier in there append that into the file i am generating
//at the end take all the peices and write them into one file.
//