import user from "../models/user.js";


export const getAllUsers= async (req,res,next)=>{
   
    try {
         let data;
   const  dataAmount=req.params
    console.log(dataAmount);
        if (dataAmount){
           data=await user.find().limit(Number(dataAmount))
           res.status(200).json(data)
           
        }else{
            data = await user.find()
            res.status(200).json(data)

        }
        
    } catch (err) {
       return next(err)
    }
}

export const getUser=async (req,res,next)=>{
    try {
    const getParticularUser= await user.findById(req.params.userId);
    res.status(200).json(getParticularUser)
    } catch (err) {
      return next(err)
    }

}
 
export const updateUser= async (req,res,next)=>{
    try {
      const updated= await user.findByIdAndUpdate(req.params.userId,{$set:req.body},{new:true})
      res.status(200).json(updated);
    } catch (err) {
     return next(err)
    }
}
export const deleteUser =async (req,res,next)=>{
    try {
         const deletedUser= await user.findByIdAndDelete(req.params.userId)
        res.status(200).json("User has been deleted succefuly")
    } catch (err) {
      return next(err)
    }
}