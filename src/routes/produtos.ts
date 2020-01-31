import express from 'express'
const router = express.Router()

router
  .get('/', (req, res, next) => {
    res.status(200).send({
      mensagem: 'usando o get da rota de prods'
    })
  })
  .post('/', (req, res, next) => {
    res.status(201).send({
      mensagem: 'usando o post da rota de prods'
    })
  })
export default router
