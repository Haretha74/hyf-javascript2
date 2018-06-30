

//generate cars function
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateCars(numberOfCars) {
    const cars = [];
    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
	const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];

for (let i = 0; i < numberOfCars; i++) {
    const car = {};
    const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
    const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

    car.make = carMakes[randomMakeIndex];
    car.color = carColors[randomColorIndex];
    car.speed = randomIntFromInterval(0, 100);

    cars.push(car);
    }

return cars;
}


//Use the carGenerator function to generate 10 cars.
const listOfCars = generateCars(10); 

console.log(listOfCars);



//1.1: Cars with speeds between 30 and 60

let CarsSpeed = generatedCars.filter(car => car.speed > 30 && car.speed < 60);
console.log('-> cars speed: ');
console.log(CarsSpeed) 

//1.2: The makes of the cars that are not lightyellow

let nonLightyellow = [];

nonLightyellow = listOfCars.filter( car => car.color !== "lightyellow" );

let nonLightyellowMake = [];

for (var i = 0; i < nonLightyellow.length; i++ ){
    nonLightyellowMake[i] = nonLightyellow[i].make; 
}
console.log(nonLightyellowMake);




//1.3 Change to Danish

function modifyKey(oldCars) {
  let car = {};
  car['maerke'] = oldCars.make;
  car['fart'] = oldCars.speed;
  car['farve'] = oldCars.color;
  return car;
}

let mapNewCars = listOfCars.map(modifyKey);
console.log('-> map new cars: ');
console.log(mapNewCars);

