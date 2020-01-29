const express = require('express')
const ObjectID = require('mongodb').ObjectId

const quizRouter = function(collection){

  const router = express.Router()

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err)  => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
    })
  })

  router.get('/:id', (req, res) => {
    const id = req.params.id
    collection
      .findOne({  _id: ObjectID(id)})
      .then(doc => res.json(doc))
      .catch(err => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
    })
  })

  router.get('/day/:day', (req, res) => {
    const day = req.params.day.toLowerCase();
    collection
      .find({ day: day })
      .toArray()
      .then(doc => res.json(doc))
      .catch(err => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
    })
  })

    router.post('/', (req, res) => {
      const newData = req.body;
      collection
      .insertOne(newData)
      // .then(result => console.log())
      .then(result => res.json(result.ops[0]))
      .catch((err) => {
        console.error(err)
        res.status(500);
        res.json({ status: 500, error: err })
      })
    })

  //   collection
  //     .map(obj => obj.day)
  //     .then(doc => res.json(doc))



  // router.get('/day', (req, res) => {
  //   const day = req.params.day
  //   // console.log(`today is ${day}`)
  // })



  // router.delete('/:id', (req, res) => {
  //   const id = req.params.id
  //   collection
  //     .deleteOne( { _id: ObjectID(id) } )
  //     .then(() => collection.find().toArray())
  //     .the(doc => res.json(doc))
  //     .catch(err => {
  //       console.error(err)
  //       res.status(500)
  //       res.json({ status: 500, error: err })
  //   })
  // })
  //

  //
  //   router.put('/:id', (req, res) => {
  //     const id = req.params.id;
  //     const updatedData = req.body;
  //     collection
  //       .findOneAndUpdate(
  //         { _id: ObjectID(id)},
  //         { $set: updatedData},
  //         { returnOriginal: false}
  //       )
  //       .then(result => {
  //         res.json(result.value)
  //       })
  //       .catch(err => {
  //         console.error(err);
  //         res.status(500);
  //         res.json({ statuts: 500, error:err });
  //     });
  //   })

    return router

}

module.exports = quizRouter
