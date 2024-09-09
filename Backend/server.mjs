import express from "express"
import https from "https"
import fs from "fs"
import posts from "./routes/post.mjs"
import users from "./routes/user.mjs"
import cors from "cors"
 
const PORT = 6969
const app = express()

const options = {
    key: fs.readFileSync('keys/privatekey.pem'),
    cert: fs.readFileSync('keys/certificate.pem')
}

app.use(cors())
app.use(express.json())

app.use((req, res, next) =>
{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    next()
})


app.use("/post", posts)
app.route("/post", posts)


let server = https.createServer(options,app)
console.log(PORT)
server.listen(PORT)