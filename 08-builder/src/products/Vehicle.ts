import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Vehicle {
    private _vehicleType: VehicleType;
    private _seats: number;
    private _engine: Engine;
    private _transmission: Transmission;
    private _wheels: Wheel[] = [];

    public get vehicleType() : VehicleType {
        return this._vehicleType;
    }

    public set vehicleType(v : VehicleType) {
        this._vehicleType = v;
    }
    
    public get seats() : number {
        return this._seats;
    }

    public set seats(v : number) {
        this._seats = v;
    }

    public get engine() : Engine {
        return this._engine;
    }
    
    public set engine(v : Engine) {
        this._engine = v;
    }
    
    public get transmission() : Transmission {
        return this._transmission;
    }
    
    public set transmission(v : Transmission) {
        this._transmission = v;
    }
    
    public get wheels() : Wheel[] {
        return this._wheels;
    }

    public get wheelsTotal() : number {
        return this._wheels.length;
    }

    public addWheel(wheel: Wheel) {
        this._wheels.push(wheel);
    }
}