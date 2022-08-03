import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use(express.static(path.resolve('./public') ))

app.get('*',(req,res) => {
  res.sendFile(path.resolve('./public/index.html'))
})

app.listen(port)
console.log('server on port 3000')