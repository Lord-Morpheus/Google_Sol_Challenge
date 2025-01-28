const {signUp, login} = require('../models/authModel');

const handleSignUp = async (req, res) => {
  const data=req.body;
  const response=await signUp(data);
  res.status(response.status).json(response);
}

const handleLogin = async (req, res) => {
  const {email,password}=req.body;
  const response=await login(email,password);
  res.status(response.status).json(response);
}

module.exports = {handleSignUp, handleLogin};