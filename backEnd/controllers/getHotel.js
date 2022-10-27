import hotel from "../models/hotel.js";
const getHotel=async (req,res)=>{
    try {
    const getParticularHotel= await hotel.findById(req.params.hotelId);
    res.status(200).json(getParticularHotel)
    } catch (error) {
        res.status(500).json(error)
    }

}
export default getHotel;