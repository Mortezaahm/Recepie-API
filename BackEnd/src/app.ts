import express from 'express';
import cors from 'cors';

import recipeRoutes from './routes/recipe.route.js';



const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/recipes', recipeRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

export default app;
