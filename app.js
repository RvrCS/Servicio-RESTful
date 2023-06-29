const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configuración del middleware bodyParser para parsear el cuerpo de las peticiones
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para obtener todos los usuarios
app.get('/users', (req, res) => {
  // Simulamos una respuesta con usuarios dummy
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', level: 1 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', level: 2 }
  ];

  res.json(users);
});

// Ruta para obtener un usuario por su ID
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  // Simulamos una respuesta con el usuario dummy correspondiente al ID
  const user = { id: userId, name: 'John Doe', email: 'john@example.com', level: 1 };

  res.json(user);
});

// Ruta para crear un nuevo usuario
app.post('/users', (req, res) => {
  const { name, email, password, level } = req.body;

  // Simulamos la creación de un nuevo usuario y devolvemos la respuesta
  const newUser = { id: 3, name, email, level };

  res.json(newUser);
});

// Ruta para actualizar un usuario existente
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email, password, level } = req.body;

  // Simulamos la actualización del usuario correspondiente al ID
  const updatedUser = { id: userId, name, email, level };

  res.json(updatedUser);
});

// Ruta para eliminar un usuario
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  // Simulamos la eliminación del usuario correspondiente al ID
  const message = `Usuario con ID ${userId} eliminado correctamente.`;

  res.json({ message });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});