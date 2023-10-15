const inquirer = require("inquirer");

const fs = require("fs");

const { Triangle, Square, Circle } = require("./lib/shapes");



const questions = [
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
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {

    inquirer.createPromptModule(questions).then((responses) => {
        console.log("Making the SVG Logo");
        writeToFile('samplelogo.svg', generateLogo({...response}))
    })
}

init();
