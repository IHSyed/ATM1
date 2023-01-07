import inquirer from "inquirer";
async function withdraw(balance) {
    const answer = await inquirer
        .prompt([
        {
            name: "transactionType",
            type: "list",
            message: " Please select your Transaction Type",
            choices: ["Fast Cash", "Withdrawl"],
            when(answer) {
                return answer.transactionType;
            }
        },
        {
            name: "amount4",
            type: "list",
            message: " Please select Withdrawl Amount",
            choices: ["500", "1000", "2000", "5000", "10000", "20000"],
            when(answer) {
                return answer.transactionType == "Fast Cash";
            }
        },
        {
            name: "amount4",
            type: "number",
            message: " Please enter your Withdrawl Amount",
            when(answer) {
                return answer.transactionType == "Withdrawl";
            }
        },
    ]);
    const enteredAmt = answer.amount4;
    if (balance > enteredAmt) {
        balance = balance - enteredAmt;
        console.log(`Your new Balance is Rupees: ${balance}`);
    }
    else {
        console.log("You have insuffcient Balance to make this transaction");
    }
    return balance;
}
export default withdraw;
