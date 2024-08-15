// src/app.js
import express from 'express';
import { conectaNaDatabase } from './config/dbConnect.js';
import livrosRoutes from './routes/livrosRoutes.js'; // Corrija o caminho se necessário

const app = express();
app.use(express.json());

// Usar as rotas definidas em livrosRoutes
app.use('/api', livrosRoutes);

async function startApp() {
    try {
        const conexao = await conectaNaDatabase();
        
        conexao.on("error", (error) => {
            console.error("Erro na conexão com o MongoDB:", error);
        });

        console.log("Aplicativo iniciado com sucesso");
    } catch (error) {
        console.error("Erro ao iniciar o aplicativo:", error);
    }
}

startApp();

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

export default app;
