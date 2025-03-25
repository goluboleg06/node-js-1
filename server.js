const express = require('express');
const app = express();
const bookRouter = require('./routers/bookRouter');

app.use(express.json());
app.use('/books', bookRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on a port ${PORT}`);
});