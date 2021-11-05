import * as _ from 'lodash'; 

async function hello() {
    return 'world'; 
}

const url = new URL(); 

//* annotate with type -- implicit strong type code 
let lucky = 23; 

lucky = '23'; 

// opt out of type checking with : any 
//! Don't do this -- it just gives typescript more flexibility
let optOutOfTypeChecking:any = 23; 

optOutOfTypeChecking = '23'; 

//* annotate with type -- explicity strong type code 
let thisIsANumber: number; 

thisIsANumber = 23; // errors out bc string
thisIsANumber = '23'; // errors out bc string

//* create own types from scratch 

type Style = 'bold' | 'italic' | 23; 

let font: Style; 

font = 'bold'; 
font = 'italic'; 
font = 23; 
font = 30;  // 23 is not part of custom type

// most of the time you'll be stong typing objects with multiple properties and types 
// here we want to enforce that both object shapes have a first and last name with string types

//* we can enforce the shape of an object with an interface
interface Person {
    first: string; 
    last: string; 
    [key: string]: any; // can include any properties
}

const person: Person = {
    first: 'first', 
    last: 'person',
}
const person2: Person = {
    first: 'second', 
    last: 'person',
    fast: true,
}

//* strong type Functions 
// here we only want numbers as arguments in our function
// we also type annotate the return value to string
function pow(x:number, y:number): string {
    return Math.pow(x, y).toString(); 
}

function dontReturnValue(x:number, y:number): void {
    Math.pow(x,y).toString(); // :void -- no return value
}

//* strong type Array

const arr: number[] = [] // : number[] -- brackets signify its an array 

arr.push(1) 
arr.push('23') 
arr.push(false) 

const arrOfObjects: Person[] = [] // strong type an array of objects

arrOfObjects.push(1) 
arrOfObjects.push('23') 
arrOfObjects.push(false) 
arrOfObjects.push({
    first: 'first', 
    last: 'last', 
    any: 'anything', 
}) 

//* new data structure -- tuple 
// fixed length array 
// each item in array has its own type 

type MyList = [number?, string?, boolean?] // question mark syntax marks items as optional in array
// question mark syntax can also be used to make function arguments optional

const tupleArray: MyList  = [23, '23', false, 'not in tuple']

//* Generics
// situation where you might want to use a type internally in a class or function

// RxJS Observable -- class that has an internal value you can observe
// basically a function that can return a stream of values to an observer ove time, this can either be synchronously or asynchronously. The data values returned can go from zero to an infinite range of values. 

class Observable<T> {
    constructor(public value: T) {}
}

//? <T> allows us to specify the interal type at some later point in the code

let x: Observable<number>; // observable of number
let y: Observable<Person>; // observable of Person interface

let z = new Observable(23); // implicitly has internal number type



