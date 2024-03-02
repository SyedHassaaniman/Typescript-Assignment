 
 // Write a program that creates objects containing these items.
 
// Datattype of person object
interface person {
    age : number,
    name : string,
    nationality : string,
    Student : boolean 
}

// person object
 let person :person = {
     age : 18 ,
     name :'Hassaan' ,
     nationality : 'Pakistan' ,
     Student : true 
 } 
// Print person
 console.log(person);

 // Datatype of car object
 interface car {
    Maker : string,
    Color : string,
    Automatic : boolean
 }
 // car object
 let car = {
    Maker : 'Toyota',
    Color : 'Black',
    Automatic : true
 }

 console.log(car);