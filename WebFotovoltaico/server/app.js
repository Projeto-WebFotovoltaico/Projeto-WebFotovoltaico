const http = require("http");
const express = require("express");
const app = express();
resolve = require('path').resolve;

app.use(express.static(resolve('./public')));

app.get("/", function(req, res) {
    res.sendFile(resolve('./main/index.html'));
});

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));