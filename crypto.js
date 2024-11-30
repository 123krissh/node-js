const crypto = require("crypto");
const randomValue = crypto.randomBytes(8).toString("hex");
console.log(randomValue);
const hashValue = crypto.createHash("sha256").update("coder").digest("hex");
console.log(hashValue);

const hashValue1 = crypto.createHash("sha256").update("coder").digest("hex");
console.log(hashValue1);