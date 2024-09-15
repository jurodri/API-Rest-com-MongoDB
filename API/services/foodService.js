import Food from "../models/Foods.js";

class foodService {
  async getAll() {
    try {
      const foods = await Food.find();
      return foods;
    } catch (error) {
      console.log(error);
    }
  }
  async Create(name, price, descriptions) {
    try {
      const newFood = new Food({
        name,
        price,
        descriptions,
      });
      await newFood.save();
    } catch (error) {
      console.log(error);
    }
  }
  async Delete(id) {
    try {
      await Food.findByIdAndDelete(id);
      console.log(`A comida com id: ${id} foi deletado com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }
  async Update(name, price, descriptions) {
    try {
      await Food.findByIdAndUpdate(id, {
        name,
        price,
        descriptions,
      });
      console.log("Dados da comida com id: ${id} alterado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  }
  async getOne(id) {
    try {
      const food = await Food.findOne({ _id: id });
      return food;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new foodService();
