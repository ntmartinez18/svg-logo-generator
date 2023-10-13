// included "inquirer" and "jest" packages
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs'); 


// created questions array for user to input their design preferences
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword (or a hexadecimal number) for text',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword (or hexadecimal number) for shape color',
    },
];

// console log the user answers
const generatedSVG = (answers) => {
    console.log(answers)
    const { text, textColor, shape, shapeColor } = answers;
    let shapeContent =''
    if (shape === 'circle') {
        shapeContent = `<circle cx="150" cy="100" r="50" fill="${shapeColor}"/>`;
    } else if (shape === 'triangle') {
        shapeContent = `<polygon points="150, 20 275, 180 25, 180" fill="${shapeColor}"/>`;
    } else if (shape === 'square') {
        shapeContent = `<rect x="50" y="50" width="200" height="200" fill="${shapeColor}"/>`;
    }

    const svgContent = `
    <svg width="300" height="200">
    <text x="50%" y="50%" text-anchor="middle" fill="${textColor}">${text}</text>
    ${shapeContent}
    </svg>
    `;
    return svgContent;
    };

// return the generated content
inquirer
.prompt(questions)
.then((answers) => {
    const svgContent = generatedSVG(answers);
    fs.writeFile('logo.svg', svgContent, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Generated logo.svg'); 
        }
    })
});
