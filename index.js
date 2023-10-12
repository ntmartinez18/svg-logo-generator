// included "inquirer" and "jest" packages
// const inquirer = require('inquirer');
// const jest = require('jest');
// const fs = require('fs'); 
import inquirer from 'inquirer';
// import jest from 'jest';
import fs from 'fs';

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
        message: 'Choose from a: circle, triangle, or square',
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
    const svgContent = `
    ${text}
    ${textColor}
    ${shape}
    ${shapeColor}`;
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
