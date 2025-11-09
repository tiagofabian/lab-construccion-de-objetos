// Type your code below this line!
function Car(brand, model, year, engineType, color, mileage) {
  this.brand = brand
  this.model = model
  this.year = year
  this.engineType = engineType
  this.color = color
  this.mileage = mileage
 
  this.showCarDescription = function() {
    console.log("### Caracteristicas ###")
    console.log(`marca: ${brand}\nmodelo: ${model}\naño: ${year}\ntipo de motor: ${engineType}\ncolor: ${color}\nkilometraje: ${mileage}`)
  };
}

const newCar = new Car("Toyota", "Camry", 2022, "Hybrid", "Silver", 18500);

newCar.showCarDescription();
// Type your code above this line!

