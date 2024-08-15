// src/routes/autorRoutes.js
import express from 'express';
import AutorController from '../controllers/autorController.js';

const router = express.Router();

router.get('/autor/:id', AutorController.listarAutorPorId);
router.put('/autor/:id', AutorController.atualizarAutor);
router.post('/autor', AutorController.cadastrarAutor);
router.delete('/autor/:id', AutorController.excluirAutor);

export default router;
