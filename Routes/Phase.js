import { Router } from "express";
import { addPhase, editPhase, readOnePhase, removePhase, statusPhase } from "../Controllers/crudPhase.js";
import { addTask } from "../Controllers/crudTasks.js";

const phaseRoute = Router()

phaseRoute.post('/:id/edit', editPhase);

phaseRoute.post('/:id/remove', removePhase);

phaseRoute.post('/:id/status', statusPhase);

phaseRoute.get('/:id/show', readOnePhase);

phaseRoute.post('/:id/addTask', addTask);


export default phaseRoute;