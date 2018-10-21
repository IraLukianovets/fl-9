const carCtrl = require ('./handlers/car.js');
import { checkAuthorization } from './middlewares/delete-authorization';
let express = require('express');
let carRouter = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

carRouter.get('/car', carCtrl.getCar);

carRouter.get('/car/:id', carCtrl.getCarById);

carRouter.post('/car', jsonParser, carCtrl.postCar);

carRouter.put('/car/:id', jsonParser, carCtrl.updateCar);

carRouter.delete('/car/:id', checkAuthorization, carCtrl.deleteCar);
  
module.exports = carRouter;