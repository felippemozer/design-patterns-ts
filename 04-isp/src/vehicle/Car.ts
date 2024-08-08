import IVehicleCar from "./IVehicleCar";

export default class Car implements IVehicleCar {

    constructor(
        color: string,
        year: number,
        engine: number,
        seats: number
    ) {
        this.configure(
            color,
            year,
            engine,
            seats
        );
    }
    configure(color: string, year: number, engine: number, seats: number): void {
        console.log(`Criando um carro: ${color}, ${year}, com motor ${engine} e com ${seats} assentos`);

        this.startVehicle();
    }
    startVehicle(): void {
        console.log("Ligando os motores");
    }
}