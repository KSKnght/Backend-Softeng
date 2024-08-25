import { Router } from "express";
import { createSubcon, editSubcon, showAllSubcon } from "../Controllers/crudSubcontract.js";

const subconRoute = Router()

subconRoute.post('/add', createSubcon);

subconRoute.post('/:id/edit', editSubcon);

subconRoute.get('/show', showAllSubcon);

export default subconRoute;
