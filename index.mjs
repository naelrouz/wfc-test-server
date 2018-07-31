import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('HI MF!');
});

app.post('/states', (req, res, next) => {
  if (!req.body) {
    res.send('HI MF!');
  }
  // res.send('welcome, ' + req.body.username);

  console.log('states:', req.body.body);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
