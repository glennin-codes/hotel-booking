import hotel from "../models/hotel.js"
const updateHotel= async (req,res,next)=>{
      try {
        const updated= await hotel.findByIdAndUpdate(req.params.hotelId,{$set:req.body},{new:true})
        res.status(200).json(updated);
      } catch (err) {
       return next(err)
      }
}
export default updateHotel;
