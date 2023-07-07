'use strict';
console.log('hello');

/*******  lecture 162(flat and flatMap) ************/

// const arr=[1,1,[3,4],[5,6],7,8];
// console.log(arr.flat());   // for 1 nested array

// const arr1=[1,[1,[3,4],[5,6],7],8];
// console.log(arr1.flat(2));   // for 2 nested array

/*******  lecture 163(Sorting Arrays) ************/

// const owners=["Jonas","Zach","adam","Martha"];
// console.log(owners.sort());
// console.log(owners);

// const cash=[130,50,-120,300,60,-20];
// console.log(cash.sort());   // Not working Properly

// cash.sort((a,b)=>{          // Good Method of Ascending
//     if(a>b) return 1;
//     if(a<b) return -1
// })
// console.log(cash);

// cash.sort((a,b)=>a-b);  // Best Method of Ascending
// cash.sort((a,b)=>b-a);  // Best Method of Descending
// console.log(cash);

/*******  lecture 164(Sorting Arrays) ************/

// const a = new Date(2037,10,19,5,30,10);
// console.log(a.getTime()/(24*60*60*1000));
// console.log(new Date(2142201610000));
// console.log(+a);

// const daysPassed = (date1,date2)=>{return (date2-date1)/(1000*60*60*24)};

// const days1=daysPassed(new Date(2037,10,25),new Date(2037,10,29))
// console.log(days1);
// const a=["spinac","potato"]
// const myRes=setTimeout((ing1,ing2)=>console.log(`here is your pizzas,${ing1},${ing2}`),3000,...a
// );
// console.log('waiting...');

// if(a.includes('spinach')) clearTimeout(myRes);

// let z=0;
// const interval=setInterval(()=>{
//    console.log(z);
//     z++;
//     if(z==5) clearInterval(interval);
// },1000)


// const arr=[1,2,3,4,5];
// let add=[6,7,8];
// console.log(arr.splice(2,0,...add));
// console.log(arr);
let time=10;
setInterva(()=>{
    // const now =new Date();
    // console.log(now);
    let min=String(Math.trunc(time/60)).padStart(2,0);
    let sec=String(Math.trunc(time%60)).padStart(2,0);
    time--;
    // console.log);
    console.log(`${min}:${sec}`);
    
    
},1000);



