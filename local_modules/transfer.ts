import inquirer from "inquirer";

async function transfer(balance:number) {

    const answer = await inquirer
        .prompt ([
            {
                name : "bank",
                type : "list",
                message : "Please select the Benificiary's Bank",
                choices : ["Habib Bank Ltd.", "Faysal Bank", "MCB", "Bank Al Falah", "Meezan Bank", "NBP", "SAMBA"]
            },
            {
                name : "acctNo.",
                type : "number",
                message : " Please select the Benificiary's Account Number",
            },
            {
                name : "amount2",
                type : "number",
                message : " Please Enter the Amount to be transferred",
            },
            
        ]);

        balance -= answer.amount2;
        return balance;
}

export default transfer;

