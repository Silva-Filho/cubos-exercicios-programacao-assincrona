import { produtos } from "../data/produtos.js";

import { getStateFromZipcode } from "utils-playground";

export const calcularFrete = async (req, res) => {
    const { idProduto, cep } = req.params;
    const idProdutoNumero = Number(idProduto);

    const produto = produtos.find( elemento => {
        return elemento.id === idProdutoNumero;
    } );

    const estadoDoCep = await getStateFromZipcode(cep);
    
    let frete = 0;

    if (estadoDoCep === "SP" || estadoDoCep === "RJ") {
        frete = 0.15 * produto.valor;
    } else if (
        estadoDoCep === "BA" 
        || estadoDoCep === "SE" 
        || estadoDoCep === "AL" 
        || estadoDoCep === "PE" 
        || estadoDoCep === "PB"
    ) {
        frete = 0.10 * produto.valor;
    } else {
        frete = 0.12 * produto.valor;
    }

    const infoFrete = {
        produto,
        estado: estadoDoCep,
        frete,
    };

    return res.send(infoFrete);
};

