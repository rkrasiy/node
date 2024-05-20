const Tarea = require('./tarea');
require('colors');

class Tareas {
  _listado = {};

  constructor(){
    this._listado = {};
  }

  crearTarea( desc = '') {
    const tarea = new Tarea(desc);

    this._listado[tarea.id] = tarea;
  }

  get listadoArr () {
    const listado = [];
    Object.values(this._listado).forEach( value => {
      listado.push(value);
    })
    return listado
  }

  cargarTareeaFromArray (list = []) {
    if(list.length > 0)
      list.forEach(tarea => this._listado[tarea.id] = tarea)
  }

  listadoCompleto() {
   this.listadoArr.forEach( (tarea, index) => {
      console.log(`${String(index + 1).green} ${tarea.desc} :: ${tarea.completadoEn ? 'Completado'.green : 'Pendiente'.red}`);
    });
  }

  listarPendientesCompletadas (isCompletadas = true) {
    let count = 0;

    this.listadoArr.forEach( tarea => {
      const { desc , completadoEn } = tarea;
      const estado = completadoEn ? `${completadoEn}`.green : 'Pendiente'.red;
      
      
      if(isCompletadas){
        if(completadoEn){
          count += 1;
          console.log(`${(count + '.').green} ${desc} :: ${estado}`);
        }
      }else{
        if(!completadoEn){
          count += 1;
          console.log(`${(count + '.').green} ${desc} :: ${estado}`);
        }
      }

    })
  }

  borrarTarea(id = ''){
    if(id in this._listado){
      delete this._listado[id];
    }
  }

  toggleCompletadas(ids) {
    ids.forEach( id => {
      const tarea = this._listado[id];

      if(!tarea.completadoEn){
        tarea.completadoEn = (new Date()).toISOString();
      }

    })

    this.listadoArr.forEach(tarea => {
      if(!ids.includes(tarea.id)){
        this._listado[tarea.id].completadoEn = null;
      }
    })
  }
}

module.exports = Tareas;