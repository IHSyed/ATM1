import inquirer from "inquirer";
async function OtherAmount(balance) {
    const othAmt = await inquirer
        .prompt([
        {
            name: "amount1",
            type: "number",
            message: "Please enter the Withdrawl Amount"
        }
    ]);
    if (othAmt.amount1 < balance) {
        balance -= othAmt.amount1;
    }
    else {
        console.log("You have insufficient Funds");
        balance = await OtherAmount(balance);
    }
    return balance;
}
async function withdrawl(balance) {
    const ans = await inquirer
        .prompt([
        {
            name: "amount",
            type: "list",
            message: "Please enter the Withdrawl Amount.",
            choices: ["500", "1000", "5000", "10000", "20000", "Other Amount", "Exit"],
        }
    ]);
    switch (ans.amount) {
        case "500":
            balance -= 500;
            console.log();
            //console.log(`Your transaction is successful. Please take your cash`);
            console.log();
            break;
        case "1000":
            balance -= 1000;
            break;
        case "5000":
            balance -= 5000;
            break;
        case "10000":
            balance -= 10000;
            break;
        case "20000":
            balance -= 20000;
            break;
        case "Other Amount":
            balance = await OtherAmount(balance);
            break;
    }
    return (balance);
}
export default withdrawl;
