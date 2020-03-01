import express from 'express'
const router = express.Router()

router
  .get('/', (req, res, next) => {
    console.log('cheguei')
    res.status(200).send({
      mensagem: 'usando o get da rota de prods'
    })
  })
  .get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    const produto = {
      id,
      nome: req.body.nome,
      produto: req.body.preco
    }

    res.status(200).send({
      mensagem: `GET no produto ${id}`,
      produto
    })
  })
  .post('/', (req, res, next) => {
    res.status(201).send({
      mensagem: 'usando o post da rota de prods'
    })
  })
export default router
