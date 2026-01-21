function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function printResult(result) {
  console.log("Natija:", result);
}

module.exports = {
  add,
  subtract,
  printResult
};

const fs = require("fs");
const path = require("path");

// Papka yaratish funksiyasi
function createFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log("Papka yaratildi:", folderPath);
  }
}

// Fayl yaratish funksiyasi
function createFile(filePath, content = "") {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log("Fayl yaratildi:", filePath);
  }
}
createFile(
  path.join("html", "index.html"),
  `<!DOCTYPE html>
<html>
<head>
  <title>Node Backend</title>
  <link rel="stylesheet" href="../static/style.css">
</head>
<body>
  <h1>Salom, Backend!</h1>
  <script src="../static/script.js"></script>
</body>
</html>`
);

createFile(
  path.join("static", "script.js"),
  `console.log("script.js ishlayapti kichi  bo'lim");`
);
createFile(
  path.join("static", "script.ts"),
  `console.log("script.ts ishlayapti ya'ni  typescript fayl");`
);
createFile(
  path.join("static", "style.css"),
  `body {
  font-family: Arial;
}`
);
createFile("go.mod", "module golang-todo-app");
createFile("go.sum", "");
createFile("golang-todo-app", "");
createFile(
  "main.go",
  `package main

import "fmt"
func main() {
  fmt.Println("Salom Go backend")
}`
);
createFile(
  "README.md",
  `# Golang Todo App

Bu loyiha Node.js orqali avtomatik yaratildi.
`
);
