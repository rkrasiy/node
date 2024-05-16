const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listado, fin) => {
  try{
      
    let salida = "";
  
    const fileName = `tabla-${base}.txt`;
    for(let i = 1; i <= fin; i++){
      salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }

    if(listado){
      console.log("====================================".green);
      console.log("              Tabla del: ".green, base);
      console.log("====================================".green);
      console.log(salida);
    }

    fs.writeFileSync( `./salida/${fileName}`, salida);
    
    return fileName
  }catch(err){
    throw err;
  } 
}

module.exports = {
  crearArchivo
}