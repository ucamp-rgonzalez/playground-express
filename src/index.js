import express from 'express';
import bodyParser from 'body-parser';

import './config/database.js';
import userRoutes from './routes/users.js'

const app = express();

app.use(bodyParser.json());

userRoutes(app);

app.listen(+process.env.PORT || 5000, () => {
  console.log('Server running');
});
