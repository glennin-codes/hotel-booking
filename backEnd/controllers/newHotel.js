import Hotel from "../models/hotel";

//posting hotels to hoteldb;
const newHotelModel=async (req,res)=>{
   const  newHotel = new Hotel(req.body)
    try{
       const savedHotel= await newHotel.save();
       res.status(200).json(savedHotel); 
    }catch (err){
         res.status(500).json(err)
    }
}
export default newHotelModel;