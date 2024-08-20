import { Router } from "express";
import { addProject, editProject } from "../Controllers/crudProject.js";

const projectRoute = Router()

projectRoute.get('/add', addProject);

projectRoute.get('/edit', editProject);

export default projectRoute;