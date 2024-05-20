const {v4: uuidiv4} = require('uuid');

class Tarea {
  id = '';
  desc = '';
  completadoEn = null;


  constructor ( desc ){
    this.desc = desc;
    this.id = uuidiv4();
    this.completadoEn = null;
  }
}

module.exports = Tarea;