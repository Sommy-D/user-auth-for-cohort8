const productModel = require('../model/productModel.js');
const userModel = require('../model/userModel.js');

// Create a new product
const uploadProduct = async (req, res) => {
    try {
        const getUserID = await userModel.findById(req.params.userId);
        const {name, description, price, category, stock, quantity, image} = req.body;
        if(!getUserID){
            return res.status(404).json({
                message : "User not found"
            })
        }
        const product = await productModel.create(
            { name, description, price, category, stock, quantity, image 

            });
            
        await getUserID.products.push(product._id);
        await getUserID.save();
        
        res.status(201).json({
            message: 'Product uploaded successfully',
            data : product
        });
    } catch (error) {
        res.status(500).json({ message: error.message });   
        }
    }


// Get all products
const getAllProducts = async (req, res) => {
    try{
        const products = await productModel.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {uploadProduct, getAllProducts};