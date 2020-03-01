/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import rotaProdutos from './routes/produtos'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/produtos', rotaProdutos)
app.use((req, res, next) => {
  console.log('123')
  const erro: any = new Error('NOT FOUND')
  erro.status = 404
  next(erro)
})
app.use((erro, req, res, next) => {
  console.log('123')
  res.status(erro.status || 500)
  return res.send({
    erro: {
      mensagem: erro.message
    }
  })
})
export default app
