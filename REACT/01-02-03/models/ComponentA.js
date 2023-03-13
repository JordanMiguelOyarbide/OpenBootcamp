import { LINE } from "./ComponentB";


 export class ComponenteA {
    FirtName = "";
    LastName = "";
    Email = "";
    Line = LINE.ONLINE

    constructor(FirtName, LastName, Email, Line) {
        this.FirtName = FirtName;
        this.LastName = LastName;
        this.Email = Email;
        this.Line = Line
    }
 }