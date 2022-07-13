import { listarPokemons } from "utils-playground";

export const mostrarListaPokemons = async (req, res) => {
    const { pagina } = req.query;

    const { results } = await listarPokemons(pagina ?? 1);

    return res.send(results);
};
