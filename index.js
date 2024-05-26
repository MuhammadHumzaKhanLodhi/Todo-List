#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
while (true) {
    let input = await inquirer.prompt([
        {
            name: "Todolist",
            type: "input",
            message: "What do you want to add in your Todo List?",
        },
        {
            name: "addMore",
            type: 'list',
            choices: ["Yes", "No"]
        },
    ]);
    const { Todolist, addMore } = input;
    todo.push(Todolist);
    if (addMore == "No") {
        console.log("Todolist: ");
        for (let i = 0; i < todo.length; i++) {
            console.log(todo[i]);
        }
        break;
    }
}
