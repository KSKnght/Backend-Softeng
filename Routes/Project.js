import { Router } from "express";
import { addProject, editProject, readProject, updProjProgress } from "../Controllers/crudProject.js";

const projectRoute = Router()

projectRoute.get('/add', addProject);

projectRoute.post('/edit', editProject);

projectRoute.post('/progressUpd', updProjProgress);

projectRoute.get('/read', readProject);

export default projectRoute;