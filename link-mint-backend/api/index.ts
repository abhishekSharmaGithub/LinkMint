import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import URLrouter from '../src/routes/url'
import redirectRouter from '../src/routes/redirect'
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors());
app.use(express.json())

app.use('/api/url', URLrouter);
app.use('/',redirectRouter)

//mongoDb conn
const MONGO_URI = process.env.MONGO_URI || '';
mongoose.connect(MONGO_URI)
.then(()=> console.log('mongoDB connected'))
.catch((e:unknown)=> console.error('mongoDB connection error:',e));

app.get('/',(req: Request,res: Response) => {
    res.send('URL shortner')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log('server is running on port',PORT);

})


