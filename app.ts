import 'dotenv/config';
import express from 'express';

const app = express();

app.use(express.json());


// app.get('/', (req, res) => {
//   res.status(StatusCodes.OK).send('Express + TypeScript')
// });

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});