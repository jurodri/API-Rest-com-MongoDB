import mongoose from "mongoose";

//const connect = () => {
//  mongoose.connect(
  //  `mongodb://localhost:4000/japafood`, // Conectando ao MongoDB local
   // { useNewUrlParser: true, useUnifiedTopology: true } // Configurações recomendadas
 // );
// };

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
