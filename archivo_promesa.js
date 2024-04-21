const fs = require('fs').promises;

module.exports = async function abrirArchivo(rutaArchivo) {
  try {
    const contenido = await fs.readFile(rutaArchivo, 'utf8');
    return contenido;
  } catch (error) {
    throw error;
  }
};

