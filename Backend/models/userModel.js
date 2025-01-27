const {addDoc,getDocs,setDoc,getDoc,doc,deleteDoc} = require('firebase/firestore');
const {Users} = require('../firebaseConfig.js');
const { json } = require('express');

const createUser = async (data) => {
  try {
    const doc=await addDoc(Users, data);
    return {msg: 'User Created', docId: doc.id,status: 201};
  } catch (error) {
    return {msg: 'Failed to create user', details: error.message, status: 400};
  }
} 

const getAllUsers=async()=>{
  try{
    const snapshot=await getDocs(Users);
    // console.log(snapshot);
    const users=[];
    snapshot.forEach(user=>{
      users.push({id:user.id,...user.data()}); 
    });
    // console.log(users);
    return {msg: 'Users found', data: users, status: 200};
  } catch (error){
    return {msg: 'Failed to get users', details: error.message ,status:400};
  }
}

const getUserById=async(id)=>{
  try{
    const docRef=doc(Users, id);
    // console.log(id);
    const docSnap=await getDoc(docRef);
    if(docSnap.exists()){
      return {msg:'User found',data:({id:docSnap.id,...docSnap.data()}),status:200};
    } else {
      return {msg: 'User not found',status: 404};
    }
  } catch (error){
    return {msg: 'Failed to get user', details: error.message, status: 400};
  }
}

const updateUser=async(data)=>{
  try{
    const {id,...userData}=data;
    const docRef=doc(Users, id);
    await setDoc(docRef, userData);
    return {msg: 'User Updated',data: userData,status: 200};
  } catch (error){
    return {msg: 'Failed to update user', details: error.message,status: 400};
  }
}

const deleteUser=async(id)=>{
  try{
    const docRef=doc(Users, id);
    await deleteDoc(docRef);
    return {msg: 'User Deleted',status: 200};
  } catch (error){
    return {msg: 'Failed to delete user', details: error.message,status: 400};
  }
}

module.exports = {createUser, getAllUsers, getUserById, updateUser, deleteUser};