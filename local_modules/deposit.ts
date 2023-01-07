import inquirer from "inquirer";

async function deposit(balance : number) {
    const amount1 = await inquirer 
    .prompt ([
        {
            name    : "amt1",
            type    : "number",
            message : "Please enter the Deposit Amount"
        }
    ]);

    balance += amount1.amt1;

    return balance;
}

export default deposit;