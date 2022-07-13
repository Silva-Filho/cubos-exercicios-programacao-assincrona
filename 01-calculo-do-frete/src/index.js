import express from "express";
import { roteador } from "./router.js";

const servidor = express();

const porta = 3000;

servidor.use(express.json());
servidor.use(roteador);

servidor.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});
