export class FullName {
    constructor(private firstName?:string, private lastName?:string){
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}