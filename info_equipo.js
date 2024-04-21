const os = require('os');

module.exports = function informacionEquipo() {
  return {
    Numcpu: os.cpus().length,
    so: os.platform(),
    memoria: os.totalmem() / (1024 * 1024 * 1024),
  
  };
};