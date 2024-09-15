import mongoose from "mongoose";

const connect = () => {
  mongoose.connect(
    `mongodb+srv://caiobronesmor:admin@japafood.t5awr.mongodb.net/japafood?retryWrites=true&w=majority&appName=japafood`
  );
};

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Erro ao conectar com o mongoDB,");
});

connection.on("open", () => {
  console.log("Conectado ao mongoDB com sucesso!");
});

connect();

export default mongoose;
