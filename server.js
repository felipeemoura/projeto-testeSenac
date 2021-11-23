/*const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    response.write('Olo voce');
    response.end();
}).listen(8080)*/



const app = require('./src/app');
const port = 8080;

app.listen(port, () => {
    console.log(`App esta rodando na porta ${port}`);
});