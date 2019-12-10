import express , {Application} from "express"
import morgan from 'morgan'
import router from './routes/auth'
const app:Application = express();

//setting 
app.set('port', process.env.PORT || 3000)

//MIDDLEWARE
app.use(morgan('dev'))

app.use(express.json());

//routes 
app.use('/api/auth',router)


export default app