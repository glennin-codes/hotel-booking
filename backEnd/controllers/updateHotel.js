import hotel from "../models/hotel"
const UpdateHotel= async (req,res)=>{
      try {
        const updated= await hotel.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).json(updated);
      } catch (err) {
        res.status(500).json(err)
      }
}
