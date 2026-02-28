//array methods
//forEach Function
let arr=[1,2,3,4,5,];
let print=function(el){
  console.log(el);
};
arr.forEach(print);
//OR

arr.forEach(function(el){
  console.log(el);
});
//OR

arr.forEach((el)=>{
  console.log(el);
});

let arr1=[{
  name:parth,
  marks:95,
},
 {
  name:shraddha,
  marks:96,

} ,
 {
  name:khapra,
  marks:97,
 }];

 arr.forEach((student)=>{
  console.log(student.marks);
 }
);



//map Function

let num=[1,2,3,4];

let double=num.map(function(el){
  return el*2;
});

let gpa=students.map((el)=>{
  return el.marks/10;
})

//filter function

let num1=[1,2,3,4,5,6];
let even= num.filter((el)=>{
  return el%2==0;
});

//Every function
[1,2,3,4].every((el)=> el%2==0);//even no check
//false 

[6,2,4].every((el)=> el%2==0);
//true

[1,2,3,4].every((el)=> el%2 !=0); //odd no check

//Reduce fumction
let num2=[1,2,3,4];
let finalValue=num2.reduce((res,el)=>res+el);
console.log(finalValue)

//Maximum of array  
let arr=[1,2,3,4,5];
let max=-1;
for(let i = 0; i<arr.length; i++){
  if(max<arr[i]){
    max=arr[i];
  }
}
console.log(max);

//OR

let max=arr.reduce((max,el)=>{
  if(max<el){
    return el;
  }
  else{
    return max;
  }
})
console.log(max);

//check if every no in the array is a multiple of 10;
let nums=[10,20,30,40]
let ans=nums.every((el)=>el%10==0);
console,log(ans);

//print the min no
let min = nums.min((min,el)=>{
  if(min<el){
    return min;
  }
  else{
    return el;
  }
});
console.log(min);

//or
function getMin(nums){
  let min = nums.min((min,el)=>{
  if(min<el){
    return min;
  }
  else{
    return el;
  }
});
  return min;
}
