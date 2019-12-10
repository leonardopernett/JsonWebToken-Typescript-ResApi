import {connect, set} from 'mongoose'

 export async function connection(){
    await set('useCreateIndex', true)
    await connect('mongodb://localhost/tes',{
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
     console.log('db is connected ')
 }

 
