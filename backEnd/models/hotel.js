import { Schema } from "mongoose";
import mongoose from 'mongoose';

const hotelSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
      type:String,
      required:true
    },
    city:{
      type:String,
      required:true,
    },
    location:{
      type:String,
      required:true
    },
    distance:{
      type:String,
      required:true
    },
    title:{
      type:String,
      required:true
    },
    desc:{
      type:"string",
      required:true
    },
    photos:{
      type:[String],
      required:false
    },
    rooms:{
      type:[String],
      required:false
    },
    rating:{
      type:Number,
      min:0,
      max:5
    },
    cheapestPrice:{
      type:Number,
      required:true
    },
    featured:{
      type:Boolean,
      required:false
    }

    
})
export default mongoose.model("hotel",hotelSchema);
