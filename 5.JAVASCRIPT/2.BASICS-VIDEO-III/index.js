console.log('START KARTE H');

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~STRINGS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*let lastName=new String('bhardwaj');
console.log(lastName);
console.log(typeof lastName);

let firstName='shikhar';
console.log(firstName);
console.log(typeof firstName);

// TO MAKE STRING PRIMITIVE DATATYPE TO OBJECT USE .
console.log(firstName.length);
console.log(firstName[0]);
console.log(firstName.includes('sh'));
console.log(firstName.toUpperCase());*/

// TEMPLATE LITERAL
/*let message=`mai 
hu 
hero tera`;
console.log(message);

// DATE AND TIME OBJECT
let date=new Date();
console.log(date);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ARRAYS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let numbers=[1,2,3,4];
console.log(numbers);*/

//----------------------INSERTION--------------------
//push
/*numbers.push(6);
console.log(numbers)

//unshift
numbers.unshift(-1);
console.log(numbers)

//splice
numbers.splice(3,0,'a','b','c');
console.log(numbers);*/

//WE WANT TO CHECK THAT A NUMBER IS EXIST OR NOT IN ARRAY ON PRIMITIVES
// 1.METHOD
/*if(numbers.indexOf(4)!=-1){
    console.log('present');
}
else{
    console.log('absent');
}

// 2.METHOD
console.log(numbers.includes(7));

// 3.METHOD
console.log(numbers.indexOf(1,2));//arrayName.indexOf(kaunsa number,kausne index se)*/


//WE WANT TO CHECK THAT A NUMBER IS EXIST OR NOT IN ARRAY ON ARRAY OF OBJECTS
// NOTE:-
// HERE includes AND indexOf METHOD DOES NOT WORK BECAUSE THEY ARE NOT COPY VALUES THEY ARE OBJECTS SO THIS IS REFRENCE WHICH BOTH ARE DIFFERENT REFERENCED OBJECTS. 
/*let courses=[
    {no:1,courseName:'web_development'},
    {no:2,courseName:'data_structures'},
]
console.log(courses);

let course=courses.find(function(course_argument){
    return course_argument.courseName==='web_development';
})

console.log(course);

// ------------BY USING ARROW FUNCTION--------------------
let course1=courses.find(course_argument=> course_argument.courseName==='data_structures');

console.log(course1);*/

//-------------REMOVING ELEMENT--------------------------
/*let numbers=[1,2,3,4,5,6,7];
console.log(numbers);

// METHOD-I FROM END
numbers.pop();
console.log(numbers);

//METHOD-II FROM START
numbers.shift();
console.log(numbers);

//METHOD-III ANYWHERE
numbers.splice(2,1);
console.log(numbers);*/

//-------------EMPTYING AN ARRAY--------------------------
// let numbers1=[1,2,3,4,5,6,7];
// let numbers2=numbers1;

/*numbers1=[];
console.log(numbers1);
//THIS PRINT EMPTY ARRAY i.e.[]
console.log(numbers2); 
//THIS PRINT-->(7) [1, 2, 3, 4, 5, 6, 7] because timestamp:1:15:00*/

//METHOD -I
/*numbers1.length=0;
numbers2=numbers1;
console.log(numbers1);
console.log(numbers2);*/

//METHOD -II
/*numbers1.splice(0,numbers1.length);
console.log(numbers1);
console.log(numbers2)*/

//-----------------CONCATENATION----------------------------------
// let first=[1,2,3];
// let second=[4,5,6];

//METHOD-I --> concat()
// let combined=first.concat(second)
// console.log(combined)

//METHOD-II --> spread opertor
// let combined=[...first,...second]
// console.log(combined);

//ADDING CAN ALSO DONE
// combined=[...first,'HI',...second,'HELLO']
// console.log(combined);

//COPY KAISE CREATE KARU
// let combined=first.concat(second);
// let anotherCopy=[...combined];// yeh h copy
// combined=[...first,'HI',...second,'HELLO'];
// console.log(anotherCopy);

//--------------------FOR LOOPS IN ARRAYS-----------------
let arr=[10,20,30,40,50,60];

//FOR IN LOOP
// for(let keys in arr){
//     console.log(keys);
// }

//FOR OF LOOP
// for(let values of arr){
//     console.log(values);
// }

//FOR EACH LOOP
// arr.forEach(function(number){
//     console.log(number);
// })

//FILTER
let numbers=[1,2,3,-4,5,-6];
// let filtered=numbers.filter(function(values){
//     return values>=0;
// })
// console.log(filtered);

//-------------in arrow function-----------------
let filtered=numbers.filter(values=>values>=0);
console.log(filtered);