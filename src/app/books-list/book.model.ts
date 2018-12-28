export class Book {

    private _desc: string;
    private _frontCover: string;
    private _backCover: string;
    private _lang: string;
    
    constructor(public isbn: number, public title: string, public author: string, public quantity: number) {}

    public get desc(): string {
        return this._desc;
    }
    public set desc(value: string) {
        this._desc = value;
    }
    public get frontCover(): string {
        return this._frontCover;
    }
    public set frontCover(value: string) {
        this._frontCover = value;
    }
    public get backCover(): string {
        return this._backCover;
    }
    public set backCover(value: string) {
        this._backCover = value;
    }
    public get lang(): string {
        return this._lang;
    }
    public set lang(value: string) {
        this._lang = value;
    }
}