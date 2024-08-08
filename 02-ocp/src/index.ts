import TypeVehicle from "./TypeVehicle";
import Car from "./vehicle/Car";
import Motorcycle from "./vehicle/Motorcycle";

const type = TypeVehicle.CAR;
let vehicle: Car | Motorcycle;

if (type === TypeVehicle.CAR) {
    vehicle = new Car(
        "amarelo",
        2024,
        2.0,
        4,
        4
    );
} else if (type === TypeVehicle.MOTORCYCLE) {
    vehicle = new Motorcycle(
        "amarelo",
        2024,
        150
    );
}