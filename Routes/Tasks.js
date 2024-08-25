import { Router } from "express";
import { addTask, connectMaterialsTasks, connectSubcon, editTask, removeMaterialsTasks, removeSubconTask, removeTask, statusTask } from "../Controllers/crudTasks.js";

const tasksRoute = Router()

tasksRoute.post('/add', addTask);

tasksRoute.post('/:id/edit', editTask);

tasksRoute.post('/:id/status', statusTask);

tasksRoute.post('/:id/remove', removeTask);
<<<<<<< HEAD

=======
webkitURL
>>>>>>> bfba3d6 (test)
tasksRoute.post('/:id/conMatTask', connectMaterialsTasks);

tasksRoute.post('/:id/removeMatTask', removeMaterialsTasks);

tasksRoute.post('/:id/conSubcon', connectSubcon);

tasksRoute.post('/:id/removeSubcon', removeSubconTask);

export default tasksRoute;