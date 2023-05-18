const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Todos
router.get('/', async (req, res) => {
  const todos = await loadTodosCollection();
  res.send(await todos.find({}).toArray()); //You can add Condition into find, this code will fetch all data
});

// Add Todos
router.post('/', async (req, res) => {
  const todos = await loadTodosCollection();
  await todos.insertOne(req.body);
  res.status(201).send();
});

// Update Todos
router.put('/:id', async (req, res) => {
  const todos = await loadTodosCollection();
  await todos.deleteOne({ _id: req.params.id });
  await todos.insertOne(req.body);
  res.status(200).send({});
});


// Delete Todos
router.delete('/:id', async (req, res) => {
  const todos = await loadTodosCollection();
  await todos.deleteOne({ _id: req.params.id });
  res.status(200).send({});
});


async function loadTodosCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb://127.0.0.1:27017',
    {
      useNewUrlParser: true
    }
  );

  return client.db('Todos').collection('todoitem');
}

module.exports = router;
