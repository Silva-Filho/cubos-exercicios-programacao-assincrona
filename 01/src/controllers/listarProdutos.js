import { produtos } from "../data/produtos.js";

export const listarProdutos = (req, res) => {
    return res.send(produtos);
};

