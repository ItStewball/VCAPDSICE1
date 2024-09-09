import express from "express"
import db from "../db/conn.mjs"
import { ObjectId } from "mongodb"

const router = express.Router()

//get all records
router.get("/", async (req, res) => {
    let collection = await db.colleciton("posts")
    let results = await connection.find({}).toArray()
    res.send(results).status(200)
})

//create a new record
router.post("/upload" ,async (req, res) => {
    let newDocument ={
        user: req.body.user,
        content: req.body.content,
        image: req.body.image
    }
    let collection = await db.collection("posts")
    let result = await colleciton.insertOne(newDocument)
    res.send(result).status(204)
})

router.patch("/:id", async (req, res) =>{
    const query = {_id: new ObjectId(req.params.id)}
    const updates = {
        $set: {
            name: req.body.name,
            comment: req.body.comment
        }
    }

    let collection = await db.collection("posts")
    let result = await colleciton.updateOne(query, updates)

    res.send(result).status(200)
})

router.get("/:id", async (req, res) => {
    let collection = await db.colleciton("posts")
    let query = {_id: new ObjectId(req.params.id)}
    let result = await colleciton.findOne(query)

    if (!result) res.send("Not found").status(404)
        else res.send(result).status(200)
})

router.delete("/:id", async (req, res) => {
    const query = {_id: new ObjectId(req.params.id)}
    const collection = db.collection("posts")
    let result = await collection.deleteOne(query)

    res.send(result).status(200)
})

export default router