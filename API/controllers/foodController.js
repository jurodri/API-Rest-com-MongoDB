import foodService from "../services/foodService.js";
import { ObjectId } from "mongodb";

const getAllFoods = async (req, res) => {
  try {
    const foods = await foodService.getAll();
    res.status(200).json({ foods: foods });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};

const createFood = async (req, res) => {
  try {
    const { name, price, descriptions } = req.body;
    await foodService.Create(name, price, descriptions);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};
const deleteFood = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      foodService.Delete(id);
      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};
const updateFood = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { name, price, descriptions } = req.body;
      await foodService.Update(id, title, description);
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

const getOneFood = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const food = await foodService.getOne(id);
      if (!food) {
        res.sendStatus(404);
      } else {
        res.Status(200).json({ food });
      }
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno no servidor!" });
  }
};

export default { getAllFoods, createFood, deleteFood, updateFood, getOneFood };
