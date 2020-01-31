import express from 'express'
import rotaProdutos from './routes/produtos'
const app = express()
import morgan from 'morgan'

app.use(morgan('dev'))
app.use('/produtos', rotaProdutos)
app.use((req, res, next)=>{
  const erro = new Error("NOT FOUND")
  erro.status(404);
  next(erro)
})
app.use((erro, req, res, next)=>{
  res.status(erro.status || 500);
  return res.send({
    erro: {
      mensagem: erro.mensage
    }
  })
})
export default app
