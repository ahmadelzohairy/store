import express, {Request, Response} from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

//port
const PORT =3000;
//create server instance
const app = express();

//middlewares
app.use(morgan('common'));
app.use(helmet());


//route
app.get('/', (req: Request, res: Response)=>{
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

//listen server on the port(start server)
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

export default app;