const express = require("express");
const app = express();

app.use(express.json());
const enviarMensajes = require("./controller/whatsapp.controller");

app.get("/", async (req, res) => {
  res.send("Enviando Mensajes en masa...");
  await enviarMensajes();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Conectado en el http://localhost:${PORT}`);
});
