import Director from "./director/Director";
import VehicleBuilder from "./builders/VehicleBuilder";
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.createSedanCar();
const sedan: Vehicle = builder.getVehicle();
console.log(`Criando um veículo do tipo: ${sedan.vehicleType} com ${sedan.wheelsTotal} rodas`);

director.createTruck();
const truck: Vehicle = builder.getVehicle();
console.log(`Criando um veículo do tipo: ${truck.vehicleType} com ${truck.wheelsTotal} rodas`);

director.createMotorcycle();
const motorcycle = builder.getVehicle();
console.log(`Criando um veículo do tipo: ${motorcycle.vehicleType} com ${motorcycle.wheelsTotal} rodas`);