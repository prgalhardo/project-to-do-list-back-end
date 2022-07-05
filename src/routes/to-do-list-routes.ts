import { Router } from 'express';
import ToDoListController from '../controllers/to-do-list';

const router = Router();
const tasks = new ToDoListController();

router.get('/todolist', tasks.findAll);
router.post('/todolist', tasks.create);
router.put('/todolist/:id', tasks.update);
router.delete('/todolist/:id', tasks.delete);

module.exports = router;

