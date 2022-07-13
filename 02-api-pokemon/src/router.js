import express from "express";

import { mostrarListaPokemons } from "./controllers/mostrarListaPokemons.js";
import { obterPokemon } from "./controllers/obterPokemon.js";

export const roteador = express();

roteador.get("/pokemon", mostrarListaPokemons);
roteador.get("/pokemon/:idOuNome", obterPokemon);

