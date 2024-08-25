import express, { json } from 'express'
import cors from 'cors'
import projectRoute from './Routes/Project.js';
import phaseRoute from './Routes/Phase.js';
import clientRoute from './Routes/Client.js';
import matRoute from './Routes/Materials.js';
import subconRoute from './Routes/SubCon.js';
import supplierRoute from './Routes/Supplier.js';
import tasksRoute from './Routes/Tasks.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
const port = 8081;


app.listen(port);

app.use('/projects', projectRoute);

app.use('/phase', phaseRoute);

app.use('/clients', clientRoute);

app.use('/materials', matRoute);

app.use('/subcon', subconRoute);

app.use('/supplier', supplierRoute);

app.use('/tasks', tasksRoute);
