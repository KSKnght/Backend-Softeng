import { Router } from "express";
import { addClients, editClient, readClients, readOneClient } from "../Controllers/crudClients.js";

const clientRoute = Router()

clientRoute.post('/add', addClients);

clientRoute.post('/:id/edit', editClient);

clientRoute.get('/read', readClients);

clientRoute.get('/:id/view', readOneClient);

export default clientRoute;