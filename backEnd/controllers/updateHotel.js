import hotel from "../models/hotel.js"
const updateHotel= async (req,res)=>{
      try {
        const updated= await hotel.findByIdAndUpdate(req.params.hotelId,{$set:req.body},{new:true})
        res.status(200).json(updated);
      } catch (err) {
        res.status(500).json(err)
      }
}
export default updateHotel;
