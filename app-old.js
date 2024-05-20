const http = require('http');

const server = http.createServer( (req, res) => {
  // res.writeHead(200, {
  //   'Content-Type': 'application/json'
  // })

  // const user = {
  //   id: 1,
  //   name: 'Ruslan'
  // }

  res.write('Hola mundo');

  res.end();
});

server.listen( 8000 );

console.log('Escuchando en el puerto 8000')