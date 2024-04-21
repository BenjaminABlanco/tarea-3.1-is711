const net = require('net');

module.exports = async function buscarPuertoLibre() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.listen(0, () => {
      const puerto = server.address().port;
      server.close();
      resolve(puerto);
    });
  });
};