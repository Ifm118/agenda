const express = reequire('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Servidor rodando com Nodemon!');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
