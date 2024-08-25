import { Router } from "express";
import { createMaterials, editMaterials, showMaterials } from "../Controllers/crudMaterials.js";

const matRoute = Router()

matRoute.post('/add',createMaterials);

matRoute.post('/:id/edit', editMaterials);

matRoute.get('/read', showMaterials);

export default matRoute;