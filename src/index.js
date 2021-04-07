const messages = [
  "No hay testigo tan terrible ni acusador tan potente como la conciencia que mora en el seno de cada hombre.",
  "Cuando estés en Roma compárate como los romanos.",
  "Prefiero ser el primero en una aldea que el segundo en Roma.",
  "La historia ofrece el medio mejor de preparación para los que han de tomar parte en los asuntos públicos.",
  "Sólo se puede destruir a una gran nación cuando ella misma se ha destruido interiormente.",
  "Sólo se puede destruir a una gran nación cuando ella misma se ha destruido interiormente.",
  "Roma ha hablado, la causa está cerrada."
];

const randomMsg = () => {
  const msg = messages[Math.floor(
    Math.random() * messages.length
  )];

  console.log(msg);
};

module.exports = { randomMsg };