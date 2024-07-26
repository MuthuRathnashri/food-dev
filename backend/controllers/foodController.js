import foodModel from "../models/foodModel.js";
import fs from 'fs'

// Building API to add food items

// add food item
const addFood = async (req,res) => {
    //logic to store prd data in db

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//all food list api 
const listFood = async(req,res) =>{
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log("Error")
        res.json({success:false,message:"Error"})
    }
}


//remove food item
const removeFood = async (req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})


        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addFood,listFood,removeFood}