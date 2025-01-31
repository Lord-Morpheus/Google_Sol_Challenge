const {addRequestForBooks,deleteRequestForBooks}=require('../models/feedbackModel');

const handleAddRequestForBooks=async(req,res)=>{
  try{
    const data=req.body;
    const response=await addRequestForBooks(data);
    res.status(response.status).json(response);
  }catch(error){
    res.status(500).json({msg: 'Internal Server Error', details: error.message});
  }
}

const handleDeleteRequestForBooks=async(req,res)=>{
  try{
    const id=req.body.id;
    const response=await deleteRequestForBooks(id);
    res.status(response.status).json(response);
  }catch(error){
    res.status(500).json({msg: 'Internal Server Error', details: error.message});
  }
}

module.exports={handleAddRequestForBooks,handleDeleteRequestForBooks};