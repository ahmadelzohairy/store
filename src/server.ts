import express, {Request, Response} from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import config from './config';
import db from './database';
import { Client } from 'pg';
import routes from './routes';
//port
const PORT =config.port || 3000;
//create server instance
const app = express();

//middlewares
app.use(express.json())
app.use(morgan('common'));
app.use(helmet());

app.use('/api', routes)
//route
app.get('/', (req: Request, res: Response)=>{
    // throw new Error('error ya pasha!!!!!!!!!!!!!!!!!!!');
    res.json({
        msg: 'helloworld'
    })
})
//post request
app.post('/', express.json(), (req: Request, res: Response) => {

    res.json({
        "message": "hellow world from post !!",
        "data": req.body
    })
    console.log(req.body);  
})
//test db
// db.connect().then(client => {
//     return client.query('SELECT NOW()').then(res => {
//         client.release();
//         console.log(res.rows);
//     }).catch(err => {
//         client.release();
//         console.log(err)
//     })
// })
//handle not found middeware
app.use((_req: Request, res: Response) => {
    res.status(400).json({
        message: 'wrong path !!'
    })
})
//listen server on the port(start server)
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

export default app;