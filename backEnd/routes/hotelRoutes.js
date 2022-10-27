import express from 'express';
const router =express.Router();
import newHotelModel from '../controllers/newHotel.js' ;
import updateHotel from "../controllers/updateHotel.js";
import deleteHotel from "../controllers/deleteHotel.js";


router.route('/').post(newHotelModel).get()//using routes
router.route('/:hotelId').get().patch(updateHotel).delete(deleteHotel)


export default router;