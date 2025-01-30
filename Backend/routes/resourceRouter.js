const express=require('express');
const {handleAddResource,handleGetAllResources,handleGetResourceById,handleUpdateResource,handleDeleteResource} = require('../controllers/resourceController');
const router=express.Router();

router.post('/add', handleAddResource);
router.get('/all', handleGetAllResources);
router.get('/get/:id', handleGetResourceById);
router.put('/update/:id', handleUpdateResource);
router.delete('/delete/:id', handleDeleteResource);

module.exports=router;