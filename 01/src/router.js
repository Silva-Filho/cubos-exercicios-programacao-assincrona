import express from "express";

import { calcularFrete } from "./controllers/calcularFrete.js";
import { listarProdutos } from "./controllers/listarProdutos.js";
import { mostrarProduto } from "./controllers/mostrarProduto.js";

export const roteador = express();

roteador.get("/produtos", listarProdutos);
roteador.get("/produtos/:idProduto", mostrarProduto);
roteador.get("/produtos/:idProduto/frete/:cep", calcularFrete);

