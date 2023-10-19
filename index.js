const inquirer = require("inquirer");
// requiring inquirer and fs
const fs = require("fs");

const { Triangle, Square, Circle } = require("./lib/shapes");
// declaring constants shapes

// function if statement that loops over what shape is picked
function writeToFile(fileName, answers) {
    let svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";

    if (answers.shape === "Triangle") {
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.logoColor}"/>`;
    } else if (answers.shape === "Square") {
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.logoColor}"/>`;
    } else {
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.logoColor}"/>`;
    }

    svgString += `<text x="150" y="170" text-anchor="middle" font-size="50" fill="${answers.textColor}">${answers.logoName}</text>`;

    svgString += "</g>";
    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}
// writes to new file

// function that asks the user questions about the logo
function promptUser() {
    inquirer
      .prompt([
      {
        type: 'list',
        message: 'Pick a shape',
        choices: ['Triangle', 'Square', 'Circle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Enter 1 to 3 letters for your logo',
        name: 'logoName',
    },
    {
        type: 'input',
        message: 'Enter the color or hexidecimal number for text color',
        name: 'textColor',
    },
    {
        type: 'input', 
        message: 'Enter the color or hexidecimal number for logo color',
        name: 'logoColor',
    },  
])
.then((answers) => {
    if (answers.logoName.length > 3) {
        console.log("Please enter no more than 3 characters");
        promptUser();
    }  else {
        writeToFile("logo.svg", answers);
    }
 });
}
        // If someone tries more than 3 chars
promptUser();

// promt initialization