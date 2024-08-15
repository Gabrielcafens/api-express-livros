// src/config/dbConnect.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

async function conectaNaDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conexão com o MongoDB estabelecida com sucesso!");
        return mongoose.connection;
    } catch (error) {
        console.error("Erro na conexão com o MongoDB:", error);
        throw error;
    }
}

async function fetchLivro() {
    const data = JSON.stringify({
        "collection": "livros",
        "database": "livraria",
        "dataSource": "Cluster0",
        "projection": {
            "_id": 1
        }
    });

    const config = {
        method: 'post',
        url: process.env.MONGODB_ENDPOINT,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': process.env.MONGODB_API_KEY,
        },
        data: data
    };

    try {
        const response = await axios(config);
        console.log(JSON.stringify(response.data));
    } catch (error) {
        console.error('Erro ao conectar:', error.response ? error.response.data : error.message);
    }
}

export { conectaNaDatabase, fetchLivro };
