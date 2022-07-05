"use strict";
// import { Request, Response, NextFunction } from 'express';
const express = require('express');
const Router = require('./routes/to-do-list-routes');
require('dotenv/config');
// const taskRoutes = require('./routes/to-do-list-routes');
// import * as express from 'express';
// import tasksRoutes from './routes/to-do-list-routes';
// class App {
//   public app: express.Express;
//   constructor() {
//     this.app = express();
//     this.config();
//   }
//   private config():void {
//     const accessControl: express.RequestHandler = (_req, res, next) => {
//       res.header('Access-Control-Allow-Origin', '*');
//       res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
//       res.header('Access-Control-Allow-Headers', '*');
//       next();
//   }
//   this.app.use(tasksRoutes);
// }
//   public start(PORT: string | number):void {
//     this.app.listen(PORT, () => {
//       console.log(`Escutando na porta ${PORT}`)
//     })
//   }
// }
// export { App };
const app = express();
app.use(express.json());
app.use(Router);
// app.get('/', (req: Request, res: Response, next: NextFunction) => res.status(200).json({ message: 'OK' }));
app.listen(process.env.PORT, () => {
    console.log(`Ouvindo na porta ${process.env.PORT}!`);
});
// // A execução dos testes de cobertura depende dessa exportação
// export const { app } = new App();
