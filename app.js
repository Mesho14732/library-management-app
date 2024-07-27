const express = require('express');
const app = express();
app.use(express.json());

const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const libraryRoutes = require('./routes/libraryRoutes');

app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/library', libraryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});