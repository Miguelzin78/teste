const fs = require("fs");

const { writeFile } = require("fs/promises");
const path = require("path");

// Criar uma pasta
//fs.mkdir(path.join(__dirname, "/test"), (error) => {
//if (error) {
// return console.log("Erro: ", error);
// }
//console.log("Pasta criada com sucesso!");
//});

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Bem-vindo ",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso!");

    // Adicionar um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "Miguel",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("Arguivo modificado com sucesso!");

        // Ler arquivo
        fs.readFile(
          path.join(__dirname, "/test", "test.txt"),
          "utf8",
          (error, data) => {
            if (error) {
              return console.log("Erro: ", error);
            }
            console.log(data);
          }
        );
      }
    );
  }
);
