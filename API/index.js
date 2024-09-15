import express from "express";
const app = express();
//import mongoose from "mongoose";
import mongoose from "./config/db-connection.js";
//import Food from "./models/Foods.js"
import foodRoutes from "./routes/foodRoutes.js";

//Configuração do express vindo da requisição
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", foodRoutes);

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}.`);
});
