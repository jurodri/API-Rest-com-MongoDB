import express from "express";
const foodRoutes = express.Router();
import foodController from "../controllers/foodController.js";

foodRoutes.get("/foods", foodController.getAllFoods);

foodRoutes.post("/food", foodController.createFood);

foodRoutes.delete("/food/:id", foodController.deleteFood);

foodRoutes.put("/food/:id", foodController.updateFood);

foodRoutes.get("/food/:id", foodController.getOneFood);

export default foodRoutes;
