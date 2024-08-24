import { Router } from "express";
import { addProject, editProject, readProject, updProjProgress } from "../Controllers/crudProject.js";

const projectRoute = Router()

projectRoute.get('/add', addProject);

projectRoute.get('/edit', editProject);

projectRoute.get('/progressUpd', updProjProgress);

projectRoute.get('/read', readProject);

export default projectRoute;