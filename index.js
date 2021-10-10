// instal node_modules with npm init, npm i, npm inquirer, + npm fs
const inquirer = require('inquirer');
const fs = require('fs');

// create constructor classes (using js files from ./lib/)
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// variable for generating the HTML product
const employeeHTML = require('./src/employeeHTML');

// creating team variable to encapsulate inside (member).html's
var myTeam = [];

// ask inquirer: 1. manager
// async function so that promise can be used
const manager = async () => {
  const managerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "Hi there, please enter the manager's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the manager's ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the manager's email?",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the manager's office number?",
    },
  ];

  // use await for promise
  const { name, id, email, officeNumber } = await inquirer.prompt(managerQuestions);

  // create variable for manger from class & user prompt answers
  const manager = new Manager(name, id, email, officeNumber);
  myTeam.push(manager);
  console.log('Manager added!')
  // call 'another' if more are to be added
  more();
};

// ask inquirer: 2. engingeer
const engineer = async () => {
  const engineerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "Hi there, please enter an engingeer's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is this engineer's ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is this engineers's email?",
    },
    {
      type: 'input',
      name: 'GitHub',
      message: "What is this engineer's GitHub?",
    },
  ];

  // use await for promise
  const { name, id, email, GitHub } = await inquirer.prompt(engineerQuestions);

  // create variable for manger from class & user prompt answers
  const engineer = new Engineer(name, id, email, GitHub);
  myTeam.push(engineer);
  console.log('Engineer added!')
  // call 'another' if more are to be added
  more();
};

// ask inquirer: 3. intern
const intern = async () => {
  const internQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "Hi there, please enter the intern's name:",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is this intern's ID?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is this intern's email?",
    },
    {
      type: 'input',
      name: 'school',
      message: "What school does this intern attend?",
    },
  ];

  // use await for promise
  const { name, id, email, school } = await inquirer.prompt(internQuestions);

  // create variable for manger from class & user prompt answers
  const intern = new Intern(name, id, email, school);
  myTeam.push(intern);
  console.log('Intern added!')
  // call 'another' if more are to be added
  more();
};

// more funciton will prompt if any more team members need to be added (not manager tho)
const more = async () => {
  const anothaOne = {
    type: 'list',
    name: 'moreTeam',
    message: 'Would you like to add another engineer or intern?',
    choices: ['Yes, an Engineer', 'Yes, an Intern', 'Nope, all done!'],
  };
  const {moreTeam} = await inquirer.prompt(anothaOne);

  // use switch/case
  switch (moreTeam) {
    case 'Yes, an Engineer':
      engineer();
      // 'break' causes the stop
      break;

    case 'Yes, an Intern':
      intern();
      break;

    // 'default' runs code if nothing else matches
    default:
      gimmeHTML();
  }
};

// now to write the file - aka HTML time!
const gimmeHTML = () => {
    fs.writeFileSync('./dist/index.html', employeeHTML(myTeam));
}

// let the call begin!
manager();