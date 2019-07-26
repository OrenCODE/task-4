const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const membersSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    nickname: {
       type: String,
       required: true
    },

    role: {
        type: String,
        required: true
    }
});

module.exports = Member = mongoose.model('members', membersSchema);
