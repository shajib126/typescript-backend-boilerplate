import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'
import router from './app/routes/router'


const app:Application = express()


app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:[],credentials:true}))

// app.use('/api/v1',router)

app.get('/',(req:Request,res:Response)=>{
    res.send('Api working good')
})

app.use(globalErrorHandler)
app.use(notFound)

export default app;