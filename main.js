import express, { json } from 'express'
import cors from 'cors'
import projectRoute from './Routes/Project.js';
import phaseRoute from './Routes/Phase.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
const port = 8081;


app.listen(port);

app.use('/projects', projectRoute);

app.use('/phase', phaseRoute);
