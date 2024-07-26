//connection with db
import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://MuthuRathnashri:Rathna*2004@cluster0.ddpa7qj.mongodb.net/food-dev').then(()=>console.log("DB Connected"));
}