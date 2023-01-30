import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

import './config/database.js';

const app = express();

app.listen(+process.env.PORT || 3000, () => {
  console.log('Server running');
});
