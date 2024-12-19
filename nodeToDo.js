import Readline  from "readline";

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const todo = [];

const showMenu = () => {
    console.log("\n1: Add a Task");
    console.log("2: View Tasks");
    console.log("3: Exit");
    rl.question("Choose an Option: ", handleInput)
}

const handleInput = () => {
    if (Option === "1") {
        rl.question("Enter the Task:", (task) => {
            todo.push(task);
            console.log("Task added:", task);
            showMenu()
        })
    } else if (Option === "2") {
        console.log("\n Your Todo Lists:");
        todo.forEach((task, index) => {
            console.log(`${index+1} . ${task}`);
        })
        showMenu()
    } else if (Option === "3") {
        console.log("Thank You!!!");
        rl.close();
    } else {
        console.log("Invalid Option. Please Try again");
        showMenu();
    }
}

showMenu();