export class Alert {

    constructor(private _type: AlertType, private message: string) {}

    public get type(): AlertType {
        return this._type;
    }
    public set type(value: AlertType) {
        this._type = value;
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}