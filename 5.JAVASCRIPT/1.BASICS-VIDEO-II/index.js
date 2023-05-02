console.log('NAMASTE DUNIA');
// console.log('NAMASTE DUNIA');

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~OBJECT CREATE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*let rectangle={
    length:1,
    breadth:2,

    draw: function(){
        console.log('draw');
    }
};*/


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FACTORY FUNCTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*function createRectangle(){
    return rectangle={
        length:4,
        breadth:4,
    
        draw: function(){
            console.log('draw');
        }
    };
}

let rectangleObj1=createRectangle();
console.log(rectangleObj1);
*/

// ----------arguments in factory function-------
/*function createRectangle(len,bre){
    return rectangle={
        length:len,
        breadth:bre,
    
        draw(){
            console.log('draw');
        }
    };
}

let rectangle1=createRectangle(1,2);
console.log(rectangle1);
let rectangle2=createRectangle(3,4);
console.log(rectangle2);
let rectangle3=createRectangle(5,6);
console.log(rectangle3);*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~CONSTRUCTOR FUNCTION -> Pascal Notation~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*function Rectangle(){
    this.length=7;
    this.breadth=8;
    this.draw=function () {
        console.log('drawing');
    }
}

// ----------object creation using constructor function-----------
let rectangle4=new Rectangle();
// console.log(rectangle4);*/

//------------arguments in constructor----------------------------
/*function Rectangle(len,bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function () {
        console.log('drawing');
    }
}

// ---------object creation using constructor function with arguments------------
let rectangle5=new Rectangle(9,10);
// console.log(rectangle5);
*/


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DYNAMIC NATURE OF OBJECTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// adding some property
/*rectangle5.color='blue';
console.log(rectangle5);

//deleting property
delete rectangle5.color;
console.log(rectangle5);*/

// CONSTRUCTOR FUNCTION KA CONSTRUCTOR KAUN HOGA MATLAB let rectangle5=new Rectangle(9,10) ismai Rectangle(9,10) ka constructor kaun hoga;
/*let rectObj=new Function('len','bre',
`this.length=len;
this.breadth=bre;
this.draw=function () {
    console.log('drawing');}`
);

let rectangle6=new rectObj(11,12);
console.log(rectangle6);*/



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FOR LOOPS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const arr=[1,2,3,4,5]

//for of loop iterates through values of array
for(let key of arr){
    console.log(key)
}

//for in loop iterates through index of array
for(let key in arr){
    console.log(key)
}

let rectangle7={
    length:13,
    breadth:14
};


// for in loop : It is used to loop through keys in objects.
for(let key in rectangle7){
    console.log(key,rectangle7[key]);
}

// for of loop : It is used only on iterables like arrays,maps,strings but objects are not iterables but we can apply on it by using hack

// Object.keys(objectName)-->gives keys in object
for(let key of Object.keys(rectangle7)){
    console.log(key);
}

// Object.enteries(objectName)-->gives keys-value pairs of object
// for(let key of Object.entries(rectangle7)){
//     console.log(key);
// }


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ TO CHECK AN OBJECT'S PROPERTY IS IN OBJECT OR NOT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*let object={
    firstName:'shikhar',
    lastName:'bhardwaj',
    age:24
};

if('length' in object){
    console.log('Present');
}

else{
    console.log('Absent');
}

if('age' in object){
    console.log('Present');
}

else{
    console.log('Absent');
}*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~OBJECT CLONING~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let src={
    value1:10,
    value2:20,
    value3:30,
};

//-------------Method 1 -> Iteration  -------------
/*let dest={};
for(let key in src){
    dest[key]=src[key];
}
src.value1++;
console.log(src);
console.log(dest);*/

//-------------Method 2  -> Assign function  -------------
/*let dest=Object.assign({},src);
src.value1++;
console.log(src);
console.log(dest);*/

//-------------Method 3 -> Spread  -------------
// let dest={...src};
// src.value1++;
// console.log(src);
// console.log(dest);