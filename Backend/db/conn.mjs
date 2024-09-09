import {MongoClient} from "mongodb"
import dotenv from "dotenv"
dotenv.config()

const connectionstring = process.env.ATLAS_URI || ""

console.log("ConnectionString " + connectionstring)

const Client = new MongoClient(connectionstring)

let conn
try{
    conn = await Client.connect()
    console.log('MongoDb is CONNECTEDDDD!!!!')
}catch(e){
    console.error(e)
}

let db = Client.db("users")

export default db