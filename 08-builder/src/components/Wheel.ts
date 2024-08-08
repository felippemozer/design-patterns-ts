export default class Wheel {
    constructor(private _rim: number) {}

    public get rim() : number {
        return this._rim;
    }

    public set rim(v : number) {
        this._rim = v;
    }
}