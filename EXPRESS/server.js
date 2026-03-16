//wrirting first express code
const express = require('express');
const logger = require('./middleware/logger');
const userRoutes = require('./routes/UserRoute');
const app = express();
app.use(logger);
const port = 3000;
/*
app.get('/', (req, res) => {
  res.send('Home Page!');
});

app.get('/about', (req, res) => {
  res.send('About Page!');
});
app.get('/contact', (req, res) => {
  res.send('Contact Page!');
});
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ];
  res.json(users);
});

app.get("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
    ];
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
});
*/
app.use('/users', userRoutes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});