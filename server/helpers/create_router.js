const express = require('express')
const ObjectID = require('mongodb').ObjectId

const cretarRouter = function(collection){

  const router =expres.Router()

  router.get('/'), (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
    })
  }

  router.get('/:id', (req, res) => {
    const id = req.parms.id
    collection
      .findOne({  _id: ObjectID(id)})
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
    })
  })

  router.delete('/:id', (req, res) => {
    const id = req.params.id
    collection
      .deleteOne( { _id: ObjectID(id) } )
      .then(() => collection.find().toArray())
      .the((doc) => res.json(doc))
      .catch((err) => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
    })

    router.post('/', (req, res) => {
      
    })


  })

}
