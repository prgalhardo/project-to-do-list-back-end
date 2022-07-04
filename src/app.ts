import 'dotenv/config';
import express from 'express';
import tasksRoutes from './routes/to-do-list-routes';

const app = express();

app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Ouvindo na porta ${process.env.PORT}`!);
});

app.use('/todolist', tasksRoutes);