const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
var team = [];

var introPrompt = [
  {
    type: "input",
    name: "name",
    message: "Enter employee's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter employee's id:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter employee's email:",
  },
];

const managerQuery = [
  {
    type: "input",
    name: "name",
    message: "Enter manager's name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter manager's id:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter manager's email:",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter manager's office number:",
  },
];

const nextQuestion = [
  {
    type: "list",
    name: "option",
    message: "What would you like to do next?",
    choices: ["Add an Engineer", "Add an Intern", "Team completed"],
  },
];

function addEmployee(chosenRole)  {
  inquirer.prompt(introPrompt).then((answers) => {
    if (chosenRole === "Add an Intern") {
      inquirer.prompt([{type: "input", name: "school", message: "What is the intern's school?"}]).then((internAnswer)  =>  {
        const newIntern = new Intern(answers.id, answers.name, answers.email, internAnswer.school);
        team.push(newIntern)
        askNextQuestion()
      })
    } else {
      inquirer.prompt([{type: "input", name: "github", message: "What is the engineer's github?"}]).then((engineerAnswer)  =>  {
        const newEngineer = new Engineer(answers.id, answers.name, answers.email, engineerAnswer.github);
        team.push(newEngineer)
        askNextQuestion()
      })
    }
  })
}

function askNextQuestion() {
  inquirer.prompt(nextQuestion).then((answers) => {
    if (answers.option === "Add an Intern" || answers.option === "Add an Engineer") {
      addEmployee(answers.option)
    } else {
      fs.writeFile("./dist/team.html", generateHTML(team), "utf8", (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Team Profile generated");
        }
      });
    }
  });
}

function start() {
  inquirer.prompt(managerQuery).then((answers) => {
    const manager = new Manager(
      answers.id,
      answers.name,
      answers.email,
      answers.officeNumber
    );
    team.push(manager);
    askNextQuestion();
  });
}

start();
