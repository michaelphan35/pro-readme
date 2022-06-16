// Required dependencies //

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/markdown");

// Questions Array //

const questions = () => {
    return inquirer.prompt([ 
        {
            type: "checkbox",
            name: "license",
            message: "Please choose the appropriate license!",
            choices: ["MIT", "Apache", "Boost", "Creative Commons", "Eclipse", "GNU", "Open Data Commons", "None"],
        },
        {
            type: "input",
            name: "title",
            message: "Please enter your project name!",
                validate: titleName  => {
                    if (titleName) {
                        return true;
                    } else {
                        console.log('Please enter a name for your project!');
                    }
                }
        },
        {
            type: "input",
            name: "description",
            message: "Please enter a description for the project",
                validate: description => {
                    if (description) {
                        return true;
                    } else {
                        console.log("Please provide a description for your project!");
                    }
                }
        },
        {
            tpye: "input",
            name: "github",
            message: "Please provide your github username.",
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log("Please enter your Github username!");
                    }
                }
        },
        {
            tpye: "input",
            name: "email",
            message: "Please provide your email.",
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log("Please enter your email!");
                    }
                }
        },
        {
            tpye: "input",
            name: "installation",
            message: "Please provide any installation instructions.",
                validate: installationInstructions => {
                    if (installationInstructions) {
                        return true;
                    } else {
                        console.log("Please provide installation instructions username!");
                    }
                }
        },
        {
            tpye: "input",
            name: "usageInfo",
            message: "Please provide usage/testing information.",
                validate: usage => {
                    if (usage) {
                        return true;
                    } else {
                        console.log("Please provide any usage/testing information!");
                    }
                }
        },
        {
            tpye: "input",
            name: "contributions",
            message: "Please provide any contributer information.",
                validate: contribution => {
                    if (contribution) {
                        return true;
                    } else {
                        console.log("Please enter your Github username!");
                    }
                }
        },
    ]);
};

questions()
    .then(questionsData => {
        const readMe = generateMarkdown(questionsData);

        fs.writeFile('./README.md', readMe, err => {
            if (err) throw Error(err);

            console.log('Done!')
        });
    });