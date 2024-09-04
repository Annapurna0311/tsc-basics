let age : number = 20;
if(age < 60)
    age += 10;
console.log(age)
// let w: unknown = 1;
// w = "string"; // no error
// w = {
//   runANonExistentMethod: () => {
//     console.log("I think therefore I am");
//   }
// } as { runANonExistentMethod: () => void}
// if(typeof w === 'object' && w !== null) {
//   (w as { runANonExistentMethod: Function }).runANon
//   ExistentMethod();
// }


// ARRAYS IN TSC
let names:readonly string[] = ['sheena', ' meena' , 'teena'];
// let numbers = [1,2,3];
// names.push("sheena")
// names.push("meena")
// names.push("teena")
console.log(names)


//TUPLES IN TSC
let ourTuple : [number , boolean , string];
ourTuple = [5 ,false , 'Annapurna']

const graph : [x : number , y : number] = [ 22, 66];


// OBJECTS IN TSC
const car : { type : string , model : string , ugc:boolean , year :number , mileage?:number} = {
    type : "Hyundai",
    model : "VERNA",
    ugc : true,
    year : 2021
};
car.type = "Ford";
car.mileage = 3000;

//ENUMS IN TSC PascalCase
const enum Size{
  Xsmall=1  , Small , Medium , Large , Xlarge
}
let mySize:Size = Size.Medium;
console.log(mySize)

//FUNCTIONS IN TSC
function getAdd(a:number , b:number , c?:number): number{
  return a+ b+(c || 0);
}
console.log(getAdd(4 , 5));

function pow(val : number , exp:number = 10):number{
  return val ** exp;
}
console.log(pow(2));

class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName());