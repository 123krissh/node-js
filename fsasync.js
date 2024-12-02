const fs = require("fs/promises");
const path = require("path");

//<--------------fs crud opera Asynchronous---------------->

const fileName = "fsAsync.txt";
const filePath = path.join(__dirname, fileName);

fs.writeFile(filePath, "This is the initial Data", "utf-8", (err) => {
    if(err) console.error(err);
    else console.log("File Saved");
});

fs.readFile(filePath, "utf-8", (err, data) => {
    if(err) console.error(err);
    else console.log(data);
});

fs.appendFile(filePath, "\nThis is the updated Data", "utf-8", (err) => {
    if(err) console.error(err);
    else console.log("updated File Saved");
});

// fs.unlink(filePath, (err) => {
//     if(err) console.error(err);
//     else console.log("File Deleted");
// });


//<-----------------fs crud opera using promises ----------------->

const fileName1 = "fsPromises.txt";
const filePath1 = path.join(__dirname, fileName1);

fs.writeFile(filePath1, "this file make from promises", "utf-8")
.then(console.log("file created"))
.catch((err) => console.error(error.message));

fs.readFile(filePath1, "utf-8")
.then((data) => console.log(data))
.catch((err) => console.error(error.message));

fs.appendFile(filePath1, "\nthis is upadeted file make from promises", "utf-8")
.then(console.log("file updated"))
.catch((err) => console.error(error.message));

// fs.unlink(filePath1)
// .then(console.log("file deleted"))
// .catch((err) => console.error(error.message));



//<---------------fs crud opera using Async & Await ----------------->

const fileName2 = "fsAsyncAwait.txt";
const filePath2 = path.join(__dirname, fileName2);

const writeFile = async () => {
    try{
        await fs.writeFile(filePath2, "this file make from async & await", "utf-8");
        console.log("file created");
    }catch(error) {
        console.error(error.message);
    }
}
writeFile();

const readFile = async () => {
    try{
       const data = await fs.readFile(filePath2, "utf-8");
        console.log(data);
    }catch(error) {
        console.error(error.message);
    }
}
readFile();

const updateFile = async () => {
    try{
        await fs.appendFile(filePath2, "\nthis is updated file make from async & await", "utf-8");
        console.log("file updated");
    }catch(error) {
        console.error(error.message);
    }
}
updateFile();

// const deleteFile = async () => {
//     try{
//         await fs.unlink(filePath2);
//         console.log("file deleted");
//     }catch(error) {
//         console.error(error.message);
//     }
// }
// deleteFile();
