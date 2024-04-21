const app = require('node:http');
const buscarPuertoLibre = require('./puerto_libre');
const informacionEquipo = require('./info_equipo');
const abrirArchivo = require('./archivo_promesa');

async function main() {
  try {
    const puertoLibre = await buscarPuertoLibre();
    console.log(`Puerto libre: ${puertoLibre}`);

    const infoEquipo = informacionEquipo();
    console.log(`Información del equipo: ${JSON.stringify(infoEquipo)}`);

    const contenidoArchivo = await abrirArchivo('archivo.txt');
    console.log(`Contenido del archivo: ${contenidoArchivo}`);

    const server = app.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      if(req.url==='/puertoLibre'){
        res.end(JSON.stringify(puertoLibre))
      }else if (req.url === '/infoEquipo') {
        res.end(JSON.stringify(infoEquipo));
      } else if (req.url === '/contenidoArchivo') {
        res.end(JSON.stringify({ contenidoArchivo }));
      } else {
        res.end(JSON.stringify({ }));
      }
    });
   

    server.listen(3000, () => {
      console.log('Servidor iniciado en http://localhost:3000');
    });
  } catch (error) {
    console.error(error);
  }
}

main();
