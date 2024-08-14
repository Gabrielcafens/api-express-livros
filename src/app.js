import express from "express";

const app = express();

const livros = [
    { id: 1, titulo: "A Game of Thrones", autor: "George R. R. Martin" },
    { id: 2, titulo: "To Kill a Mockingbird", autor: "Harper Lee" },
    { id: 3, titulo: "1984", autor: "George Orwell" },
]
app.get("/", (req, res) => {
    res.status(200).send("Curso de Noje.js");
  });
  
  app.get("/livros", (req, res) => {
    res.status(200).json(livros);
  });
export default app;