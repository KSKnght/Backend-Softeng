import { Router } from "express";
import { addProject, editProject, readProject, updProjProgress, viewOneProject } from "../Controllers/crudProject.js";

const projectRoute = Router()

projectRoute.get('/add', addProject);

projectRoute.post('/:id/edit', editProject);

projectRoute.post('/:id/progressUpd', updProjProgress);

projectRoute.get('/read', readProject);

projectRoute.get('/:id/view', viewOneProject);

export default projectRoute;