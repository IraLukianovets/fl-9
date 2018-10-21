let fs = require('fs');
let allCars = JSON.parse(fs.readFileSync('./db/data.json'));

exports.getCar = function(req, res) {
   res.status(200).send(allCars);
};

exports.getCarById = function(req, res) {
    const car = allCars.find(c => {
        return c.id === parseInt(req.params.id)
    });
    
    if (car) {
        return res.status(200).send(car);
    }
    res.status(404).send(`Car with ${parseInt(req.params.id)} id has not been found`);
};

exports.postCar = function (req, res) {
    let car = allCars.find(c => c.id === parseInt(req.body.id));
    if (car) {
        return res.status(409).send({message: `Car already exists.`});
    }
    const newCar = {
        id: req.body.id, 
        brand: req.body.brand,
        model: req.body.model,
        engineVolume: req.body.engineVolume,
        year: req.body.year,
    }
    
    allCars.push(newCar);
    res.status(201).send(newCar);
}

exports.updateCar = function (req, res) {
    let car = allCars.find(c => c.id === parseInt(req.params.id));
    if (!car) {
        res.status(404).send(`The car with ${parseInt(req.params.id)} id not found`);
    }
    else {
        car.brand = req.body.brand;
        car.model = req.body.model;
        car.engineVolume = req.body.engineVolume;
        car.year = req.body.year;
        res.status(200).send(car);
    }
}

exports.deleteCar = function (req, res) {
    let car = allCars.find(c => c.id === parseInt(req.params.id));
    if (!car) {
       return res.status(404).send(`The car with ${parseInt(req.params.id)} id not found`);
    }
    
    const index = allCars.indexOf(car);
    allCars.splice(index, 1);
    res.status(200).send( {message: `The car has been successfully removed`});
}