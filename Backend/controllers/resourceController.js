const {store,Resources}= require('../firebaseAdminConfig');
const {addResource,getAllResources,getResourceById, updateResource, updateResourceRating, deleteResource}=require('../models/resourceModel');
const multer=require('multer');
const storage=multer.memoryStorage();
const upload = multer({storage: storage});


const handleAddResource = async (req, res) => {
  try {
    // Handle file upload with multer
    upload.single('document')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ msg: 'Failed to upload file1', details: err.message });
      }

      const file = req.file;
      if (file) {
        const bucket = store.bucket();
        const fileUpload = bucket.file(file.originalname);

        await fileUpload.save(file.buffer, {
          contentType: file.mimetype,
          public: true
        });

        const url = await fileUpload.getSignedUrl({
          action: 'read',
          expires: '03-17-2025'
        });

        const {userRating,numUserRated,genre,...rest}=req.body;
        const genreArray=genre.split(',').map((item)=>item.trim());
        const data = {
          userRating: isNaN(Number(userRating))?0:Number(userRating),
          numUserRated: isNaN(Number(numUserRated))?0:Number(numUserRated),
          genre: genreArray,
          ...rest,
          fileUrl: url[0],
          createdAt: new Date().toISOString(),
        };

        const response = await addResource(data);
        res.status(response.status).json(response);
      } else {
        res.status(400).json({ msg: 'Failed to upload file' });
      }
    });
  } catch (error) {
    res.status(400).json({ msg: 'Failed to upload file', details: error.message });
  }
};

const handleGetAllResources = async (req, res) => {
  const response = await getAllResources();
  res.status(response.status).json(response);
};

const handleGetResourceById = async (req, res) => {
  const id = req.params.id;
  const response = await getResourceById(id);
  res.status(response.status).json(response);
};

const handleUpdateResource = async (req, res) => {
  const id=req.params.id;
  try{
    upload.single('document')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ msg: 'Failed to upload file1', details: err.message });
      }

      const docRef=Resources.doc(id);
      const docSnap=await docRef.get();

      if(!docSnap.exists){
        return {msg: 'Resource not found', status: 404};
      }
      
      if(req.file){
        const oldFileUrl=docSnap.data().fileUrl;
        const oldFileName = decodeURIComponent(oldFileUrl.split('/').pop().split('?')[0]);
        const bucket=store.bucket();
        const oldFile=bucket.file(oldFileName);
        await oldFile.delete();
      }

      if(req.file){
        const file=req.file;
        const bucket=store.bucket();
        const fileUpload=bucket.file(file.originalname);

        await fileUpload.save(file.buffer,{
          contentType: file.mimetype,
          public: true
        });
        
        newFileUrl=await fileUpload.getSignedUrl({
          action: 'read',
          expires: '03-17-2025'
        });

        const data = {
          id: id,
          name: req.body.name,
          fileUrl: newFileUrl[0],
          createdAt: new Date().toISOString(),
        };

        const response = await updateResource(data);
        res.status(response.status).json(response);
      } else {
        res.status(400).json({ msg: 'Failed to upload file' });
      }
    }); 
  } catch (error){
    res.status(400).json({ msg: 'Failed to update resource', details: error.message });
  }
}

const handleUpdateResourceRating = async (req, res) => {
  try{
    const id=req.body.id;
    const rating=req.body.userRating;
    const response=await updateResourceRating(id,rating);
    res.status(response.status).json(response);
  } catch (error){
    res.status(400).json({ msg: 'Failed to update resource rating', details: error.message });
  }
}

const handleDeleteResource = async (req, res) => {
  const id = req.params.id;
  try {
    const docRef = Resources.doc(id);
    const docSnap = await docRef.get();
    
    if (!docSnap.exists) {
      return res.status(404).json({ msg: 'Resource not found' });
    }

    // Delete the file from Firebase Storage
    const oldFileUrl = docSnap.data().fileUrl;
    const oldFileName = decodeURIComponent(oldFileUrl.split('/').pop().split('?')[0]);
    const bucket = store.bucket();
    const oldFile = bucket.file(oldFileName);

    await oldFile.delete(); // Delete file from storage

    // Now delete the resource from Firestore
    const response = await deleteResource(id); // Ensure this function deletes the Firestore document
    return res.status(response.status).json(response); // Send the response back

  } catch (error) {
    return res.status(400).json({ msg: 'Failed to delete resource', details: error.message });
  }
};

module.exports={handleAddResource, handleGetAllResources,handleGetResourceById,handleUpdateResource,handleUpdateResourceRating,handleDeleteResource};