import app from './app'
import {connection} from './databae'
import  dotenv from 'dotenv'
dotenv.config()

async function main(){
   connection()
   await app.listen(app.get('port'))
    console.log('server on port', app.get('port'))
}


main()
