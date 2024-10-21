// let num = [1,2,3,45,34,5,56];
//     let newnum =num.map(x=>x%2==0);
//     console.log(newnum);

// const students =[
//     {name : "Alice" , score :50},
//     {name : "Ayush" , score :70},
//     {name : "Ayush sirohi" , score :80},
//     {name : "arsh" , score : 60},
//     {name : "ankit" , score :90}
// ];
// let scores = students.map((x)=>x.score).reduce((x,y) => x+y ,0);
// let scores = students.filter(x=>x.score>60).map((x)=> x.score+10).reduce((x,y) => x+y,0);
// console.log(scores);

// let num = [12,3,3,4,5,6,67,7,8];
// num.forEach((x)=>console.log(x*3));

// sayhello=()=>{
//     console.log("I am in hello function");
// };
// console.log("Start");
// setTimeout(sayhello, 3000);
// console.log("End");
// setTimeout(sayhello,6000);

console.log("start");
setTimeout(() => {
    console.log("first task completed");
    setTimeout(() =>{
        console.log("second task completed");
        setTimeout(() => {
            console.log("third task completed");
            setTimeout(()=>{
                console.log("fourth task completed");
            },4);
        },3000);
    } ,200);
}, 100);
console.log("End");

