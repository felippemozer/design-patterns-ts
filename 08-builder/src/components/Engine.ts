export default class Engine {
    constructor(private _power: number) {}
    
    public get power() : number {
        return this._power;
    }

    public set power(v : number) {
        this._power = v;
    }
}