const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { callbackify } = require("util");
const Employee = require("./lib/Employee");

var team = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
 const promptUser = () =>
 //i copied this from the class-activities...
inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'list',
        name: 'title',
        message: 'what is your title for this project?',
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id Number?'
    },
    {
        type: 'input',
        message: 'What is your Email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your Alma Mater? or if current school if currently enrolled.',
        name: 'school',
        when: (list) => list.title === "Intern",
    },
    {
        type: 'input',
        message: "What is your github?",
        name: 'github',
        when: (list) => list.title === "Engineer"
    },
    {
        type: 'input',
        message: 'What is your office Number?',
        name: 'officeNumber',
        when: (list) => list.title === "Manager",
    },
    {
        type: 'list',
        message: 'Are there more workers?',
        choices: ["yes", "no"],
        name: 'extraworker',
    }
 ]).then(data => {
     //this portion came from the little RPG game we made...i just subsituted the HP and all that for manages etc.
     if (data.title === "Manager") {
         const manager = new Manager (data.name, data.id, data.email, data.officeNumber);
         team.push(manager);
        //  console.log(team)
     }
     if (data.title === "Engineer") {
         const engineer = new Engineer (data.name, data.id, data.email, data.github);
         team.push(engineer);//tito helped me with this part...i was using team.append not team.push :/
        //  console.log(team);
     }
     if (data.title === "Intern") {
        const intern = new Intern (data.name, data.id, data.email, data.school);
        team.push(intern);
        console.log(team);
    }
     if (data.extraworker === "yes" ) {
         return promptUser();
     }//copied from activity 28-Stu_Mini_project
    var myFile = render(team);
   fs.writeFile("output.html", (myFile), (err) => 
   err ? console.log(err) : console.log('Sucess!')
   );
 })
 
 promptUser();



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
