// src/routes/livrosRoutes.js
import express from 'express';
import LivroController from '../controllers/livroController.js';

const router = express.Router();

router.get('/livros/:id', LivroController.listarLivroPorId);
router.put('/livros/:id', LivroController.atualizarLivro);
router.post('/livros', LivroController.cadastrarLivro);
router.delete('/livros/:id', LivroController.excluirLivro);

export default router;
