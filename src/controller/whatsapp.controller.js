const clientes = require("../data/clientes.js");

const enviarMensajes = async () => {
  try {
  } catch (error) {
    console.log(`Error enviando mensajes: ${error.message}`);
  } finally {
    console.log("Mensajes enviados");
  }
};

module.exports = enviarMensajes;
