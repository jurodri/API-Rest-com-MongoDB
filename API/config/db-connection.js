import mongoose from "mongoose";

const connect = () => {
  mongoose.connect(
    `mongodb+srv://caiomoraesace:admin@cluster0.eal3r.mongodb.net/japafood?retryWrites=true&w=majority&appName=Cluster0`
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
