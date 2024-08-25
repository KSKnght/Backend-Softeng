import { Router } from "express";
import { addSupplier, editSupplier, removeSupplier } from "../Controllers/crudSupplier.js";

const supplierRoute = Router()

supplierRoute.post('/add', addSupplier);

supplierRoute.post('/:id/edit', editSupplier);

supplierRoute.post('/:id/remove', removeSupplier);

supplierRoute.get('/read',)

export default supplierRoute;