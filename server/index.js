import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    return res.json({token:'OJKDSHJKNDD'})
})

app.listen(3000, ()=>{
    console.log("APP RUNNER: ",3000)
})