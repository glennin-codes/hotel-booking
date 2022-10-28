import hotel from "../models/hotel.js";
const getAllHotel= async (req,res,next)=>{
   
    try {
         let data;
   const  dataAmount=req.params
    console.log(dataAmount);
        if (dataAmount){
           data=await hotel.find().limit(Number(dataAmount))
           res.status(200).json(data)
           
        }else{
            data = await hotel.find()
            res.status(200).json(data)

        }
           
        res.status(200).json(getAll)
        
    } catch (err) {
       return next(err)
    }
}

export default getAllHotel;