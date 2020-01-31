import express from 'express'
import rotaProdutos from './routes/produtos'
const app = express()

app.use('/produtos', rotaProdutos)

app.use((req, res, next) => {
  res.status(200).send({ mensagem: 'ok uhuuuuu' })
})

export default app
