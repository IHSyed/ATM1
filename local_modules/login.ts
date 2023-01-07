// Functionality for User Data Input

import inquirer from "inquirer";
import main from "./main.js";
import users from "./users.js";

async function login () {
    var response = await inquirer

    .prompt ([
        {
            type : "input",
            name : "acctNumber",
            message : ("Please enter your Account Number")
        },
        {
            type : "password",
            name : "userPin",
            message : "Please enter your Secret Password."
        }
        /*{
            type : "list",
            name : "acctType",
            message : "Please select your Account Type",
            choices : ["Current", "Savings"]
        }*/


    ]);

    let user = users.find(x =>x.acctNumber == response.acctNumber && x.pinNumber == response.userPin);

    if (typeof user != "undefined") {
        console.log();
        console.log("Log In Successful");
        console.log();
        console.log(`Welcome ${user.name}`);
        console.log();
        main(user.balance);
    
    }
    else {
        console.log("Your Account Number or Password is Incorrect");
    }

}

export default login;

