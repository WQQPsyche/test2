class Person{
    public name:string;
    private _age:number;
    constructor(name:string,age:number){
        this.name = name;
        this._age = age;
    }

    public set age(age:number){
        this._age = age;
    }

    public get age(){
        return this._age;
    }
}