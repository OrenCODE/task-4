const express = require('express');
const router = express.Router();

const Member = require('../../models/Member');

// GET all members
router.get('/', (req, res) => {
    Member.find()
        .then(members => res.json(members))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});

// Add member
router.post('/', (req, res) => {
    const {name, nickname, role} = req.body;
    let newMember = new Member({
        name,
        nickname,
        role,
    });

    newMember.save()
        .then(member => res.json({member, success:true}))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});

// GET member by ID
// router.get('/:id', (req, res) => {
//     Member.findById(req.params.id).then(members => res.json(members))
//         .catch(err => console.log(err))
// });

// DELETE
// router.delete('/:id', (req, res) => {
//     Member.findById(req.params.id).then(movie =>
//         movie.remove()
//             .then(() => res.json({success: true}))
//             .catch(err => res.status(404).json({success: false}))
//     )
// });

// // Edit Member
// router.put('/:id',
//     (req, res) => {
//         Member.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
//             Member.findOne({_id: req.params.id}).then((movie) => {
//                 res.json(movie)
//             })
//         })
//     });

module.exports = router;

