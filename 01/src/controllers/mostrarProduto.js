import { produtos } from "../data/produtos.js";

export const mostrarProduto = (req, res) => {
    const { idProduto } = req.params;
    const idProdutoNumero = Number(idProduto);

    const produto = produtos.find( elemento => {
        return elemento.id === idProdutoNumero;
    } );

    return res.send(produto);
};

