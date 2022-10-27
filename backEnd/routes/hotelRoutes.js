import express from 'express';
const router =express.Router();
import newHotelModel from '../controllers/newHotel.js' ;


router.route('/').post(newHotelModel).get()//using routes
router.route('/:hotelId').get().patch().delete()


export default (router);