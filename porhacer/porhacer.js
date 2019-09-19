const fs = require('fs');

let listado = [];

const guardarDB = () => {
  let data = JSON.stringify(listado);
  fs.writeFile('db/data.json', data, (err) => {
    if (err) {
      console.log('Error al escribir en el archivo');
    }
  });
}

const cargarDB = () => {
  try {
    listado = require('../db/data.json');
  } catch (error) {
    listado = [];
  }
}

const crear = (descripcion) => {
  cargarDB();
  let porHacer = {
    descripcion: descripcion,
    completado: false
  };
  listado.push(porHacer);
  guardarDB();
  return porHacer;
}

const getListado = () => {
  cargarDB();
  return listado;
}

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = listado.findIndex(tarea => {
    return tarea.descripcion === descripcion;
  });
  if (index >= 0) {
    listado[index].completado = completado;
    guardarDB();
    return true;
  }
  return false;
}

const borrar = (descripcion) => {
  cargarDB();
  let index = listado.findIndex(tarea => {
    return tarea.descripcion === descripcion;
  });
  if (index >= 0) {
    listado.splice(index, 1);
    guardarDB();
    return true;
  }
  return false;
}

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}
