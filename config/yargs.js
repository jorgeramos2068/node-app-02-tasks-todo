const descripcion = {
  demand: true,
  alias: 'd'
};
const completado = {
  alias: 'c',
  default: true
}

const argv = require('yargs')
  .command('crear', 'Crea un elemento por hacer', {
    descripcion
  })
  .command('listar', 'Lista el total de elementos', {})
  .command('actualizar', 'Actualiza el estado de una tarea', {
    descripcion,
    completado
  })
  .command('borrar', 'Borra un elemento del listado', {
    descripcion
  })
  .help()
  .argv;

module.exports = {
  argv
}
