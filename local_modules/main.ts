import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";
import users from "./users.js";
import login from "./login.js";
import deposit from "./deposit.js";
import transfer from "./transfer.js";
import ubill from "./ubill.js";
//import withdraw from "./withdraw.js"; 
import withdrawl from "./withdrawl.js";
import chalk from "chalk";

async function newTrans () {

    const trans = await inquirer
    .prompt ([
        {
            name : "aTrans",
            type : "list",
            message : " Do you want to proceed with Another Transaction",
            choices : ["Yes", "No"]

        }
    ]);

    return trans.aTrans;
}


async function main(balance:number) {

    do {const options = await inquirer
        .prompt ([
            {
                name : "menu",
                type : "list",
                message : " Please select your required Service",
                choices : ["Balance Inquiry", "Cash Deposit", "Cash Withdrawl", "Funds Transfer", "Utility Bills", "Exit"]
            }
        ]);
    
    
        switch(options.menu) {
    
            case "Balance Inquiry" :
                balance = balance;
                console.log();
                console.log(chalk.blueBright(`Your Current Balance is Rupees : ${balance}`));
                console.log();
                break;
    
            case "Cash Deposit":
                balance = await deposit(balance);
                console.log();
                console.log(chalk.yellowBright(`Your Cash Deposit transaction is successful. Your New Balance is Rupees : ${balance}`));
                console.log();
                break;
                
            case "Cash Withdrawl":
                balance = await withdrawl(balance);
                console.log();
                console.log(chalk.greenBright(`Your Funds Withdrawl transaction is successful. Please take your Cash.`));
                console.log();
                console.log(chalk.green(`Your new Balance is ${balance}`));
                console.log();
                break;
            
            case "Funds Transfer":
                balance = await transfer(balance);
                console.log();
                console.log(chalk.magentaBright(`Your Funds Transfer transaction is successful. Your new Balance is : ${balance}`));
                console.log();
                break;
    
            case "Utility Bills":
                balance = await ubill(balance);
                console.log();
                console.log(chalk.magentaBright(`Your Bill Payment is successful. The new Balance is : ${balance}`));
                console.log();
                break;

            case "Exit" :
                console.log();
                console.log(`Exiting the ATM`);
                break;
    
        }

        var anotherTransaction = await newTrans();
        
}

while(anotherTransaction != "No");

}

export default main;
