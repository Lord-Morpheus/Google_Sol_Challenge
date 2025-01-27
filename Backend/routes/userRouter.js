const express=require('express');
const {handleCreateUser, handleGetAllUsers, handleGetUserById, handleUpdateUser, hangleDeleteUser} = require('../controllers/userController');
const router=express.Router();

router.post('/create', handleCreateUser);
router.get('/getAll', handleGetAllUsers);
router.get('/get/:id', handleGetUserById);
router.put('/update', handleUpdateUser);
router.delete('/delete/:id', hangleDeleteUser);

module.exports=router;