const express = require('express')
const ObjectID = require('mongodb').ObjectId

const quizRouter = function(collection){

  const router = express.Router()

//Get all
  router.get('/', (req, res) => {
    collection
      .find({})
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err)  => {
        console.error(err)
        res.status(500)
        res.json({ status: 500, error: err })
    })
  })

//Get by day old way
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

  // // query params search ?day=day - The better way to do it
  // router.get('/', (req, res) => {
  //   let query = req.query
  //   const key = Object.keys(query)
  //   const value = Object.values(query)
  //   //
  //   // if (value[0] === 'true' || 'false'){
  //   //   const newValue = JSON.parse(value)
  //   //   query = { [key[0]] : newValue }
  //   // };
  //
  //   collection
  //     .find(query)
  //     .toArray()
  //     .then(doc => res.json(doc))
  //     .catch(err => {
  //       console.error(err)
  //       res.status(500)
  //       res.json({ status: 500, error: err })
  //   })
  // })
  //
  //   router.post('/', (req, res) => {
  //     const newData = req.body
  //     collection
  //       .insertOne(newData)
  //       .then(result => {
  //         res.json(result.ops[0])
  //       })
  //       .catch(err => {
  //           console.error(err)
  //           res.status(500)
  //           res.json({ status: 500, error: err })
  //       })
  //     })
  //
    // router.put('/:id', (req, res) => {
    //   const id = req.params.id;
    //   const updatedData = req.body;
    //   collection
    //     .findOneAndUpdate(
    //       { _id: ObjectID(id)},
    //       { $set: updatedData},
    //       { returnOriginal: false}
    //     )
    //     .then(result => {
    //       res.json(result.value)
    //     })
    //     .catch(err => {
    //       console.error(err);
    //       res.status(500);
    //       res.json({ statuts: 500, error:err });
    //   });
    // })

    return router

}

module.exports = quizRouter
