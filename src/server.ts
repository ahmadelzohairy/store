import express, {Request, Response} from 'express';

//port
const PORT =3000;
//create server instance
const app = express();

//route
app.get('/', (req: Request, res: Response)=>{
    res.json({
        msg: 'helloworld'
    })
})

//listen server on the port(start server)
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

export default app;