const express = require('express');
const path = require('path');
const { readFile } = require('fs/promises');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', async (req, res) => {
  res.send(await readFile('./Code/build/index.html', 'utf8').catch((err) => console.log(err)));
});

app.use((req, res, next) => {
  const err = new Error('Resource Not Found!');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.error(`${req.method} ${err.status} ${req.url} ${err.message}`);
  res.status(err.status || 500).json({ message: err.message });
});

app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));
