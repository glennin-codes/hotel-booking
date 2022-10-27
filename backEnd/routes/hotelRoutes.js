import express from 'express';
const router =express.Router();
import newHotelModel from '../controllers/newHotel.js' ;
import updateHotel from "../controllers/updateHotel.js";
import deleteHotel from "../controllers/deleteHotel.js";
import getHotel from "../controllers/getHotel.js";
import getAllHotel from "../controllers/getAllHotel.js";

router.route('/').post(newHotelModel)
router.route(`/${dataAmoumnt}`).get(getAllHotel)//using routes
router.route('/:hotelId').get(getHotel).patch(updateHotel).delete(deleteHotel)


export default router;