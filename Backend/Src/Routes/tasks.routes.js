import { getTasks, createTask, getTask, updateTask, deleteTasks } from '../Controllers/tasks.controller.js';
import { validateSchema } from '../Middlewares/validator.middleware.js';
import { authRequired } from '../Middlewares/validateToken.js';

import { createTaskSchema } from '../Schemas/task.schema.js';
import { Router } from 'express';

const router = Router();

router.get('/tasks', authRequired, getTasks);

router.get('/tasks/:id', authRequired, getTask);

router.post('/tasks', authRequired, validateSchema(createTaskSchema), createTask);

router.put('/tasks/:id', authRequired, updateTask);

router.delete('/tasks/:id', authRequired, deleteTasks);

export default router;