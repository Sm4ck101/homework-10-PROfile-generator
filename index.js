const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const generateHTML = require('./src/generateHTML')
var team = []

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the manager\'s name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the manager\'s id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the manager\'s email?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number?'
    },
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineer\'s name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineer\'s id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineer\'s email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s github?'
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the intern\'s name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the intern\'s id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the intern\'s email?'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the intern\'s school?'
    },
]

const nextQuestion = [
    {
        type: 'list',
        name: 'option',
        message: 'What would you like to do next?',
        choices: ['Add an Engineer', 'Add an Intern', 'Team completed']
    }
]

function askNextQuestion()  {
    inquirer.prompt(nextQuestion).then((answers)=> {
        if (answers.option === 'Add an Intern') {
            addIntern()
        }   else if(answers.option === 'Add an Engineer')   {
            addEngineer()
        }   else    {
            completeTeam()
        }
    })
}

function addEngineer()  {
    inquirer.prompt(engineerQuestions).then((answers)=> {
        const engineer = new Engineer(answers.id, answers.name, answers.email, answers.github)
        team.push(engineer)
        askNextQuestion()
    })
}

function addIntern()    {
    inquirer.prompt(internQuestions).then((answers)=> {
        const intern = new Intern(answers.id, answers.name, answers.email, answers.school)
        team.push(intern)
        askNextQuestion()
    })
}

function completeTeam() {
    let HTMLString = generateHTML(team)
    console.log(HTMLString)

}

function start() {
    inquirer.prompt(managerQuestions).then((answers)=> {
        const manager = new Manager(answers.id, answers.name, answers.email, answers.officeNumber)
        team.push(manager)
        askNextQuestion()
    })
} 

start()
