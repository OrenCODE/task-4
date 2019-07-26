const express = require('express');
const router = express.Router();

const Todo = require('../../models/Todo');

router.get('/', (req, res) => {
    Todo.find()
        .then(todos => res.json(todos))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});

// Add Todo
router.post('/', (req, res) => {
    const {memberName, description, date} = req.body;
    let newTodo = new Todo({
        memberName,
        description,
        date,
    });

    newTodo.save()
        .then(todo => res.json({todo, success: true}))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});

// DELETE
router.delete('/:id', (req, res) => {
    Todo.findById(req.params.id).then(todo =>
        todo.remove()
            .then(() => res.json({success: true}))
            .catch(err => res.status(404).json({success: false}))
    )
});

module.exports = router;
