import express, { type Application } from 'express'
import { studentRoute } from './app/modules/student/student.route'
import cors from 'cors'

const app: Application = express()

// Parser
app.use(express.json())
app.use(cors())

app.use('/api/v1/student', studentRoute)

export default app
