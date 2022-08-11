"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import * as express from 'express';
// const express = require('express');
const to_do_list_1 = __importDefault(require("../controllers/to-do-list"));
const router = (0, express_1.Router)();
// const tasksRoutes = Router();
const tasks = new to_do_list_1.default();
router.get('/todolist', tasks.findAll);
module.exports = router;
