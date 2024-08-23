import { Router } from "express";
import { addProject, editProject, updProjProgress } from "../Controllers/crudProject.js";

const projectRoute = Router()

projectRoute.get('/add', addProject);

projectRoute.get('/edit', editProject);

projectRoute.get('/progressUpd', updProjProgress)

export default projectRoute;