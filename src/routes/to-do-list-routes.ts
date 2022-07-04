import { Router } from 'express';
import ToDoListController from '../controllers/to-do-list';

const tasksRoutes = Router();
const tasksInfos = new ToDoListController();

tasksRoutes.get('/', tasksInfos.findAll);

export default tasksRoutes;

// import { Router } from 'express';
// import validateLoginBody,
// { validateEmailInDB,
//   validatePasswordInDB } from '../middlewares/loginMiddleware';
// import LoginController from '../controllers/loginController';
// import TokenAuthorization from '../middlewares/tokenMiddleware';

// const loginRoutes = Router();
// const loginInfos = new LoginController();

// loginRoutes.post(
//   '/login',
//   validateLoginBody,
//   validateEmailInDB,
//   validatePasswordInDB,
//   loginInfos.create,
// );
// loginRoutes.get('/login/validate', TokenAuthorization, loginInfos.findOne);

// export default loginRoutes;
