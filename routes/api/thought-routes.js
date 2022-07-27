
const router = require('express').Router();

// Requirements from "thought-controller"

const {
    getAllThoughts,
    getThoughtbyId,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction

} = require('../../controllers/thought-controller');

// THOUGHT ROUTES

// <GET> = /api/thought - Get all Thoughts
router.route('/').get(getAllThoughts);

// <POST> = /api/thought- Create NEW Thought
router.route('/').post(createThought);

// <GET, PUT, DELETE> = /api/thought/:id 
router.route('/:id') 
.get(getThoughtbyId) // single thought
.put(updateThought) // update thought
.delete(deleteThought); // delete thought

// REACTION ROUTERS

// <POST> = /api/thought/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// <DELETE> = /api/thought/:thoughtId/reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;


// //TODO: ROUTE TO GET ALL THOUGHTS
// router.get('/', (req,res)=> {

// })

// //TODO: ROUTE TO CREATE A NEW THOUGHT
// router.post('/', (req,res)=> {

// });

// //TODO: ROUTE TO GET SINGLE THOUGHT BASED ON THOUGHT ID
// router.get('/:thoughtId', (req,res)=> {

// })

// //TODO: ROUTE TO UPDATE A THOUGHT
// router.put('/', (req,res)=> {

// })

// //TODO: ROUTE TO DELETE A THOUGHT BASED ON THOUGHT ID
// router.delete('/:thoughtId', (req,res)=> {

// });

// //TODO: ROUTE TO ADD REACTION TO A THOUGHT
// router.post('/:thoughtId/reactions', (req,res)=> {

// });

// //TODO: ROUTE TO DELETE A REACTION ON A THOUGHT
// router.delete('/:thoughtId/reactions/:reactionId', (req,res)=> {

// })
