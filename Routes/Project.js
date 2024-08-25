import { Router } from "express";
import { addProject, editProject, readProject, updProjProgress, viewOneProject } from "../Controllers/crudProject.js";
import { projectPhase } from "../Controllers/crudPhase.js";

const projectRoute = Router()

projectRoute.post('/add', addProject);

projectRoute.post('/:id/edit', editProject);

projectRoute.post('/:id/progressUpd', updProjProgress);

projectRoute.get('/read', readProject);

projectRoute.get('/:id/view', viewOneProject);

projectRoute.get('/:id/view', projectPhase);

export default projectRoute;