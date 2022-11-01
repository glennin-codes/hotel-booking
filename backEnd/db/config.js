import mongoose from "mongoose"

// Connect to MongoDB

 const connect = (url)=>{
    return mongoose.connect(url)

 }
 
 export default connect