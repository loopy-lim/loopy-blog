const express = require('express');
const cors = require('cors');
const app = express();

const multer = require('multer');

const upload = multer({
  dest: __dirname + '/../nginx/images',
});

app.use(cors());

app.post('/:filename', async (req, res) => {
  upload(req, res).then(
    file => {
      res.json(file);
    },
    err => {
      res.send(500, err);
    },
  );
});

app.listen(3003, () => console.log('Multer server start on 3003'));
