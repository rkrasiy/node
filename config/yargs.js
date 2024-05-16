const yargs = require('yargs');

const argv = yargs.usage('This is my awesome program').options({
  'b': {
    description: 'Es la base de la tabla de multiplicar',
    alias: 'base',
    type: 'number'
  },
  'l': {
    description: 'Muestra la tabla en consola',
    alias: 'listado',
    type: 'boolean',
    default: false
  },
  'h': {
    description: 'Muestra la tabla en consola',
    alias: 'hasta',
    type: 'number',
    default: 10
  }
})
.check((argv, options) => {
  if( isNaN(argv.b)){
    throw 'La base tiene que ser un numero';
  }
  if( isNaN(argv.h)){
    throw 'La h/hasta tiene que ser un numero';
  }
  return true;
})
.argv;

module.exports = argv;