const express = require('express');
const app = express();

app.use(express.static(__dirname)); 

app.get('/sumar', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
    const suma = num1 + num2;
    res.send(`El resultado de la suma es: ${suma}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
