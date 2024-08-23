import { Router } from "express";

const phaseRoute = Router()

phaseRoute.get('/add', addProject);

phaseRoute.get('/update', addProject);

phaseRoute.get('/remove', addProject);

phaseRoute.get('/status', addProject);


export default phaseRoute;