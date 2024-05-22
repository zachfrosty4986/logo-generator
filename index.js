const inquirer = require('inquirer');
const fs = require('fs');

const {Circle, Square, Triangle} = require('./lib/shapes');
const { ifError } = require('assert');

const questions = [
    {
        type: 'input',
        name: 'character',
        message: 'What character would you like to use for your logo?',
    },
    {
        type: 'input',
        name: 'fontColor',
        message: 'What Color would you like to use for your font?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose your favorite shape:',
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Type your favorite color',
    }

]

function init() {
    inquirer.prompt(questions).then((answers) => {
        let shape;
        if (answers.shape === "Circle") {
            shape = new Circle()
        };
        if (answers.shape === "Square") {
            shape = new Square()
        };
        if (answers.shape === "Triangle") {
            shape = new Triangle()
        };
        shape.setColor(answers.shapeColor);
        const logo = 
        `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

        ${shape.render()}
      
        <text x="150" y="125" font-size="45" text-anchor="middle" fill="${answers.fontColor}">${answers.character}</text>
      
        </svg>`
        fs.writeFile('logo.svg', logo, (err) => 
        {if (err) {
            console.error(err)
        }
        console.log('Sucessfully created logo!')
    }) 
    })
}

init();