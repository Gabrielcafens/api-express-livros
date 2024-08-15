// src/models/livro.js
import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema
}, { versionKey: false });

const Livro = mongoose.model("Livro", livroSchema);

export default Livro;
