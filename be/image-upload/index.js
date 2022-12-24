const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

const multer = require('multer');

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, __dirname + '/../nginx/images');
    },
    filename: (req, file, done) => {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + ext);
    },
    fileFilter: (req, file, done) => {
      const ext = path.extname(file.originalname);
      if (
        ext !== '.png' &&
        ext !== '.png' &&
        ext !== '.gif' &&
        ext !== '.jpeg'
      ) {
        return done(res.end('Only images are allwed'), null);
      }
      done(null, true);
    },
  }),
});

app.use(cors());

app.post('/upload', upload.single('image'), (req, res) => {
  res.status(200).send({
    message: 'Ok',
    filename: req.file.originalname,
  });
});

app.listen(3003, () => console.log('Multer server start on 3003'));
