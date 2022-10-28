import hotel from "../models/hotel.js";

//posting hotels to hoteldb;
const newHotelModel=async (req,res,next)=>{
   const  newHotel = new hotel(req.body)
    try{
       const savedHotel= await newHotel.save();
       res.status(200).json(savedHotel); 
    }catch (err){
         return next(err)
    }
}
export default newHotelModel;