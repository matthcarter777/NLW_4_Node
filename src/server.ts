import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({message: 'Ok'});
});

app.listen(3333, () => {
  console.log('API Started on Port 3333!');
});