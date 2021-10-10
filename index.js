// instal node_modules with npm init, npm i, npm inquirer, + npm fs
const inquirer = require('inquirer');
const fs = require('fs');

// template to fill (using js files from ./dist/)
const generateManager = require('./dist/managerHTML');
const generateEngineer = require('./dist/engineerHTML');
const generateIntern = require('./dist/internHTML');

// create constructor classes (using js files from ./lib/)
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// variable for generating the HTML product
const generateTeamHTML = require('./dist/employeeHTML');

// creating team variable to encapsulate inside index.html()
const myTeam = [];
const myManager = [];
const myEngineer = [];
const myIntern = [];

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
  const { name, id, email, office } = await inquirer.prompt(managerQuestions);

  // create variable for manger from class & user prompt answers
  const manager = new Manager(name, id, email, office);
  myTeam.push(manager);
  console.log('Manager added!')
  // call js file from another js file with 'another' if more are to be added
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
  // call js file from another js file with 'another' if more are to be added
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
  // call js file from another js file with 'another' if more are to be added
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
    case 'Engineer':
      engineer();
      // 'break' causes the stop
      break;

    case 'Intern':
      intern();
      break;

    // 'default' runs code if nothing else matches
    default:
      gimmeHTML();
  }
};

// // now to write the file - aka HTML time!
// const gimmeHTML = () => {
//     fs.writeFileAsync('', generateTeamHTML(myTeam));
// }

// now to write the file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data, function (err, res) {
      if (err) throw err;
      console.log('Team Generated!')
  })
}

// let the call begin!
const gimmeHTML = () => {
  console.log(myManager, myEngineer, myIntern);
  var managerHTML = ''
  for(let i=0; i < myManager.length; i++) {
     managerHTML += generateManager(myManager[i]);
  }
  console.log('manager created', managerHTML);
  var engineerHTML = ''
  for(let i=0; i < myEngineer.length; i++) {
      engineerHTML += generateEngineer(myEngineer[i]);
  }
  console.log('engineer created', engineerHTML);
  var internHTML = ''
  for(let i=0; i < myIntern.length; i++) {
      internHTML += generateIntern(myIntern[i]);
  }
  console.log('intern created', internHTML);
  var finalHTML = managerHTML + engineerHTML + internHTML;
  var fileData = generateTeamHTML(finalHTML);
  fs.writeFileSync('index.HTML', fileData, function(err, res) {
      if(err) throw err;
  })
  console.log('Team HTML Generated Successfully!', fileData)
}

manager();