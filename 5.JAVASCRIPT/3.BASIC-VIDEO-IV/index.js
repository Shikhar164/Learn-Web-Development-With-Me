console.log('CHALIYE SHURU KARTE H');

//------------------FUNCTION CALLING-----------------------
walk();//function calling is happening before function declaration because of HOISTING.

//------------------FUNCTION DECLARATION---------------------
function walk(){
    console.log('walk');
}

//----------------NAMED FUNCTION ASSIGNMENT---------------------
let stand= function standing(){
    console.log('standing');
}

stand();//stand() cannot call earlier than the standing() declaration here hoisting does not work in function assignment

//------------------ANONYMUS FUNCTION ASSIGNMENT----------------
let jump=function(){
    console.log('jumping');
}

jump();

//GETTER AND SETTER
// let person={
//     fName:'Shikhar',
//     lName:'Bhardwaj',
//     get fullName(){
//         return `${this.fName} ${this.lName}`
//     },
//     set fullName(value){
//         let parts=value.split(' ');
//         this.fName=parts[0];
//         this.lName=parts[1];
//     }
// }

// console.log(person.fullName);
// person.fullName='rahul sharma';
// console.log(person.fullName);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ERROR HANDLING~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let person={
//     fName:'Shikhar',
//     lName:'Bhardwaj',
//     get fullName(){
//         return `${this.fName} ${this.lName}`;
//     },
//     set fullName(value){
//         if(typeof value!== String)
//             throw new Error('THIS IS NOT A STRING');
//         let parts=value.split(' ');
//         this.fName=parts[0];
//         this.lName=parts[1];
//     }
// }

// try{
//     person.fullName=1;
// }

// catch(e){
//     alert(e);
// }

//---------------TYPE OF FOR IN LOOP IS STRING WHERE AS TYPEOF FOR OF LOOP IS NUMBER---------------------
// let arr=[1,2,3,4];
// let total=0;
// for(let value of arr){
//     total+=value;
// }
// console.log(total)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~REDUCE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let arr=[1,2,3,4,5,6]
// let newarr=arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
// console.log(newarr)




