// instal node_modules with npm init, npm i, npm inquirer, + npm fs
const inquirer = require("inquirer");
const fs = require("fs");

// create constructor classes (using js files from .lib/)
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// variable for generating the HTML product
const generateHTML = require("./src/generateHTML");

// creating team variable to encapsulate inside generateHTML()
const myTeam = [];

// ask inquirer: 1. manager
const manager = async () => {
  const managerQuestions = [
    {
      type: "input",
      name: "name",
      message: "Hi there, please enter the manager's name:",
    },
    {
      type: "input",
      name: "title",
      message: "What is the manager's ID?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the manager's email?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the manager's office number?",
    },
  ];
};
