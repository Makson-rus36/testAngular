export class MessageModel {


  constructor(id: string, text: string, creationDate:string="") {
    this._id = id;
    this._text = text;
    this._creationDate = creationDate;
  }


  get creationDate(): string {
    return this._creationDate;
  }

  set creationDate(value: string) {
    this._creationDate = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }
  private _id:string;
  private _text:string;
  private _creationDate:string;
}
