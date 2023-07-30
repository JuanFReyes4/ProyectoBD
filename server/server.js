// server.js (Backend con Node.js y Express)

const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const secretKey = 'your_secret_key'; // Reemplaza por una clave secreta adecuada

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Aquí debes realizar la validación de las credenciales con tu lógica de autenticación
  // Por simplicidad, simularemos una validación de usuario y contraseña
  if (email === 'usuario@example.com' && password === 'contraseña123') {
    // Si las credenciales son válidas, generamos un token JWT
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });

    // Enviamos el token JWT en la respuesta
    res.json({ token });
  } else {
    // Si las credenciales son incorrectas, respondemos con un error
    res.status(401).json({ error: 'Credenciales incorrectas' });
  }
});

// Resto de las rutas y configuración del servidor...

app.listen(5000, () => {
  console.log('Servidor en ejecución en el puerto 5000');
});
