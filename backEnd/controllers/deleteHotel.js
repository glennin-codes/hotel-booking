import hotel from "../models/hotel.js";
const deleteHotel =async (req,res,next)=>{
    try {
         const deletedHotel= await hotel.findByIdAndDelete(req.params.hotelId)
        res.status(200).json("hotel has been delete")
    } catch (err) {
      return next(err)
    }
}
export default deleteHotel