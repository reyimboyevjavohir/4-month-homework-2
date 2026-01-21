const fs = require("fs");
const math = require("./mathModule");
console.log("=== Lokal modul bilan ishlash ===");
const sum = math.add(10, 5);
math.printResult(sum);
const diff = math.subtract(10, 5);
math.printResult(diff);
console.log("\n=== fs moduli bilan ishlash ===");
const data = fs.readFileSync("input.txt", "utf-8");
console.log("Fayldan o‘qiladi:", data);
fs.writeFileSync("output.txt", "Salom  NIMAGAP");
console.log("output.txt fayli yaratildi");
console.log("\n=== Buffer bilan ishlash ===");
const randomNumbers = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);
console.log("Tasodifiy sonlar:", randomNumbers);
const buffer = Buffer.from(randomNumbers);

fs.writeFileSync("buffer.bin", buffer);
console.log("Buffer faylga ");

const readBuffer = fs.readFileSync("buffer.bin");

console.log("Bufferdan o‘qilgan ma'lumotI:", readBuffer.toString());
