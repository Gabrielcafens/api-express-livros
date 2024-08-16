import "./validadorGlobal.js";
import autores from "./Autor.js";
import livros from "./Livro.js";

export { autores, livros };

const autorSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {
      type: String,
      required: [true, "O nome do(a) autor(a) é obrigatório"]
    },
    nacionalidade: {type: String}
  },
  {
    versionKey: false
  }
);
