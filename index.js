const inquirer = require("inquirer");

const fs = require("fs");

const { Triangle, Square, Circle } = require("./lib/shapes");

function writeToFile(fileName, answers) {
    
    let svgString = "";

    svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${answers.shape}`;

    let shapeChoice;
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.logoColor}"/>`;
    }   else if (answers.shape === "Square") {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" fill="${answers.logoColor}"/>`;
    }   else {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.logoColor}">`;
    }

    svgString += `<text x="150" y="150" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.logoName}</text>`;

    svgString += "</g>";
    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
} 

function promptUser() {
    inquirer
      .prompt([
      {
        type: 'checkbox',
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
        
promptUser();
