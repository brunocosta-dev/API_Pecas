import express from 'express'
import {router} from './src/routes/partsRoute.js'
import { connection } from './src/config/db.js';


const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/",router);

async function startServer() {
    try{
        await connection();
        console.log("Connected data base");
        app.listen(PORT,()=>{
            console.log(`Server logged on port ${PORT}`)
        });
    }catch(error){
        console.error('Error starting server', error);
    }
}
startServer();