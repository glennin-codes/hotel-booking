import hotel from "../models/hotel.js";
const getHotel=async (req,res,next)=>{
    try {
    const getParticularHotel= await hotel.findById(req.params.hotelId);
    res.status(200).json(getParticularHotel)
    } catch (err) {
      return next(err)
    }

}
export default getHotel;