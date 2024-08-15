import livro from "../models/Livro.js";

class LivroController {
  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      if (!livroEncontrado) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }
      res.status(200).json(livroEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
    }
  };

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;
      const livroAtualizado = await livro.findByIdAndUpdate(id, req.body, { new: true });
      if (!livroAtualizado) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }
      res.status(200).json({ message: "Livro atualizado", livro: livroAtualizado });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na atualização` });
    }
  };

  static async cadastrarLivro(req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", livro: novoLivro });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
    }
  };

  static async excluirLivro(req, res) {
    try {
      const id = req.params.id;
      const livroExcluido = await livro.findByIdAndDelete(id);
      if (!livroExcluido) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }
      res.status(200).json({ message: "Livro excluído com sucesso" });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na exclusão` });
    }
  };
}

export default LivroController;
