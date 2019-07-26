const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = mongoose.Schema({

    member: {
        type: Schema.Types.ObjectId,
        ref: 'members'
    },

    description: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    memberName: {
        type: String,
        required: true
    }


});

module.exports = Todo = mongoose.model('todos', todoSchema);
