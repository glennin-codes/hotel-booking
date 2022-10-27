import hotel from "../models/hotel.js";
const deleteHotel =async (req,res)=>{
    try {
         const deletedHotel= await hotel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
}
export default deleteHotel