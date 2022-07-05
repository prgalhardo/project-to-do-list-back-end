import { Router } from 'express';
// import * as express from 'express';
// const express = require('express');
import ToDoListController from '../controllers/to-do-list';

const router = Router();

// const tasksRoutes = Router();
const tasks = new ToDoListController();

router.get('/todolist', tasks.findAll);

module.exports = router;

