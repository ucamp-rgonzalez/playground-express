import dotenv from 'dotenv'
dotenv.config();

import express from 'express';

const app = express();

app.listen(+process.env.PORT || 3000, () => {
  console.log('Server running');
})
