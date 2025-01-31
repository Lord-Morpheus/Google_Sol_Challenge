const express=require('express');
const router=express.Router();

const {handleAddRequestForBooks,handleDeleteRequestForBooks}=require('../controllers/feedbackController');

router.post('/addRequestForBooks', handleAddRequestForBooks);
router.delete('/deleteRequestForBooks', handleDeleteRequestForBooks);

module.exports=router;