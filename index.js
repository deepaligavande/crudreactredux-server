import express from 'express';
import routes from './routes/routes.js';
import connection from'./database/db.js';
import cors from'cors';
import bodyParser from 'body-parser';

const app=express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',routes);

const PORT=8000;

connection();

app.listen(PORT,()=>console.log(`server is successfully connected on port ${PORT}`));