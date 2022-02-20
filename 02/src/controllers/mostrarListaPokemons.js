import { listarPokemons } from "utils-playground";

export const mostrarListaPokemons = async (req, res) => {
    const { results } = await listarPokemons();

    return res.send(results);
};

