#!/usr/bin/env node
import inquirer from "inquirer";
//initialize user balance and pin code
let myBalance = 10000;
let myPin = 1122;
//print welcome message
console.log("Welcome to code with Farwa - Atm machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code:"
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct, login successfully!");
    console.log(`Current account balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "opeartion",
            type: "list",
            message: "Select an opeartions:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.opeartion === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`Your Remaning Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.opeartion === "Check Balance") {
        console.log(`Your Account Balance is: ${myBalance}`);
    }
}
else {
    console.log("Pin is incorrect, Try Again!");
}
