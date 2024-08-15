// src/app.js
import express from "express";
import { conectaNaDatabase, fetchLivro } from "./config/dbConnect.js";
import Livro from "./models/livro.js";  // Certifique-se de que o nome do arquivo e a importação correspondem
import routes from "./routes/index.js";
const app = express();
routes(app);

app.use(express.json());

async function startApp() {
    try {
        const conexao = await conectaNaDatabase();
        
        conexao.on("error", (error) => {
            console.error("Erro na conexão com o MongoDB:", error);
        });

        // Apenas para testar, vamos buscar um livro ao iniciar o app
        await fetchLivro();
        
    } catch (error) {
        console.error("Erro ao iniciar o aplicativo:", error);
    }
}

startApp();

app.get("/livros/:id", async (req, res) => {
    try {
        const livro = await Livro.findById(req.params.id);
        if (livro) {
            res.status(200).json(livro);
        } else {
            res.status(404).json({ error: "Livro não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/livros", async (req, res) => {
    try {
        const novoLivro = new Livro(req.body);
        await novoLivro.save();
        res.status(201).send("Livro cadastrado com sucesso");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put("/livros/:id", async (req, res) => {
    try {
        const livroAtualizado = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (livroAtualizado) {
            res.status(200).json(livroAtualizado);
        } else {
            res.status(404).json({ error: "Livro não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete("/livros/:id", async (req, res) => {
    try {
        const resultado = await Livro.findByIdAndDelete(req.params.id);
        if (resultado) {
            res.status(200).send("Livro removido com sucesso");
        } else {
            res.status(404).json({ error: "Livro não encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default app;
