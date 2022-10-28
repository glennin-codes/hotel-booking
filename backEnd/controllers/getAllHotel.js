import hotel from "../models/hotel.js";
const getAllHotel= async (req,res,next)=>{
    let data;
    const  {dataAmount}=req.params
     console.log(dataAmount);
    try {
 
        if (dataAmount){
           data= await hotel.find().limit(Number(dataAmount))
           res.status(200).json(data)
           
        }else{
            data = await hotel.find()
            res.status(200).json(data)
        }
        
        
    } catch (err) {
       return next(err)
    }
}

export default getAllHotel;