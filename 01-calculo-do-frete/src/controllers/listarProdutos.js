import { produtos } from "../data/produtos.js";

export const listarProdutos = async (req, res) => {
    return res.send(produtos);
};
