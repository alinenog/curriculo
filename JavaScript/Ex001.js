//Aula 13 - Servidor Simples 
const http = require('http');

const hotsname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(`Requisicao: ${JSON.stringify(req.headers)}`);  

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vem ser Dev . 2022 - Aline Nogueira ');
});

server.listen(port, hotsname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
