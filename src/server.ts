import 'reflect-metadata';
import express from 'express';

import router from './routes/routes';

/* Import DB Connect */
import './database';

const app = express();

app.use(express.json())
app.use(router);


app.listen(3333, () => {
  console.log('API Started on Port 3333!');
});