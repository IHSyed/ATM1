import inquirer from "inquirer";
async function ubill(balance) {
    const input3 = await inquirer
        .prompt([
        {
            name: "utility",
            type: "list",
            message: " Please select the Utility",
            choices: ["Electricity", "Gas", "PTCL", "Mobile Phone"]
        },
        {
            name: "amount3",
            type: "number",
            message: "Please Enter the Payment Amount"
        }
    ]);
    balance -= input3.amount3;
    return balance;
}
export default ubill;
