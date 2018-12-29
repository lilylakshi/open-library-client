export class Alert {

    constructor(private type: AlertType, private message: string) {}
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}