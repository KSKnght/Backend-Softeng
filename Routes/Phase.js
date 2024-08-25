import { Router } from "express";
import { addPhase, editPhase, readOnePhase, removePhase, statusPhase } from "../Controllers/crudPhase.js";

const phaseRoute = Router()

phaseRoute.post('/create', addPhase);

phaseRoute.post('/:id/edit', editPhase);

phaseRoute.post('/:id/remove', removePhase);

phaseRoute.post('/:id/status', statusPhase);

phaseRoute.get('/:id/show', readOnePhase);


export default phaseRoute;