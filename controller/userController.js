const userModel = require('../model/userModel.js');
/**
 * CRUD operations for user management
 * CREATE USER: Create a new user in the database
 * READ USER (GET): GENERAL/SINGLE) Retrieve user information from the database
 * UPDATE USER: Update existing user information in the database
 * DELETE USER: Remove a user from the database
 */

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.create({ name, email, password });
    res.status(201).json({
        message: 'User created successfully',
        data : user
    });
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
}

//GENERAL GET USER: Retrieve user information from the database
const getAllUsers = async (req, res) =>{
    try{
        const getAll = await userModel.find()
        return res.status(200).json({
            message : "All users fetched succesffully",
            data : getAll
        })
    }catch(error){
        return res.status(500).json({
            message : error.message
        })
    }
}

// GET SINGLE USER: Retrieve a single user information from the database
const getSingleUser = async(req, res) =>{
    try{
        const {id} = req.params
        const getSingle = await userModel.findById(id)
        if(!getSingle){
            return res.status(404).json({
                message : "User not found"
            })
        }
        return res.status(200).json({
            message : "User fetched successfully",
            data : getSingle
        })
    }catch(error){
        return res.status(500).json({
            message : error.message
        })
    }
}

// Update existing user information in the database
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const update = await userModel.findByIdAndUpdate(id, { name, email, password }, { new: true });
    return res.status(200).json({
      message: 'User updated successfully',
      data: update
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }}

  // Delete a user from the database
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await userModel.findByIdAndDelete(id);
    return res.status(200).json({
      message: 'User deleted successfully',
      data: deleteUser
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
}
module.exports = {createUser, getAllUsers, getSingleUser, updateUser, deleteUser};