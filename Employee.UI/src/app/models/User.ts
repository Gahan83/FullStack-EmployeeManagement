export class User {
    userId:number;
    fName:string;
    lName:string;
    uName:string;
    city:string;
    state:string;
    zipCode:string;
    isAgree:boolean

    constructor() {
        this.userId = 0;
        this.fName = "";
        this.lName = "";
        this.uName = "";
        this.city = "";
        this.state = "";
        this.zipCode = "";
        this.isAgree = false;
    }
}
