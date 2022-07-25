
const router = require('express').Router();
const {User} = require("../../models")

// Requirements from "user-controller"
const {
    getAllUsers,
    getUserbyId,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// <GET, POST> = /api/user
router.route('/')
.get(getAllUsers)   // get all Users
.post(createUser);   // create User

// <GET, PUT, DELETE> = /api/user/:id
router.route('/:id')
.get(getUserbyId)   // single User
.put(updateUser)    // update User
.delete(deleteUser); // delete User

// <POST, DELETE> = /api/user/:userId/friends/:friendId
router.route('/:id/friends/:friendId')
.post(addFriend)    // add Friend
.delete(deleteFriend); // delete Friend

module.exports = router;

// //TODO - ROUTE THAT GETS ALL THE USERS, include friends?
// router.get('/', (req,res)=> {

// })

// //TODO - ROUTE THAT CREATES A NEW USER
// router.post('/', (req,res)=> {

// });

// //TODO - ROUTE THAT GETS A SINGLE USER BASED ON USER ID
// router.get('/:userId', (req,res) => {

// })

// //TODO - ROUTE THAT UPDATES A SINGLE USER
// router.put('/:userId', (req,res)=> {

// })

// //TODO - ROUTE THAT DELETES A SINGLE USER BASED ON USER ID
// router.delete('/:userId', (req,res)=> {

// });

// //TODO - ROUTE THAT ADDS A FRIEND TO A USER
// router.put('/:userId/friends/:friendId', (req,res)=> {

// })

// //TODO - ROUTE THAT DELETES A FRIEND FROM A USER'S FRIENDS, DONT DELETE THE FRIEND AS A USER THOUGH!
// router.delete('/:userId/friends/:friendId', (req,res)=> {
  
// });


